const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./config/routes.js');

const App = express()

App.use(morgan('dev'))
App.use(bodyParser.urlencoded({ extends: false }))
App.use(express.json())
App.use(cors())
App.use(routes)

App.listen(3001, () => {
  console.log('Express started at http://localhost:3001')
})