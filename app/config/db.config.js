require('dotenv').config()
const env = process.env;


const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: '0',
  pool: {
    max: parseInt(env.pool_max),
    min: parseInt(env.pool_min),
    acquire: parseInt(env.pool_acquire),
    idle: parseInt(env.pool_idle)
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('../model/product.model.js')(sequelize, Sequelize);
db.product_images = require('../model/product_image.model.js')(sequelize, Sequelize);
db.categories = require('../model/category.model.js')(sequelize, Sequelize);
db.banners = require('../model/banner.model.js')(sequelize, Sequelize);

// Here we can connect companies and products base on company'id
db.products.hasMany(db.product_images, {foreignKey: 'product_id', sourceKey: 'id'});
db.product_images.belongsTo(db.products, {foreignKey: 'product_id', targetKey: 'id'});

module.exports = db;