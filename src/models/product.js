'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, {
        onDelete:'CASCADE',
        foreignKey:'categoryId'
      })
    }
  }
  product.init({
    productName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    categoryName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key:'id'
      },
    }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};