//Require necessary NPM packages
const express = require('express');
const mongoose = require('mongoose')
const db = mongoose.connection

//Require DB Configuration File
const dbConfig = require('./config/db')

//Establish Database Connection
mongoose.connect(dbConfig)
    db.on('error', (error) => console.log(`ERROR: ${error.message}`))
    db.on('connected', () => console.log(`MongoDB Connected: ${dbConfig}`))
    db.on('disconnected', () => console.log(`MongoDB Disconnected`))

//Require Route Files
const indexRouter = require('./routes/index')

//Instantiate Express Application Object
const app = express();

//Define PORT for API to run on
const port = process.env.PORT || 5000

//Routes: mount imported Routers
app.use(indexRouter)

//Start server and listen for requests on the given port
app.listen(port, () => console.log(`Serendipidity Server is listening on port ${port}...`));





//Models
//const Record = require('./record.js')



// const mongoURI = 'mongodb://localhost:27017/<db name>'
// const db = mongoose.connection;

//connect to mongoDB
// mongoose.connect(mongoURI)
//     .then(() => console.log('MongoDB Connection Established!'))
    // db.on('error', (error) => console.log(`ERROR: ${error.message}`))
    // db.on('connected', () => console.log(`MongoDB Connected: ${mongoURI}`))
    // db.on('disconnected', () => console.log(`MongoDB Disconnected`))



//Middleware
app.use(express.json())

