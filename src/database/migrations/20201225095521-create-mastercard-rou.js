'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'MastercardRou',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        messageTypeIndicator: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        switchSerialNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        processorAcquirerOrIssuer: {
          type: Sequelize.STRING,
        },
        processorId: {
          type: Sequelize.STRING,
        },
        transactionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        transactionTime: {
          type: Sequelize.STRING,
        },
        panLength: {
          type: Sequelize.STRING,
        },
        pan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        processingCode: {
          type: Sequelize.STRING,
        },
        stan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mcc: {
          type: Sequelize.STRING,
        },
        posEntry: {
          type: Sequelize.STRING,
        },
        referenceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acquirerInstId: {
          type: Sequelize.STRING,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        responseCode: {
          type: Sequelize.STRING,
        },
        brand: {
          type: Sequelize.STRING,
        },
        adviceReasonCode: {
          type: Sequelize.STRING,
        },
        intracurrencyAgreementCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        authorizationId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        currencyCodeTransaction: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        impliedDecimalTransaction: {
          type: Sequelize.STRING,
        },
        completedAmountTransLocal: {
          type: Sequelize.DOUBLE,
        },
        completedAmountTransactionLocalDrCrIndicator: {
          type: Sequelize.STRING,
        },
        cashBackAmountLocal: {
          type: Sequelize.DOUBLE,
        },
        cashBackLocalDrCrIndicator: {
          type: Sequelize.STRING,
        },
        accessFeeLocal: {
          type: Sequelize.DOUBLE,
        },
        accessFeeLocalDrCrIndicator: {
          type: Sequelize.STRING,
        },
        currencyCodeSettlement: {
          type: Sequelize.STRING,
        },
        impliedDecimalSettlement: {
          type: Sequelize.STRING,
        },
        conversionRateSettlement: {
          type: Sequelize.DOUBLE,
        },
        completedAmountSettlement: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        completedAmountSettlementDrCrIndicator: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        interchangeFee: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        interchangeFeeDrCrIndicator: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        serviceLevelIndicator: {
          type: Sequelize.STRING,
        },
        filler: {
          type: Sequelize.STRING,
        },
        positieIdIndicator: {
          type: Sequelize.STRING,
        },
        atmSurchargeFreeProgramId: {
          type: Sequelize.STRING,
        },
        crossBorderIndicator: {
          type: Sequelize.STRING,
        },
        crossBorderCurrencyIndicator: {
          type: Sequelize.STRING,
        },
        visaFeeIndicator: {
          type: Sequelize.STRING,
        },
        requestedAmountTransLocal: {
          type: Sequelize.DOUBLE,
        },
        traceNumberAdjustmentTrans: {
          type: Sequelize.STRING,
        },
        account1From: {
          type: Sequelize.STRING,
        },
        cardAcceptorNameAndAddr: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cardAcceptorCity: {
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
    return queryInterface.dropTable('MastercardRou');
  },
};
