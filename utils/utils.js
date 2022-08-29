const moment = require("moment");

function getWeek(data) {
	let week = Number(moment(data).format('E'));
	switch (week) {
		case 1:
			return '星期一'
		case 2:
			return '星期二'
		case 3:
			return '星期三'
		case 4:
			return '星期四'
		case 5:
			return '星期五'
		case 6:
			return '星期六'
		case 0:
			return '星期日'
	}
}

async function getNote() {
	// const res = await http.get("http://open.iciba.com/dsapi/")
	const res = await http.get("http://sentence.iciba.com/index.php?callback=&c=dailysentence&m=getTodaySentence")
	return res.data
}

function getBirthdayDiff(date) {
	let birthday = moment(date).year(moment().year())

	let diff = birthday.diff(moment(), 'day');
	if (diff < 0) {
		birthday = moment(date).year(moment().add(1, 'year').year())
		diff = birthday.diff(moment(), 'day');
		getBirthdayDiff();
	}
	return ++diff
}

module.exports = {
	getWeek,
	getNote,
	getBirthdayDiff,
}