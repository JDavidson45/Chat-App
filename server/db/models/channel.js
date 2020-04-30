const Sequelize = require('sequelize')
const db = require('../db')

const Channel = db.define('channel', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=90&auto=webp'
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Channel
