const fs = require('fs');
const { MINI_APP_URL } = require('../../../config/env');
const safeReply = require('../../utils/safeReply');

module.exports = function registerStartCommand(bot) {
	bot.onText(/\/start/, async (msg) => {
		const chatId = msg.chat.id;

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
		try {
			fs.appendFileSync('user_log.json', JSON.stringify(userInfo) + ',\n');
		} catch (e) {
			console.error('Failed to write user_log.json:', e);
		}

		const keyboard = {
			inline_keyboard: [
				[
					{ text: 'Открыть Mini App', web_app: { url: MINI_APP_URL } }
				],
				[
					{ text: 'Записаться на пробный', callback_data: 'trial_start' }
				]
			]
		};

		await safeReply(bot, chatId, 'Добро пожаловать! Выберите действие:', {
			reply_markup: keyboard
		});
	});
};


