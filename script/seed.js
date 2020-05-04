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
    User.create({
      name: 'Cody',
      email: 'cody@email.com',
      image:
        'https://cdn.vox-cdn.com/thumbor/woc63zDP8HeSIy1l3bk5nc5DPkU=/0x0:500x375/1400x1400/filters:focal(158x110:238x190):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/59741997/n4scgse21iuz.0.jpg',
      password: '123'
    }),
    User.create({
      name: 'Murphy',
      email: 'murphy@email.com',
      image:
        'https://lh3.googleusercontent.com/proxy/VavhyPK340qHaAGZKFPpLvK2IoCmLVPjlPXxWTsZ22On4Y4uhzdFNNZmY8w7--CCkZYsVpfDnydLaYfJOGqZnCdxqUSKBm6ymdQwTaclKSCzvfd2714FHZNCC-hUB_SWb5PsTnrB2wb6VFN29Cih4sAZ4sbJDlCci1M',
      password: '123'
    }),
    User.create({
      name: 'Bartholomew',
      email: 'bartholomew@email.com',
      image:
        'https://i.pinimg.com/originals/a7/82/a5/a782a5d5d57fa7a330b1bef3a624a99a.png',
      password: '123'
    }),
    User.create({
      name: 'Bob',
      email: 'bob@email.com',
      image:
        'https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_-1024x768.jpg',
      password: '123'
    })
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
    }),
    Channel.create({
      name: 'AllFood',
      image:
        'https://image.shutterstock.com/image-photo/american-pizza-pepperoni-mozzarella-tomato-260nw-697347319.jpg',
      description: 'If you want to get hungry come here !'
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
    }),
    Message.create({
      content: 'I am never leaving the house again!',
      userId: 3,
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
    }),
    UserChannels.create({
      channelId: 3,
      userId: 4
    }),
    UserChannels.create({
      channelId: 3,
      userId: 1
    })
  ])
  const friends = await Promise.all([
    Friends.create({
      userId: 3
    }),
    Friends.create({
      userId: 4
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
