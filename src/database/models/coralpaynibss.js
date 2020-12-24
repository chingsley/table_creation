'use strict';
module.exports = (sequelize, DataTypes) => {
  const CoralpayNibss = sequelize.define(
    'CoralpayNibss',
    {
      sessionId: {
        type: DataTypes.STRING,
      },
      transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sessionStartTime: {
        type: DataTypes.DATE,
      },
      sessionEndTime: {
        type: DataTypes.DATE,
      },
      transactionAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      response: {
        type: DataTypes.STRING,
      },
      merchantAccountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchantBankAccount: {
        type: DataTypes.STRING,
      },
      merchantName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchantId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      terminalLocation: {
        type: DataTypes.STRING,
      },
      approvalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mscPercentage: {
        type: DataTypes.STRING,
      },
      msc: {
        type: DataTypes.DOUBLE,
      },
      amountPayableToMerchant: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      amountDueToAcquirer: {
        type: DataTypes.DOUBLE,
      },
      amountDueToIssuer: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      amountDueToPtsp: {
        type: DataTypes.DOUBLE,
      },
      amountDueToPssp: {
        type: DataTypes.DOUBLE,
      },
      amountDueToUssdAggregator: {
        type: DataTypes.DOUBLE,
      },
      amountDueToSwitch: {
        type: DataTypes.DOUBLE,
      },
      amountDueToTerminalOwner: {
        type: DataTypes.DOUBLE,
      },
      amountDueToPlatformProvider: {
        type: DataTypes.DOUBLE,
      },
      amountDueToAgent: {
        type: DataTypes.DOUBLE,
      },
      transactionType: {
        type: DataTypes.STRING,
      },
      ussdDebitAccountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountName: {
        type: DataTypes.STRING,
      },
      mobileNumber: {
        type: DataTypes.STRING,
      },
      shortCode: {
        type: DataTypes.STRING,
      },
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sequenceNumber: {
        type: DataTypes.STRING,
      },
      referenceNumber: {
        type: DataTypes.STRING,
      },
      acquirer: {
        type: DataTypes.STRING,
      },
      issuer: {
        type: DataTypes.STRING,
      },
      narration: {
        type: DataTypes.STRING,
      },
      ptsp: {
        type: DataTypes.STRING,
      },
      terminalOwner: {
        type: DataTypes.STRING,
      },
      ptoFees: {
        type: DataTypes.STRING,
      },
      instantSettlement: {
        type: DataTypes.STRING,
      },
      transRef: {
        type: DataTypes.STRING,
      },
      mcc: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      settlementAmount: {
        type: DataTypes.DOUBLE,
      },
      subMerchantName: {
        type: DataTypes.STRING,
      },
      traceId: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  CoralpayNibss.associate = function (models) {
    // associations can be defined here
  };
  return CoralpayNibss;
};
