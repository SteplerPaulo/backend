module.exports = function(app) {
 
    const users = require('../controller/users.controller.js');
 
    // Retrieve all
    app.get('/api/users/all', users.findAll);


    // Retrieve by ID
    app.get('/api/users/:id', users.findByID);
}