function cancelKeyboard() {
	return {
		inline_keyboard: [[
			{ text: 'Отмена', callback_data: 'cancel_lead' }
		]]
	};
}

function levelsKeyboard() {
	return {
		inline_keyboard: [
			[
				{ text: 'A1', callback_data: 'level_A1' },
				{ text: 'A2', callback_data: 'level_A2' },
				{ text: 'B1', callback_data: 'level_B1' }
			],
			[
				{ text: 'B2', callback_data: 'level_B2' },
				{ text: 'C1', callback_data: 'level_C1' }
			],
			[
				{ text: 'Отмена', callback_data: 'cancel_lead' }
			]
		]
	};
}

module.exports = {
	cancelKeyboard,
	levelsKeyboard
};


