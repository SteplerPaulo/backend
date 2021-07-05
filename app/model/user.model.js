module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  img_file: {
		  type: Sequelize.STRING
	  },
	  caption: {
		  type: Sequelize.STRING
	  },
	  is_active: {
		  type: Sequelize.STRING
	  },
	  created: {
		  type: Sequelize.STRING
	  },
	  modified: {
		  type: Sequelize.STRING
	  },
	});

	return User;
}