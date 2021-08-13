module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  username: {
		  type: Sequelize.STRING
	  },
	  first_name: {
		  type: Sequelize.STRING
	  },
	  middle_name: {
		  type: Sequelize.STRING
	  },
	  last_name: {
		  type: Sequelize.STRING
	  },
	  role: {
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