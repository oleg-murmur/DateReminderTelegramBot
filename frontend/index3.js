import TelegramBot from 'node-telegram-bot-api';
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const chatId = 'CHAT_ID'; // ID чата, куда бот будет отправлять уведомления

const bot = new TelegramBot(token, { polling: true });

function sendNotification(date, time, message) {
    const currentDate = new Date();
    const notificationDate = new Date(`${date} ${time}`);

    if (currentDate < notificationDate) {
        const diff = notificationDate - currentDate;
        setTimeout(() => {
            bot.sendMessage(chatId, message);
        }, diff);
    }
}

// Пример использования функции sendNotification
sendNotification('2022-07-01', '09:00:00', 'Привет! Не забудь про важное дело сегодня в 9:00!');