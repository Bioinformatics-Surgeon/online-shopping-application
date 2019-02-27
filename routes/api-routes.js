const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the articles
  app.get('/api/products', function(req, res) {
    db.Bamazon.findAll({}).then(function(dbBamazon) {
      res.json(dbBamazon);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single article
  app.get('/api/products/:id', function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBamazon) {
      res.json(dbBamazon);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new article
  app.post('/api/Products', function(req, res) {
    db.Article.create(req.body).then(function(dbBamazon) {
      res.json(dbBamazon);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // PUT route for updating articles
  app.put('/api/Products/:id', function(req, res) {
    db.Product.update(
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
  app.delete('/api/Products/:id', function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBamazon) {
      res.json(dbBamazon);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

};
e