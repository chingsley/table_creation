'use strict';
module.exports = (sequelize, DataTypes) => {
  const RmtPos = sequelize.define(
    'RmtPos',
    {
      dateTime: {
        type: DataTypes.DATE,
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
      },
      accountNr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankName: {
        type: DataTypes.STRING,
      },
      fromAccountType: {
        type: DataTypes.STRING,
      },
      tranTypeDescription: {
        type: DataTypes.STRING,
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
      },
      amountImpact: {
        type: DataTypes.DOUBLE,
      },
      merchCatCategoryName: {
        type: DataTypes.STRING,
      },
      merchCatVisaCategoryName: {
        type: DataTypes.STRING,
      },
      merchCatVisaCategoryName1: {
        type: DataTypes.STRING,
      },
      settlementImpact: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      settlementImpactDesc: {
        type: DataTypes.STRING,
      },
      merchantDiscount: {
        type: DataTypes.DOUBLE,
      },
      merchantReceivable: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      authId: {
        type: DataTypes.STRING,
        allowNull: false,
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
      cardRoute: {
        type: DataTypes.STRING,
      },
      transactionTypeImpact: {
        type: DataTypes.STRING,
      },
      reversalStatus: {
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
  RmtPos.associate = function (models) {
    // associations can be defined here
  };
  return RmtPos;
};
