'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventories', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalProducts: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      productEntries: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      productOutPuts: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    //Insert the unique inventory
    await queryInterface.bulkInsert('inventories', [{
      id:1,
      totalProducts:0,
      productEntries:0,
      productOutPuts:0,
      createdAt: new Date(),
      updatedAt:new Date()
    }])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inventories');
  }
};