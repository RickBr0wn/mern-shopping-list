const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

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

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// set up port to 'listen' 
const port = process.env.PORT || 5000

// start server
app.listen(port, () => console.log(`Server started on port ${port}`))