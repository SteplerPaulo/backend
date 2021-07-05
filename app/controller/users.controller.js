const db = require('../config/db.config.js');
const User = db.users;

exports.findByID = (req, res) => {	
	User.findOne({
		attributes: ['id', 'username', 'last_name','first_name','middle_name','is_admin'],
		where: {
			id: req.params.id
		}
	}).then(products => {
	   res.send(products);
	});
};

// Fetch all Companies include Products
exports.findAll = (req, res) => {
	User.findAll({
		attributes: ['id', 'username', 'last_name','first_name','middle_name','is_admin'],
	}).then(categories => {
	   res.send(categories);
	});
};