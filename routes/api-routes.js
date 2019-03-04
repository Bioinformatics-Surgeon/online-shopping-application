const db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the products
  app.get('/api/products', function (req, res) {
    db.Product.findAll({}).then(function (rows) {
      res.header('Access-Control-Allow-Origin', '*');
      res.json(rows);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single new product
  app.get('/api/products/:id', function (req, res) {
    db.Product.find({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.header('Access-Control-Allow-Origin', '*');
      res.json(data);
    }).catch(function (error) {
      res.header('Access-Control-Allow-Origin', '*');
      res.json({ error: error });
    });
  });

  // POST route for saving a new product
  app.post('/api/products', function (req, res) {
    console.log(req.body)
    let productName = req.body.product_name;
    let quantity = req.body.quantity;
    
    db.Product.find({
      where: {
        product_name: productName
      }
    }).then(function(targetProduct){
      
      return targetProduct.stock_quantity - quantity;
      
    }).then(function(updatedQuantity){
      
      return db.Product.update(
        {stock_quantity: updatedQuantity}, 
        { where: { product_name: productName } 
        
    }).then(function (data) {
      res.header('Access-Control-Allow-Origin', '*');
      res.redirect('/');
    }).catch(function (error) {
      res.header('Access-Control-Allow-Origin', '*');
      res.json({ error: error });
    });
    })
    
    
  });
};
