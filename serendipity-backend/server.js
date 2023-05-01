//Require necessary npm packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const db = mongoose.connection

//Require DB Configuration File
const dbConfig = require('./config/db')

//Establish Database Connection
mongoose.connect(dbConfig)
db.on('error', (error) => console.log(`ERROR: ${error.message}`))
db.on('connected', () => console.log(`MongoDB Connected: ${dbConfig}`))
db.on('disconnected', () => console.log('MongoDB Disconnected'))

//Require Route Files
const indexRouter = require('./routes/index')
const articlesRouter = require('./routes/articles')

//Instantiate Express Application Object
const app = express()

//Define PORT for the API to run on
const port = process.env.PORT || 5000; //5000= fallback option, adds flexibility

/**
 * Middleware
 * Add `bodyParser` middleware which will parse JSON
 * requests into JS  object before it reaches the route files
 * the method `.use`sets up middleware for Express apps.
 */

app.use(express.json())

//set CORS headers on response from this API using the 'cors' npm package
app.use(cors({
    origin: 'http://localhost:3000'
}))


/**
 * Routes
 * 
 * Mount the imported Routers
 */

app.use(indexRouter)
app.use(articlesRouter)

//Start the server and listen for requests on the given port
app.listen(port, () => console.log(`Serendipity is listening on port ${port}`))
