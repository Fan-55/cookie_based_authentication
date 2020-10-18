const express = require('express')
const router = express.Router()
const checkLoginUser = require('../../middleware/check-login-user')
const checkAuth = require('../../middleware/check-auth')
const User = require('../../models/user')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', checkLoginUser)

router.get('/dashboard', checkAuth, (req, res) => {
  const userId = req.cookies.session_Id
  User.findOne({ _id: userId })
    .then(user => {
      res.render('dashboard', { firstName: user.firstName })
    })
    .catch(err => console.log(err))
})

router.post('/logout', (req, res) => {
  const userId = req.cookies.session_Id
  res.clearCookie('session_Id', `${userId}`)
  return res.redirect('/users/login')
})

module.exports = router