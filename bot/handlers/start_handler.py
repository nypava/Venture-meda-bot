from telebot import TeleBot
from telebot.types import Message
from utilities.reply import button
from utilities.reply.text import text
from utilities import Database 

db = Database()

REGISTERATION_IMAGE = "assets/register-image.jpg"
START_IMAGE = "assets/start-image.jpg"

class StartHandler():
    def __init__(self, bot:TeleBot) -> None:
       self.bot:TeleBot = bot

    def start_handler(self, message: Message) -> None:
        user_id = message.from_user.id

        if not db.get_registration(user_id):
            self.bot.send_photo(user_id, open(REGISTERATION_IMAGE, "br+"), caption=text["register"], reply_markup=button.setup_markup)
        else:
            self.bot.send_photo(user_id, open(START_IMAGE, "br+"), caption=text["start"], reply_markup=button.start_button, parse_mode="MarkdownV2")    
