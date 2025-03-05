'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emailCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      emailCode.belongsTo(models.user, {
        onDelete: 'CASCADE',
        foreignKey:'userId'
      })
    }
  }
  emailCode.init({
    code:{
      type: DataTypes.TEXT
    },
    userId : {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'emailCode',
  });
  return emailCode;
};