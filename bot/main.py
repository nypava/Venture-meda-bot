from telebot import TeleBot
from telebot.types import Message
from dotenv import load_dotenv
from os import getenv
from handlers.start_handler import StartHandler 
from handlers.explore_handler import ExploreHandler
from handlers.callback_handler import  CallbackHandler

load_dotenv()

bot_token = getenv("bot_token")

bot = TeleBot(str(bot_token))

start_handler = StartHandler(bot)
explore_handler = ExploreHandler(bot)
callback_handler = CallbackHandler(bot)

bot.register_message_handler(start_handler.start_handler, commands=["start"])
bot.register_message_handler(explore_handler.explore_handler, func=lambda message: message.text == "Courses")
bot.register_callback_query_handler(callback_handler.callback_handler, func=lambda call: True)

bot.infinity_polling()
