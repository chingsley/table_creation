'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'PayDirect',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        institutionName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        clearedCollections: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        earningAsCollectingBank: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        earningAsLeadBank: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        earningForRemittanceToIso: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        serviceProviderEarnings: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        terminalOwnerEarnings: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        splitCR: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        splitDR: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        settlementAmount: {
          type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('PayDirect');
  },
};
