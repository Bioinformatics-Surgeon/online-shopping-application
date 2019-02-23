// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the articles
  app.get('/api/articles', function(req, res) {
    db.Article.findAll({}).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single article
  app.get('/api/articles/:id', function(req, res) {
    db.Article.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new article
  app.post('/api/articles', function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating articles
  app.put('/api/articles/:id', function(req, res) {
    db.Article.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting articles
  app.delete('/api/articles/:id', function(req, res) {
    db.Article.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArticle) {
      res.json(dbArticle);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
