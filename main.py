import telebot
import button

print("Starting bot...")
bot = telebot.TeleBot('7616221037:AAHtMJonLLxohHZvVBKeIvVN6z6L5j-Bv1M')
reply_markup = button.choice_button()

@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, "Hi, click the button to start your story".format(message.from_user), reply_markup = reply_markup)

bot.polling(none_stop=True)