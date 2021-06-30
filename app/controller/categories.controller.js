const db = require('../config/db.config.js');
const Category = db.categories;
//const ProductImages = db.product_images;
 



exports.findByID = (req, res) => {	
	Category.findOne({
		attributes: ['id', 'name', 'slug'],
		where: {
			id: req.params.id
		}
	}).then(products => {
	   res.send(products);
	});
};

// Fetch all Companies include Products
exports.findAll = (req, res) => {
	Category.findAll({
		attributes: ['id', 'name', 'slug'],
	}).then(categories => {
	   res.send(categories);
	});
};