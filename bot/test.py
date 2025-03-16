from telebot import TeleBot
from dotenv import load_dotenv
from os import getenv
from telebot.types import Message

load_dotenv()

bot_token = getenv("bot_token")

#bot_token = "7703608209:AAFK4eTrZ3Mm7wET8i1anN3SQeshmL2Ezco"
file_id = "AgACAgQAAyEFAASKnhIUAAMNZ8w8q-Dt9gfI1Q5JgKdT9lrBGgwAAqrFMRtZ52BSqh6NL0pcWjIBAAMCAAN5AAM2BA"
bot = TeleBot(str(bot_token))

bot.send_photo("@idkidkikdk", file_id)

@bot.channel_post_handler(func=lambda message: True, content_types=["text", "sticker", "pinned_message", "photo", "audio"])
def main(message:Message):
    print(message)

bot.infinity_polling()
