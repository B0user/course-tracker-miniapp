const registerStartCommand = require('../handlers/commands/start');
const { registerLeadHandlers } = require('../handlers/trial/lead.controller');

function registerHandlers(bot) {
	registerStartCommand(bot);
	const lead = registerLeadHandlers(bot);

	// Start trial from start menu callback
	bot.on('callback_query', async (query) => {
		if (query.data === 'trial_start') {
			const chatId = query.message?.chat?.id;
			if (chatId) lead.startDialog(chatId);
		}
	});
}

module.exports = registerHandlers;


