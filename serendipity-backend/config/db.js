//Define the database for the development environment
const localDB = 'mongodb://localhost:27017/serendipity'

//Environment variable MONGODB_URI will be available in Heroku environment
//Otherwise use the development database

const currentDB = process.env.MONGODB_URI || localDB

//Export the appropriate database based on current environment
module.exports = currentDB