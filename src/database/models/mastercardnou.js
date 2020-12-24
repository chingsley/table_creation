'use strict';
module.exports = (sequelize, DataTypes) => {
  const MastercardNou = sequelize.define(
    'MastercardNou',
    {
      msgType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      onlineSettlementDate: {
        type: DataTypes.DATE,
      },
      iin: {
        type: DataTypes.STRING,
      },
      rawDataRecipient: {
        type: DataTypes.STRING,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardSeq: {
        type: DataTypes.STRING,
      },
      transactionAmount: {
        type: DataTypes.DOUBLE,
      },
      drcrTransactionAmtI: {
        type: DataTypes.STRING,
      },
      transactionAmtCurrencyCode: {
        type: DataTypes.STRING,
      },
      settlementAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      drcrSettlementI: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      settlementAmtCurrencyCode: {
        type: DataTypes.STRING,
      },
      interchangeFee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      drcrIfI: {
        type: DataTypes.STRING,
      },
      localTransactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      localTransactionTime: {
        type: DataTypes.DATE,
      },
      traceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responseDescrption: {
        type: DataTypes.STRING,
      },
      transactionType: {
        type: DataTypes.STRING,
      },
      fromAccountType: {
        type: DataTypes.STRING,
      },
      toAccountType: {
        type: DataTypes.STRING,
      },
      settlementmentServiceSelected: {
        type: DataTypes.STRING,
      },
      approvalCode: {
        type: DataTypes.STRING,
      },
      acqrrn: {
        type: DataTypes.STRING,
      },
      originalAmount: {
        type: DataTypes.DOUBLE,
      },
      processorId: {
        type: DataTypes.STRING,
      },
      switchSerialId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reportOwnerType: {
        type: DataTypes.STRING,
      },
      accessFee: {
        type: DataTypes.DOUBLE,
      },
      drcrAccessFeeI: {
        type: DataTypes.STRING,
      },
      exchangeRate: {
        type: DataTypes.DOUBLE,
      },
      mcc: {
        type: DataTypes.STRING,
      },
      posEntryMode: {
        type: DataTypes.STRING,
      },
      tranNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adviceReasonCode: {
        type: DataTypes.STRING,
      },
      transId: {
        type: DataTypes.STRING,
      },
      revrequestId: {
        type: DataTypes.STRING,
      },
      adjustmentAmtLocal: {
        type: DataTypes.DOUBLE,
      },
      drcrAalI: {
        type: DataTypes.STRING,
      },
      reqamttrxLocal: {
        type: DataTypes.DOUBLE,
      },
      drcrAasI: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      orgAmountReq: {
        type: DataTypes.DOUBLE,
      },
      procAcqIss: {
        type: DataTypes.STRING,
      },
      cardHolderBilling: {
        type: DataTypes.DOUBLE,
      },
      drcrChbI: {
        type: DataTypes.STRING,
      },
      cashbackAmt: {
        type: DataTypes.DOUBLE,
      },
      drcrCashbackI: {
        type: DataTypes.STRING,
      },
      serviceLevIndicator: {
        type: DataTypes.STRING,
      },
      crossBorderIndicator: {
        type: DataTypes.STRING,
      },
      crossBorderCurrIndicator: {
        type: DataTypes.STRING,
      },
      feprrn: {
        type: DataTypes.STRING,
      },
      extrrn: {
        type: DataTypes.STRING,
      },
      acqstan: {
        type: DataTypes.STRING,
      },
      origType: {
        type: DataTypes.STRING,
      },
      issuerFiId: {
        type: DataTypes.STRING,
      },
      acquireRfiId: {
        type: DataTypes.STRING,
      },
      origId: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  MastercardNou.associate = function (models) {
    // associations can be defined here
  };
  return MastercardNou;
};
