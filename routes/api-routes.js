const db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the articles
  app.get('/api/products', function (req, res) {
    db.Product.findAll({}).then(function (rows) {
      res.json(rows);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single article
  app.get('/api/products/:id', function (req, res) {
    db.Product.find({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new article
  app.put('/api/products/:id', function (req, res) {
    db.Product.update(
      req.body, { where: { id: req.params.id } }
    ).then(function (data) {
      res.json(data);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

};
