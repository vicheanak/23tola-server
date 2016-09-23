'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
articles = require('../../app/controllers/articles');

module.exports = function(app) {
// Article Routes
app.route('/articles')
    .get(articles.all)
    .post(articles.create);
app.route('/articles/:articleId')
    .get(articles.show)
    .put(articles.update)
    .delete(articles.destroy);

// Finish with setting up the articleId param
// Note: the articles.article function will be called everytime then it will call the next function.
app.param('articleId', articles.article);
};

