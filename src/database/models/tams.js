'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tams = sequelize.define(
    'Tams',
    {
      merchantId: {
        type: DataTypes.STRING,
      },
      acctNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchantName: {
        type: DataTypes.STRING,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mid: {
        type: DataTypes.STRING,
      },
      rrn: {
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
      bin1: {
        type: DataTypes.STRING,
      },
      bin2: {
        type: DataTypes.STRING,
      },
      issuer: {
        type: DataTypes.STRING,
      },
      card: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      mcc: {
        type: DataTypes.DOUBLE,
      },
      mscRate: {
        type: DataTypes.STRING,
      },
      charges: {
        type: DataTypes.DOUBLE,
      },
      amtDue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
      },
      messageType: {
        type: DataTypes.STRING,
      },
      transactionType: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      response: {
        type: DataTypes.STRING,
      },
      respDesc: {
        type: DataTypes.STRING,
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Tams.associate = function (models) {
    // associations can be defined here
  };
  return Tams;
};
