'use strict';
module.exports = (sequelize, DataTypes) => {
  const MVisa = sequelize.define(
    'MVisa',
    {
      issuerAcquirerIndicator: {
        type: DataTypes.STRING,
      },
      affiliateBin: {
        type: DataTypes.STRING,
      },
      settlementDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transactionIdentifier: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      retrievalReferenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      traceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responseCode: {
        type: DataTypes.STRING,
      },
      processingCode: {
        type: DataTypes.STRING,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      localTransactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      localTransactionTime: {
        type: DataTypes.DATE,
      },
      authorizationIdRespCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardAcceptorId: {
        type: DataTypes.STRING,
      },
      cardAcceptorName: {
        type: DataTypes.STRING,
      },
      cardAcceptorCity: {
        type: DataTypes.STRING,
      },
      v22260SettlementAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      v22260SettlementCurrencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reimbursementFee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      reimbursementFeeDebitCreditIndicator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  MVisa.associate = function (models) {
    // associations can be defined here
  };
  return MVisa;
};
