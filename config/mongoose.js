const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/login_cookie_test', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB connection error')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})

module.exports = db