module.exports = function(app) {
 
    const banners = require('../controller/banners.controller.js');
 
    // Retrieve all Products
    app.get('/api/banners/all', banners.findAll);


    // Retrieve by ID
    app.get('/api/banners/:id', banners.findByID);
}