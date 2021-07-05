module.exports = function(app) {
 
    const manufacturers = require('../controller/manufacturers.controller.js');
 
    // Retrieve all
    app.get('/api/manufacturers/all', manufacturers.findAll);


    // Retrieve by ID
    app.get('/api/manufacturers/:id', manufacturers.findByID);
}