const config = require('./config.json')
const env = process.env.NODE_ENV || 'development';

module.exports = config[env];