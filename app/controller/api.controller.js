const db = require('../config/db.config.js');
const Op = db.Sequelize.Op;

exports.findAllQuery = (req, res) => {
	const Model  =  db[req.params.model]

	const { page, size, query } = req.query;
	const condition = query ? { name: { [Op.like]: `%${query}%` } } : null;

	const { limit, offset } = getPagination(page, size);

	Model.findAndCountAll({
		where: condition,
		limit: limit,
		offset: offset,
		order: [['id', 'ASC']],
		include: { all: true }
	}).then(data => {
		const response = getPagingData(data, page, limit);
      	res.send(response);
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
