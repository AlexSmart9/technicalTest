'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.hasMany(models.product)
    }
  }
  category.init({
    categoryName: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    categoryProductQuantity: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};