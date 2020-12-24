'use strict';
module.exports = (sequelize, DataTypes) => {
  const Interswitch = sequelize.define(
    'Interswitch',
    {
      dateTime: {
        type: DataTypes.DATE,
      },
      bankCardBrand: {
        type: DataTypes.STRING,
      },
      currencyName: {
        type: DataTypes.STRING,
      },
      localDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchantId: {
        type: DataTypes.STRING,
      },
      merchantNameLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      messageType: {
        type: DataTypes.STRING,
      },
      fromAccountId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromAccountType: {
        type: DataTypes.STRING,
      },
      toAccountId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toAccountType: {
        type: DataTypes.STRING,
      },
      cardAccountNr: {
        type: DataTypes.STRING,
      },
      tranTypeDescription: {
        type: DataTypes.STRING,
      },
      beneficiaryAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responseCodeDescription: {
        type: DataTypes.STRING,
      },
      tranAmountReq: {
        type: DataTypes.DOUBLE,
      },
      tranAmountRsp: {
        type: DataTypes.DOUBLE,
      },
      surcharge: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      amountImpact: {
        type: DataTypes.DOUBLE,
      },
      settlementImpact: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      settlementImpactDesc: {
        type: DataTypes.DOUBLE,
      },
      authId: {
        type: DataTypes.STRING,
      },
      tranId: {
        type: DataTypes.STRING,
      },
      retrievalReferenceNr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalsGroup: {
        type: DataTypes.STRING,
      },
      region: {
        type: DataTypes.STRING,
      },
      transactionStatus: {
        type: DataTypes.STRING,
      },
      transactionTypeImpact: {
        type: DataTypes.STRING,
      },
      messageTypeDesc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trxnCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Interswitch.associate = function (models) {
    // associations can be defined here
  };
  return Interswitch;
};
