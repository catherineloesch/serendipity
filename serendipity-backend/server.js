//NPM packages
const express = require('express');
const mongoose = require('mongoose')

//Models
//const Record = require('./record.js')

//Define PORT for API to run on
const port = process.env.PORT || 5000

// const mongoURI = 'mongodb://localhost:27017/<db name>'
// const db = mongoose.connection;

//connect to mongoDB
// mongoose.connect(mongoURI)
//     .then(() => console.log('MongoDB Connection Established!'))
    // db.on('error', (error) => console.log(`ERROR: ${error.message}`))
    // db.on('connected', () => console.log(`MongoDB Connected: ${mongoURI}`))
    // db.on('disconnected', () => console.log(`MongoDB Disconnected`))

//Instantiate Express Application Object
const app = express();

//Middleware
app.use(express.json())

//Start server and listen for requests on the given port
app.listen(port, () => console.log(`Serendipidity Server is listening on port ${port}...`));

//routes
