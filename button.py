from telebot import types
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

def choice_button():
    markup = InlineKeyboardMarkup()
    button = InlineKeyboardButton("Start Your story", url="https://example.com")
    markup.add(button)
    return markup