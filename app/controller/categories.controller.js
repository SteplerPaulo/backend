const db = require('../config/db.config.js');
const Category = db.categories;
const Op = db.Sequelize.Op;
 
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

	Category.findAndCountAll({
		attributes: ['id', 'name', 'slug'],
		where: condition,
		limit: limit,
		offset: offset,
		order: [['id', 'ASC']],
	}).then(data => {
		const response = getPagingData(data, page, limit);
      	res.send(response);
	});
};