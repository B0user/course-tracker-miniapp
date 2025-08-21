const TelegramBot = require('node-telegram-bot-api');
const { BOT_TOKEN } = require('../../config/env');

const bot = new TelegramBot(BOT_TOKEN);

bot.on('polling_error', (error) => console.log(error));

module.exports = bot;


