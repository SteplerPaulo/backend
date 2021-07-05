require('dotenv').config()
const env = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DATABASE, env.DBUSERNAME, env.DBPASSWORD, {
  host: env.DBHOST || localhost,
  dialect: env.DIALECT || 'mysql',
  operatorsAliases: '0',
  pool: {
    max: parseInt(env.POOL_MAX) || 5,
    min: parseInt(env.POOL_MIN) || 0,
    acquire: parseInt(env.POOL_ACQUIRE) || 30000,
    idle: parseInt(env.POOL_IDLE) || 10000
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('../model/product.model.js')(sequelize, Sequelize);
db.product_images = require('../model/product_image.model.js')(sequelize, Sequelize);
db.categories = require('../model/category.model.js')(sequelize, Sequelize);
db.banners = require('../model/banner.model.js')(sequelize, Sequelize);
db.manufacturers = require('../model/manufacturer.model.js')(sequelize, Sequelize);
db.users = require('../model/user.model.js')(sequelize, Sequelize);


// Here we can connect companies and products base on company'id
db.products.hasMany(db.product_images, {foreignKey: 'product_id', sourceKey: 'id'});
db.product_images.belongsTo(db.products, {foreignKey: 'product_id', targetKey: 'id'});

module.exports = db;