from telebot import TeleBot
from utilities import Database 
from utilities.reply.text import text
from utilities.reply.button import GenerateLearnMarkup
from telebot.types import CallbackQuery
from json import load
import os, dotenv

dotenv.load_dotenv()
learn_url = os.getenv("learn_url")

with open("data/courses.json") as file:
    courses_data = load(file).get("courses")

db = Database()

class CallbackHandler():
    def __init__(self, bot:TeleBot) -> None:
       self.bot:TeleBot = bot

    def callback_handler(self, callback: CallbackQuery) -> None: 
        user_id = callback.from_user.id
        course = {}

        for i in courses_data:
            if i["value"] == callback.data:
                course = i

        self.bot.send_photo(
            user_id, 
            photo=course["cover_image"], 
            caption=text["course_detail"].format(course["title"], course["description"], '1', course["time"]), 
            parse_mode="HTML",
            reply_markup=GenerateLearnMarkup(f"{learn_url}/learn/{course["value"]}")
        ) 

        self.bot.answer_callback_query(callback.id, "")
