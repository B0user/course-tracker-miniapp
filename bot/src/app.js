const express = require('express');
const bot = require('./bot/bot');

const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
	bot.processUpdate(req.body);
	res.sendStatus(200);
});

module.exports = app;


