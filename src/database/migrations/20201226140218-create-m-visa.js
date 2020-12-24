'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'MVisa',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        issuerAcquirerIndicator: {
          type: Sequelize.STRING,
        },
        affiliateBin: {
          type: Sequelize.STRING,
        },
        settlementDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        transactionIdentifier: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        retrievalReferenceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        traceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        responseCode: {
          type: Sequelize.STRING,
        },
        processingCode: {
          type: Sequelize.STRING,
        },
        cardNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        currencyCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        localTransactionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        localTransactionTime: {
          type: Sequelize.DATE,
        },
        authorizationIdRespCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cardAcceptorId: {
          type: Sequelize.STRING,
        },
        cardAcceptorName: {
          type: Sequelize.STRING,
        },
        cardAcceptorCity: {
          type: Sequelize.STRING,
        },
        v22260SettlementAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        v22260SettlementCurrencyCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        reimbursementFee: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        reimbursementFeeDebitCreditIndicator: {
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
    return queryInterface.dropTable('MVisa');
  },
};
