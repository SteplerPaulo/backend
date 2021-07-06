const db = require('../config/db.config.js');
const Product = db.products;
const ProductImage = db.product_images;
const Op = db.Sequelize.Op;

exports.findByID = (req, res) => {
	Product.findOne({
		attributes: ['id', 'name', 'price'],
		include: [{
			model: ProductImage,
			where: { product_id: db.Sequelize.col('products.id') },
			attributes: ['id', 'img_file', 'caption']
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
		attributes: ['id', 'name', 'price'],
		include: [{
			model: ProductImage,
			where: { product_id: db.Sequelize.col('products.id') },
			attributes: ['id', 'img_file', 'caption']
		}]
	}).then(products => {
		res.send(products);
	});
};

const getPagination = (page, size) => {
	const limit = size ? +size : 12;
	const offset = page ? ((page -1)  * limit) : 0;
	return { limit, offset };
};

const getPagingData = (data, page, limit) => {
	const { count: totalItems, rows: rows } = data;
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);

	return { totalItems, rows, totalPages, currentPage };
};

exports.findAllQuery = (req, res) => {
	const { page, size, query } = req.query;
	var condition = query ? { name: { [Op.like]: `%${query}%` } } : null;
  
	const { limit, offset } = getPagination(page, size);

	Product.findAndCountAll({
		attributes: ['id', 'name', 'price'],
		where: condition,
		limit: limit,
		offset: offset,
		order: [['id', 'ASC']],
		include: [{
			model: ProductImage,
			where: { product_id: db.Sequelize.col('products.id') },
			attributes: ['id', 'img_file', 'caption']
		}]
	}).then(data => {
		const response = getPagingData(data, page, limit);
      	res.send(response);
	});
};