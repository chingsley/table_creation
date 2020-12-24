'use strict';
module.exports = (sequelize, DataTypes) => {
  const MastercardRou = sequelize.define(
    'MastercardRou',
    {
      messageTypeIndicator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      switchSerialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      processorAcquirerOrIssuer: {
        type: DataTypes.STRING,
      },
      processorId: {
        type: DataTypes.STRING,
      },
      transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transactionTime: {
        type: DataTypes.STRING,
      },
      panLength: {
        type: DataTypes.STRING,
      },
      pan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      processingCode: {
        type: DataTypes.STRING,
      },
      stan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mcc: {
        type: DataTypes.STRING,
      },
      posEntry: {
        type: DataTypes.STRING,
      },
      referenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acquirerInstId: {
        type: DataTypes.STRING,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responseCode: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      adviceReasonCode: {
        type: DataTypes.STRING,
      },
      intracurrencyAgreementCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorizationId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currencyCodeTransaction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      impliedDecimalTransaction: {
        type: DataTypes.STRING,
      },
      completedAmountTransLocal: {
        type: DataTypes.DOUBLE,
      },
      completedAmountTransactionLocalDrCrIndicator: {
        type: DataTypes.STRING,
      },
      cashBackAmountLocal: {
        type: DataTypes.DOUBLE,
      },
      cashBackLocalDrCrIndicator: {
        type: DataTypes.STRING,
      },
      accessFeeLocal: {
        type: DataTypes.DOUBLE,
      },
      accessFeeLocalDrCrIndicator: {
        type: DataTypes.STRING,
      },
      currencyCodeSettlement: {
        type: DataTypes.STRING,
      },
      impliedDecimalSettlement: {
        type: DataTypes.STRING,
      },
      conversionRateSettlement: {
        type: DataTypes.DOUBLE,
      },
      completedAmountSettlement: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      completedAmountSettlementDrCrIndicator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      interchangeFee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      interchangeFeeDrCrIndicator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serviceLevelIndicator: {
        type: DataTypes.STRING,
      },
      filler: {
        type: DataTypes.STRING,
      },
      positieIdIndicator: {
        type: DataTypes.STRING,
      },
      atmSurchargeFreeProgramId: {
        type: DataTypes.STRING,
      },
      crossBorderIndicator: {
        type: DataTypes.STRING,
      },
      crossBorderCurrencyIndicator: {
        type: DataTypes.STRING,
      },
      visaFeeIndicator: {
        type: DataTypes.STRING,
      },
      requestedAmountTransLocal: {
        type: DataTypes.DOUBLE,
      },
      traceNumberAdjustmentTrans: {
        type: DataTypes.STRING,
      },
      account1From: {
        type: DataTypes.STRING,
      },
      cardAcceptorNameAndAddr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardAcceptorCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  MastercardRou.associate = function (models) {
    // associations can be defined here
  };
  return MastercardRou;
};
