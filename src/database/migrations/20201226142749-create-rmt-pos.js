'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'RmtPos',
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
        },
        accountNr: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bankName: {
          type: Sequelize.STRING,
        },
        fromAccountType: {
          type: Sequelize.STRING,
        },
        tranTypeDescription: {
          type: Sequelize.STRING,
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
        },
        amountImpact: {
          type: Sequelize.DOUBLE,
        },
        merchCatCategoryName: {
          type: Sequelize.STRING,
        },
        merchCatVisaCategoryName: {
          type: Sequelize.STRING,
        },
        merchCatVisaCategoryName1: {
          type: Sequelize.STRING,
        },
        settlementImpact: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        settlementImpactDesc: {
          type: Sequelize.STRING,
        },
        merchantDiscount: {
          type: Sequelize.DOUBLE,
        },
        merchantReceivable: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        authId: {
          type: Sequelize.STRING,
          allowNull: false,
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
        cardRoute: {
          type: Sequelize.STRING,
        },
        transactionTypeImpact: {
          type: Sequelize.STRING,
        },
        reversalStatus: {
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
    return queryInterface.dropTable('RmtPos');
  },
};
