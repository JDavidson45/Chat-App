const User = require('./user')
const Message = require('./message')
const Channel = require('./channel')
const UserChannels = require('./userChannels')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
Message.belongsTo(User)
User.hasMany(Message)

User.belongsToMany(Channel, {through: 'userChannels'})
Channel.belongsToMany(User, {through: 'userChannels'})

Channel.hasMany(Message)
Message.belongsTo(Channel)
module.exports = {
  User,
  Message,
  Channel,
  UserChannels
}
