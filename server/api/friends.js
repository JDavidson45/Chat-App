const router = require('express').Router()
const {Friends, User} = require('../db/models')
const Channel = require('../db/models/channel')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await Friends.findAll({include: [User]})
    //const friends = await User.findAll({where: {id: friendshipId}})

    res.json(users)
  } catch (err) {
    next(err)
  }
})
