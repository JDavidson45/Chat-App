const Sequelize = require('sequelize')
const db = require('../db')

const UserChannels = db.define('userChannels', {})

module.exports = UserChannels
