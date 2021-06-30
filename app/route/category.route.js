module.exports = function(app) {
 
    const categories = require('../controller/categories.controller.js');
 
    // Retrieve all Products
    app.get('/api/categories/all', categories.findAll);


    // Retrieve by ID
    app.get('/api/categories/:id', categories.findByID);
}