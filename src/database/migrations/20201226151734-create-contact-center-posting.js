'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'ContactCenterPosting',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        accountNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rrnNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stanNumber: {
          type: Sequelize.STRING,
        },
        customerName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        cardPan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        logCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        currentStatus: {
          type: Sequelize.STRING,
        },
        glNarration: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        initiator: {
          type: Sequelize.STRING,
        },
        sheetName: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        transactionDate: {
          type: Sequelize.DATE,
        },
        valueDate: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('ContactCenterPosting');
  },
};
