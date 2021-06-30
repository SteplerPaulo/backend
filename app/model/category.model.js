module.exports = (sequelize, Sequelize) => {
	const Category = sequelize.define('categories', {
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
	});

	return Category;
}