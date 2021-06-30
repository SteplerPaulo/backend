module.exports = function(app) {
 
    const products = require('../controller/products.controller.js');
 
    // Retrieve all Products
    app.get('/api/products/all', products.findAll);


    // Retrieve all Products
    app.get('/api/products/:id', products.findByID);
}