'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Interswitch',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        dateTime: {
          type: Sequelize.DATE,
        },
        bankCardBrand: {
          type: Sequelize.STRING,
        },
        currencyName: {
          type: Sequelize.STRING,
        },
        localDateTime: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        merchantId: {
          type: Sequelize.STRING,
        },
        merchantNameLocation: {
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
        messageType: {
          type: Sequelize.STRING,
        },
        fromAccountId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fromAccountType: {
          type: Sequelize.STRING,
        },
        toAccountId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        toAccountType: {
          type: Sequelize.STRING,
        },
        cardAccountNr: {
          type: Sequelize.STRING,
        },
        tranTypeDescription: {
          type: Sequelize.STRING,
        },
        beneficiaryAccount: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        responseCodeDescription: {
          type: Sequelize.STRING,
        },
        tranAmountReq: {
          type: Sequelize.DOUBLE,
        },
        tranAmountRsp: {
          type: Sequelize.DOUBLE,
        },
        surcharge: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        amountImpact: {
          type: Sequelize.DOUBLE,
        },
        settlementImpact: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        settlementImpactDesc: {
          type: Sequelize.DOUBLE,
        },
        authId: {
          type: Sequelize.STRING,
        },
        tranId: {
          type: Sequelize.STRING,
        },
        retrievalReferenceNr: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        totalsGroup: {
          type: Sequelize.STRING,
        },
        region: {
          type: Sequelize.STRING,
        },
        transactionStatus: {
          type: Sequelize.STRING,
        },
        transactionTypeImpact: {
          type: Sequelize.STRING,
        },
        messageTypeDesc: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        trxnCategory: {
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
    return queryInterface.dropTable('Interswitch');
  },
};
