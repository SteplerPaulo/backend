module.exports = function (app) {
  const auth = require('../controller/auth.controller.js');

  app.post('/login', auth.checkUsername, auth.checkPassword);

  /*
  app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  */

}