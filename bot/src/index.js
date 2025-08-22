const app = require('./app');
const bot = require('./bot/bot');
const registerHandlers = require('./bot/registerHandlers');
const { WEBHOOK_URL, PORT } = require('../config/env');

registerHandlers(bot);

bot.setWebHook(`${WEBHOOK_URL}/webhook`)
	.then(() => console.log('Вебхук успешно установлен'))
	.catch((error) => console.error('Ошибка при установке вебхука:', error));

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});


