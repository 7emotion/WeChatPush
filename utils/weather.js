async function lookup() {
	const res = await http.get(encodeURI(`https://geoapi.qweather.com/v2/city/lookup?location=${config.location}&key=${config.key}`))
	if (res.data.code == 200 && res.data.location.length > 0) {
		return res.data.location[0].id
	}
}

async function qweather(city) {
	const res = await http.get(encodeURI(`https://devapi.qweather.com/v7/weather/3d?location=${city}&key=${config.key}`))
	if (res.data.code == 200 && res.data.daily.length > 0) {
		return res.data.daily[0]
	}
}

module.exports = {
	lookup,
	qweather,
}