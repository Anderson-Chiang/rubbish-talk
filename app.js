const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rubbishTalk = require('./rubbish_talk')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set static files
app.use(express.static('public'))

// set body parser
app.use(bodyParser.urlencoded({ extended: true }))

// set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = rubbishTalk(req.body.job)
  res.render('index', { options: options })
})

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})