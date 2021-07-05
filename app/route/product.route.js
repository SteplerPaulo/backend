module.exports = function(app) {
 
    const products = require('../controller/products.controller.js');
 
    // Retrieve all Products
    app.get('/api/products/all', products.findAll);

    // Retrieve by ID
    app.get('/api/products/:id', products.findByID);

    // Retrieve per page
    app.get('/api/products', products.findAllQuery);
}