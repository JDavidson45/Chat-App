'use strict'

const db = require('../server/db')
const {
  User,
  Channel,
  Message,
  UserChannels,
  Friends
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({name: 'Cody', email: 'cody@email.com', password: '123'}),
    User.create({name: 'Murphy', email: 'murphy@email.com', password: '123'}),
    User.create({
      name: 'Bartholomew',
      email: 'bartholomew@email.com',
      password: '123'
    }),
    User.create({name: 'Bob', email: 'bob@email.com', password: '123'})
  ])
  const channel = await Promise.all([
    Channel.create({
      name: 'Introverts',
      image:
        'https://meme-creator.com/media/images/template-ah-yes-enslaved.JPEG',
      description: 'This quarantine is giving me a reason to stay home'
    }),
    Channel.create({
      name: 'Extroverts',
      image: 'https://i.chzbgr.com/full/9201176832/h04CD15A3/egg-meme-face',
      description: '99th day no human contact'
    })
  ])

  const message = await Promise.all([
    Message.create({
      content: 'Hey what is up ?!',
      userId: 1,
      channelId: 2
    }),
    Message.create({
      content: 'It is a lovely day to stay inside',
      userId: 2,
      channelId: 1
    })
  ])
  const userThroughChannels = await Promise.all([
    UserChannels.create({
      channelId: 1,
      userId: 2
    }),
    UserChannels.create({
      channelId: 2,
      userId: 1
    }),
    UserChannels.create({
      channelId: 2,
      userId: 3
    }),
    UserChannels.create({
      channelId: 1,
      userId: 1
    })
  ])
  const friends = await Promise.all([
    Friends.create({
      friendshipId: 3,
      userId: 2
    }),
    Friends.create({
      friendshipId: 4,
      userId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
