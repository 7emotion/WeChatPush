const moment = require("moment");
const { lookup, qweather } = require('../../utils/weather.js')
const utils = require("../../utils/utils.js")

async function run(wx) {
	const city = await lookup();
	console.log("city", city);
	const weather = await qweather(city);
	console.log("weather", weather);
	let note = await utils.getNote()
	for (let index = 0; index < config.users.length; index++) {
		const template = {
			"touser": config.users[index],
			"template_id": config.templateId,
			"topcolor": "#FF0000",
			"data": {
				"date": {
					"value": moment().format("yyyy-MM-DD"),
					"color": "#ed5736"
				},
				"week": {
					"value": utils.getWeek(),
					"color": "#ffb3a7"
				},
				"city": {
					"value": config.location,
					"color": "#177cb0"
				},
				"textDay": {
					"value": weather.textDay,
					"color": "#4b5cc4"
				},
				"tempMin": {
					"value": weather.tempMin,
					"color": "#1685a9"
				},
				"tempMax": {
					"value": weather.tempMax,
					"color": "#ff2d51"
				},
				"lovediff": {
					"value": moment().diff(moment(config.love), 'day') + 1,
					"color": "#ef7a82"
				},
				"mandiff": {
					"value": utils.getBirthdayDiff(config.man),
					"color": "#ef7a82"
				},
				"womandiff": {
					"value": utils.getBirthdayDiff(config.woman),
					"color": "#ef7a82"
				},
				"note_en": {
					"value": config.note_en || note.content,
					"color": "#a78e44"
				},
				"note_ch": {
					"value": config.note_ch || note.note,
					"color": "#b35c44"
				},
			}
		}
		await wx.send(template).then(res => {
			console.log(config.users[index], '发送成功');
		}).catch(err => {
			console.log(config.users[index], '发送失败');
		})
	}
}

module.exports = {
	run,
}