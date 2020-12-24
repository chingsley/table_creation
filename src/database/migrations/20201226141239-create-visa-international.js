'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'VisaInternational',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        transactionCode: {
          type: Sequelize.STRING,
        },
        fullPan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        arn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        month: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        day: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        settledAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        currencyCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        approvalCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VisaInternational');
  },
};
