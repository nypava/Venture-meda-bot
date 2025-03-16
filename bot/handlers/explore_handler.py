from telebot import TeleBot
from utilities.reply.text import text
from utilities import Database 
from utilities.reply.button import GenerateNavigatorMarkup
from telebot.types import Message
from telebot.types import InlineKeyboardMarkup
from telebot.types import InlineKeyboardButton
from json import load


with open("data/courses.json") as file:
    courses_data= load(file).get("courses")

db = Database()

COURSES_IMAGE = "assets/courses-image.png"

class ExploreHandler():
    def __init__(self, bot:TeleBot) -> None:
       self.bot:TeleBot = bot

    def explore_handler(self, message: Message) -> None:
        user_id = message.from_user.id
        
        courses = []

        for course in courses_data:
            courses.append({
                "title": course["title"],
                "callback_data": f"{course["value"]}"
            })
        
        reply_markup = GenerateNavigatorMarkup(courses) 

        self.bot.send_photo(user_id, open(COURSES_IMAGE, "br+"), caption=text["explore"], reply_markup=reply_markup)
