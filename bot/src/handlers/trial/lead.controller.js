const fs = require('fs');
const path = require('path');
const safeReply = require('../../utils/safeReply');
const { levelsKeyboard, cancelKeyboard } = require('./lead.keyboards');
const { ADMIN_IDS } = require('../../../config/env');

// dialog states
const STATE_IDLE = 'idle';
const STATE_ASK_NAME = 'ask_name';
const STATE_ASK_PHONE = 'ask_phone';
const STATE_ASK_LEVEL = 'ask_level';

const userStates = new Map(); // chatId -> { state, data }

function ensureDataDir() {
	const dir = path.join(process.cwd(), 'data');
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
	const file = path.join(dir, 'leads.json');
	if (!fs.existsSync(file)) fs.writeFileSync(file, '');
	return file;
}

function isValidPhone(input) {
	return /^\+?\d[\d\s\-()]{5,}$/.test(String(input).trim());
}

async function notifyAdmins(bot, text) {
	if (!Array.isArray(ADMIN_IDS) || ADMIN_IDS.length === 0) return;
	await Promise.all(
		ADMIN_IDS.map((id) => safeReply(bot, id, text).catch(() => null))
	);
}

function formatLeadSummary(lead) {
	return [
		'Новая заявка на пробный урок:',
		`Имя: ${lead.name}`,
		`Телефон: ${lead.phone}`,
		`Уровень: ${lead.level}`,
		`TG: @${lead.tgUsername || '-'} (id: ${lead.userId})`,
		`Когда: ${lead.createdAt}`
	].join('\n');
}

function resetState(chatId) {
	userStates.delete(chatId);
}

function startDialog(bot, chatId) {
	userStates.set(chatId, { state: STATE_ASK_NAME, data: {} });
	return safeReply(bot, chatId, 'Как вас зовут?', { reply_markup: cancelKeyboard() });
}

function handleCallback(bot) {
	return async (query) => {
		const chatId = query.message?.chat?.id;
		if (!chatId) return;
		const state = userStates.get(chatId);

		if (query.data === 'cancel_lead') {
			resetState(chatId);
			await safeReply(bot, chatId, 'Заявка отменена.');
			return;
		}

		if (!state) return; // ignore if not in flow

		if (state.state === STATE_ASK_LEVEL && query.data.startsWith('level_')) {
			state.data.level = query.data.replace('level_', '');
			await completeLead(bot, chatId, state.data, query.message?.from);
			resetState(chatId);
		}
	};
}

async function completeLead(bot, chatId, data, from) {
	const file = ensureDataDir();
	const lead = {
		userId: chatId,
		tgUsername: from?.username || '',
		name: data.name,
		phone: data.phone,
		level: data.level,
		createdAt: new Date().toISOString()
	};
	try {
		fs.appendFileSync(file, JSON.stringify(lead) + '\n');
	} catch (e) {
		console.error('Failed to write lead:', e);
	}
	await safeReply(bot, chatId, 'Спасибо! Мы свяжемся с вами для записи на пробный.');
	await notifyAdmins(bot, formatLeadSummary(lead));
}

function handleText(bot) {
	return async (msg) => {
		const chatId = msg.chat.id;
		const text = (msg.text || '').trim();
		const s = userStates.get(chatId);
		if (!s) return;

		if (s.state === STATE_ASK_NAME) {
			s.data.name = text;
			s.state = STATE_ASK_PHONE;
			await safeReply(bot, chatId, 'Ваш номер телефона? (например, +79123456789)', { reply_markup: cancelKeyboard() });
			return;
		}

		if (s.state === STATE_ASK_PHONE) {
			if (!isValidPhone(text)) {
				await safeReply(bot, chatId, 'Пожалуйста, введите корректный номер (только цифры и +).', { reply_markup: cancelKeyboard() });
				return;
			}
			s.data.phone = text;
			s.state = STATE_ASK_LEVEL;
			await safeReply(bot, chatId, 'Выберите текущий уровень:', { reply_markup: levelsKeyboard() });
			return;
		}
	};
}

function registerLeadHandlers(bot) {
	bot.on('callback_query', handleCallback(bot));
	bot.on('message', handleText(bot));
	bot.onText(/\/trial/, (msg) => {
		startDialog(bot, msg.chat.id);
	});

	return { startDialog: (chatId) => startDialog(bot, chatId) };
}

module.exports = {
	registerLeadHandlers
};


