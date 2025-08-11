require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const fs = require('fs');
const app = express();

// Load from .env
const token = process.env.BOT_TOKEN;
const miniAppUrl = process.env.MINI_APP_URL;
const port = process.env.PORT || 2004;
const webhookUrl = process.env.WEBHOOK_URL;

// Init bot
const bot = new TelegramBot(token);

// Middleware
app.use(express.json());

// Telegram start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // User info
    const user = msg.from;
    const userInfo = {
        id: user.id,
        is_bot: user.is_bot,
        first_name: user.first_name,
        last_name: user.last_name || '',
        username: user.username || '',
        language_code: user.language_code || '',
        timestamp: new Date().toISOString()
    };

    console.log('👤 New user:', userInfo);
    fs.appendFileSync('user_log.json', JSON.stringify(userInfo) + ',\n');

    // Inline keyboard
    const keyboard = {
        inline_keyboard: [[
            { text: 'Открыть Mini App', web_app: { url: miniAppUrl } }
        ]]
    };

    bot.sendMessage(chatId, 'Добро пожаловать! Нажмите на кнопку ниже, чтобы открыть Mini App:', {
        reply_markup: keyboard
    });
});

// Error handling
bot.on('polling_error', (error) => console.log(error));

// Webhook route
app.post('/webhook', (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

// Set webhook
bot.setWebHook(`${webhookUrl}/webhook`)
    .then(() => console.log('Вебхук успешно установлен'))
    .catch((error) => console.error('Ошибка при установке вебхука:', error));


// Start server
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
