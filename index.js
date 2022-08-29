const modular = "1"
global.wxconfig = require('./wxconfig.js');
global.http = require('axios');
const app = require('./app.js')
app.run(modular);