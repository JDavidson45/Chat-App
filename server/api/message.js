const router = require('express').Router()
const Channel = require('../db/models/channel')
const User = require('../db/models/user')
const Message = require('../db/models/message')

module.exports = router

router.get('/:channelId', async (req, res, next) => {
  try {
    const messages = await Message.findAll(
      {where: {channelId: req.params.channelId}},
      {include: [Channel, User]}
    )
    res.json(messages)
  } catch (err) {
    next(err)
  }
})
