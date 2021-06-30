const db = require('../config/db.config.js');
const Banner = db.banners;

exports.findByID = (req, res) => {	
	Banner.findOne({
		attributes: ['id', 'name', 'img_file','caption','is_active'],
		where: {
			id: req.params.id
		}
	}).then(products => {
	   res.send(products);
	});
};

// Fetch all Companies include Products
exports.findAll = (req, res) => {
	Banner.findAll({
		attributes: ['id', 'name', 'img_file','caption','is_active'],
	}).then(categories => {
	   res.send(categories);
	});
};