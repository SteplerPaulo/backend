module.exports = function (app) {

    const banners = require('../controller/banners.controller.js');

    // Retrieve all
    app.get('/api/banners/all', banners.findAll);


    // Retrieve by ID
    app.get('/api/banners/:id', banners.findByID);

    // Retrieve per page
    app.get('/api/banners', banners.findAllQuery);
}