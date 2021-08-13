module.exports = function (app) {
    const api = require('../controller/api.controller.js');

    // Retrieve per page
    app.get('/api/:model', api.findAllQuery);


    app.post('/api/:model', api.postData);
}