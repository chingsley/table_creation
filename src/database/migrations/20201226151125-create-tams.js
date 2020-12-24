'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Tams',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        merchantId: {
          type: Sequelize.STRING,
        },
        acctNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        merchantName: {
          type: Sequelize.STRING,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mid: {
          type: Sequelize.STRING,
        },
        rrn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bin1: {
          type: Sequelize.STRING,
        },
        bin2: {
          type: Sequelize.STRING,
        },
        issuer: {
          type: Sequelize.STRING,
        },
        card: {
          type: Sequelize.STRING,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        mcc: {
          type: Sequelize.DOUBLE,
        },
        mscRate: {
          type: Sequelize.STRING,
        },
        charges: {
          type: Sequelize.DOUBLE,
        },
        amtDue: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        currency: {
          type: Sequelize.STRING,
        },
        messageType: {
          type: Sequelize.STRING,
        },
        transactionType: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.STRING,
        },
        response: {
          type: Sequelize.STRING,
        },
        respDesc: {
          type: Sequelize.STRING,
        },
        dateTime: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('Tams');
  },
};
