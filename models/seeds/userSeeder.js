const db = require('../../config/mongoose')
const User = require('../user')
const bcrypt = require('bcrypt')

db.once('open', () => {
  console.log('MongoDB connected!')
  const userSeeds = require('./userSeeds.json').users
  for (const user of userSeeds) {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return console.log(err)
      } else {
        User.create({
          firstName: user.firstName,
          email: user.email,
          password: hash
        })
      }
    })
  }
})