const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  category: DataTypes.STRING,
  brand: DataTypes.STRING,
  price: DataTypes.FLOAT,
  description: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
});

module.exports = Product;
