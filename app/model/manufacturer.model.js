module.exports = (sequelize, Sequelize) => {
	const Manufacturer = sequelize.define('manufacturers', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  slug: {
		  type: Sequelize.STRING
	  },
	  address: {
		  type: Sequelize.STRING
	  },
	  created: {
		  type: Sequelize.STRING
	  },
	  modified: {
		  type: Sequelize.STRING
	  },
	});

	return Manufacturer;
}