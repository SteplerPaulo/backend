const db = require('../config/db.config.js');
const Manufacturer = db.manufacturers;

exports.findByID = (req, res) => {	
	Manufacturer.findOne({
		attributes: ['id', 'name', 'slug','address'],
		where: {
			id: req.params.id
		}
	}).then(manufacturers => {
	   res.send(manufacturers);
	});
};

// Fetch all 
exports.findAll = (req, res) => {
	Manufacturer.findAll({
		attributes: ['id', 'name', 'slug','address'],
	}).then(manufacturers => {
	   res.send(manufacturers);
	});
};