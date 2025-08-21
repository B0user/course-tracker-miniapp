async function safeReply(bot, chatId, text, options = {}) {
	try {
		return await bot.sendMessage(chatId, text, options);
	} catch (error) {
		console.error('sendMessage error:', error);
		return null;
	}
}

module.exports = safeReply;


