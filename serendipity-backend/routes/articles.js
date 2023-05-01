//NPM packages
const express = require('express')

//Require Mongoose Model for Article

const Article = require('../models/article')

//Instantiate a Router (mini app that handles routes)
const router = express.Router()


/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /api/articles
 * Description: Get All Articles
 */

router.get('/api/articles', (req, res) => {
    Article.find()
    .then(allArticles => {
        res.json({articles: allArticles})
    })
    .catch(error => res.status(500).json({error: error}))
})

/**
 * Action:      SHOW
 * Method:      GET
 * URI:         /api/articles/644ef2f60bf76b599d86f44d
 * Description: Get an Article by Article ID
 */

/**
 * Action:      DESTROY
 * Method:      DELETE
 * URI:         /api/articles/644ef2f60bf76b599d86f44d
 * Description: Delete an Article by Article ID
 */

/**
 * Action:      UPDATE
 * Method:      PUT/PATCH
 * URI:         /api/articles/644ef2f60bf76b599d86f44d
 * Description: Update an Article by Article ID
 */

/**
 * Action:      CREATE
 * Method:      POST
 * URI:         /api/articles
 * Description: Create a new Article
 */



//Export Router so we can use it in server.js file
module.exports = router