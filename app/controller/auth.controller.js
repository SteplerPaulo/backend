const db = require("../config/db.config.js");
const User = db.users;

const jwt = require('jsonwebtoken');
const accessTokenSecret = "clickandgotoken";

exports.checkUsername = (req, res, next) => {
  const { username } = req.body;
  User.findOne({
    attributes: ["id", "username"],
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      next();
    } else {
      res.send({
        error:true,
        field:'username',
        message:'The username you entered isn’t registered.'
      });
    }
  });
};

exports.checkPassword = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    attributes: ["id", "username", "role"],
    where: {
      username: username,
      password: password,
    },
  }).then((user) => {
    if (user) {

      const accessToken  = jwt.sign({username:user.username,role:user.role},accessTokenSecret)

      res.send({
        token: accessToken,
        username: user.username,
        role: user.role
      });
    } else {
      res.send({
        error:true,
        field:'password',
        message:'The password you’ve entered is incorrect.'
      });
    }
  });
};
