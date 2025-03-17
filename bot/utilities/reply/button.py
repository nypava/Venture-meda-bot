from dotenv import load_dotenv
from os import getenv
from telebot.types import (
    InlineKeyboardMarkup, 
    InlineKeyboardButton,
    KeyboardButton,
    ReplyKeyboardMarkup,
    WebAppInfo
)

load_dotenv()

_learn_url = getenv("learn_url")
_quiz_url = getenv("quiz_url")

_register_url = str(_learn_url) + "/register"

setup_markup = InlineKeyboardMarkup(
    [
        [
            InlineKeyboardButton("Register", web_app=WebAppInfo(_register_url))
        ]
    ]
)

def GenerateLearnMarkup(learn_url: str ,quiz_url) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        [
            [
                InlineKeyboardButton("Learn", web_app=WebAppInfo(learn_url)),
            ],
            [
                InlineKeyboardButton("Quiz", web_app=WebAppInfo(quiz_url))
            ]
        ]
    )


start_button = ReplyKeyboardMarkup(resize_keyboard=True, is_persistent=True)
start_button.add(KeyboardButton("Courses"))


def GenerateNavigatorMarkup(data: list[dict[str, str]]) -> None:
    markup = InlineKeyboardMarkup()
    
    for i in data:
        markup.add(InlineKeyboardButton(i["title"], callback_data=i["callback_data"]))
    
    return markup
