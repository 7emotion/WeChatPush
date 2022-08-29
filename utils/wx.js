const moment = require("moment");
const { getWeek, getBirthdayDiff, getNote } = require("./utils.js")
let token = "";

async function init() {
	const res = await http(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wxconfig.appID}&secret=${wxconfig.appsecret}`)
	if (res.data.errcode) {
		throw new Error(res.data.errmsg)
	}
	else {
		token = res.data.access_token
	}
}

function send(template) {
	return http.post(`https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`, template)
}

module.exports = {
	init,
	send,
}