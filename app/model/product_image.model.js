module.exports = (sequelize, Sequelize) => {
	const ProductImage = sequelize.define('product_images', {
	  img_file: {
		  type: Sequelize.STRING
	  },
	  caption: {
		  type: Sequelize.STRING
	  }
	});
	
	return ProductImage;
}