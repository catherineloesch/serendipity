//NPM packages
const express = require('express')

//Instantiate a Router (mini app that handles routes)
const router = express.Router()


/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: Greet Users to app
 */

router.get('/', (req, res) => {
    res.json({message: 'Welcome!'})
})


//Export Router so we can use it in server.js file
module.exports = router