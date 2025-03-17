from telebot import TeleBot
from utilities import Database 
from utilities.reply.text import text
from utilities.reply.button import GenerateLearnMarkup
from telebot.types import CallbackQuery
from utilities.reply import button
from utilities.certificate import certificate
from json import load
import os, dotenv

REGISTERATION_IMAGE = "assets/register-image.jpg"
START_IMAGE = "assets/start-image.jpg"

dotenv.load_dotenv()

learn_url = os.getenv("learn_url")
quiz_url = os.getenv("quiz_url")

with open("data/courses.json") as file:
    courses_data = load(file).get("courses")

db = Database()

class CallbackHandler():
    def __init__(self, bot:TeleBot) -> None:
       self.bot:TeleBot = bot

    def callback_handler(self, callback: CallbackQuery) -> None: 
        user_id = callback.from_user.id
        if "certificate" in str(callback.data):
            course_name = callback.data.split("_")[0]
            user_data = db.get_registration(user_id)
            full_name = f"{user_data["info"]["first_name"]} {user_data["info"]["father_name"]} {user_data["info"]["grand_father_name"]}"
            certificate_image = certificate.create_certificate(full_name, course_name)
            self.bot.send_photo(user_id, photo=certificate_image)

        elif "learn" in str(callback.data):
            course = {}

            for i in courses_data:
                if i["value"] == callback.data:
                    course = i

            print(f"{quiz_url}?value={course["value"]}")

            self.bot.send_photo(
                user_id, 
                photo=course["cover_image"], 
                caption=text["course_detail"].format(course["title"], course["description"], course["time"]), 
                parse_mode="HTML",
                reply_markup=GenerateLearnMarkup(f"{learn_url}/learn/{course["value"]}", f"{quiz_url}?value={course["value"]}", course["value"])
            ) 
        
        elif "done" in str(callback.data): 
            self.bot.send_photo(user_id, open(START_IMAGE, "br+"), caption=text["start"], reply_markup=button.start_button, parse_mode="MarkdownV2")    
        self.bot.answer_callback_query(callback.id, "")
