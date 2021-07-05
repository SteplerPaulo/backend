module.exports = function (app) {

    const categories = require('../controller/categories.controller.js');

    // Retrieve all
    app.get('/api/categories/all', categories.findAll);


    // Retrieve by ID
    app.get('/api/categories/:id', categories.findByID);

    // Retrieve per page
    app.get('/api/categories', categories.findAllQuery);
}