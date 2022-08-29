const wx = require('./utils/wx.js')

async function run(e) {
	await wx.init()
	global.config = require(`./configs/${e}/config.js`)
	const modular = require(`./configs/${e}/index.js`)
	await modular.run(wx);
}

module.exports = {
	run,
}