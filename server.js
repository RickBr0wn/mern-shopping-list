const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// body-parser middleware
app.use(bodyParser.json())

// mongoDB config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected..!'))
  .catch(error => console.log(error))

// use routes
app.use('/api/items', items)

// set up port to 'listen' 
const port = process.env.PORT || 5000

// start server
app.listen(port, () => console.log(`Server started on port ${port}`))