from telebot import types
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

def choice_button():
    markup = InlineKeyboardMarkup()
    button = InlineKeyboardButton("Start Your story", url="https://pabo1.github.io/TrainToBusan/story/html/index.html")
    markup.add(button)
    return markup