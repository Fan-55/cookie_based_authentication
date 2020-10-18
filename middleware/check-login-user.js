const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = function (req, res, next) {
  const { email, password } = req.body
  User.findOne({ email })
    .then(user => {
      //check if user exists
      if (!user) {
        return res.status(401).render('login', { error: 'Email or Password is incorrect! Please try again.', email })
      }

      //check if password is correct
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed'
          })
        }
        if (result) {
          const oneDay = 1000 * 24 * 60 * 60
          res.cookie('session_Id', `${user._id}`, { maxAge: oneDay })
          return res.status(200).redirect('/users/dashboard')
        }

        res.status(401).render('login', { error: ' Email or Password is incorrect! Please try again.', email })
      })

    })
    .catch(err => console.log(err))
}
