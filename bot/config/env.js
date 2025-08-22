require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const MINI_APP_URL = process.env.MINI_APP_URL;
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const PORT = process.env.PORT || 2004;
const ADMIN_IDS = (process.env.ADMIN_IDS || '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);

module.exports = {
	BOT_TOKEN,
	MINI_APP_URL,
	WEBHOOK_URL,
	PORT,
	ADMIN_IDS
};


