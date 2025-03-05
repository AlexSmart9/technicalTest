'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  inventory.init({
    totalProducts: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    productEntries: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    productOutPuts: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'inventory',
  });
  return inventory;
};