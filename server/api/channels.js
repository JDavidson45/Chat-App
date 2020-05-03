const router = require('express').Router()
const Channel = require('../db/models/channel')
const User = require('../db/models/user')
const Message = require('../db/models/message')
const UserChannels = require('../db/models/userChannels')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log(req.session)
    console.log('user', req.user)
    //const yourChannels = await UserChannels.findAll({where: {userId: req.user.id}})
    //console.log(yourChannels.userId)
    const channels = await User.findAll({
      include: Channel,
      where: {id: req.user.id}
    })
    res.json(channels)
  } catch (err) {
    next(err)
  }
})

router.get('/:channelId', async (req, res, next) => {
  try {
    const channels = await Channel.findByPk(req.params.channelId, {
      include: [User]
    })
    res.json(channels)
  } catch (err) {
    next(err)
  }
})

router.post('/:channelId', async (req, res, next) => {
  try {
    const message = await Message.create(req.body)
    await message.setUser(req.user)
    await message.setChannel(Number(req.params.channelId))
    const newMessage = await Message.findOne({
      include: [User, Channel],
      where: {id: message.id}
    })
    res.json(newMessage)
  } catch (err) {
    next(err)
  }
})
