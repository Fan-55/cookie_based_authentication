const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
require('./config/mongoose')
const routes = require('./routes/index')
const cookieParser = require('cookie-parser')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs', helpers: require('./utils/helpers') }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(routes)

app.listen(3000, () => {
  console.log('This app is listening at http://localhost:3000')
})