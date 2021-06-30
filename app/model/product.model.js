module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('products', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  price: {
		  type: Sequelize.STRING
	  },
	});
	
	return Product;
}