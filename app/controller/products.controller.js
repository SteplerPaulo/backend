const db = require('../config/db.config.js');
const Product = db.products;
const ProductImage = db.product_images;
 



exports.findByID = (req, res) => {	
	Product.findOne({
		attributes: [['id', 'product_id'], 'name', 'price'],
		include: [{
			model: ProductImage,
			where: { fk_companyid: db.Sequelize.col('products.id') },
			attributes: ['img_file', 'caption']
		}],
		where: {
			id: req.params.id
		}
	}).then(products => {
	   res.send(products);
	});
};

// Fetch all Companies include Products
exports.findAll = (req, res) => {
	Product.findAll({
		attributes: [['id', 'product_id'], 'name', 'price'],
		include: [{
			model: ProductImage,
			where: { fk_companyid: db.Sequelize.col('products.id') },
			attributes: ['img_file', 'caption']
		}]
	}).then(products => {
	   res.send(products);
	});
};