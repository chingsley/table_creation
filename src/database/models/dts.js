'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dts = sequelize.define(
    'Dts',
    {
      tranDesc: {
        type: DataTypes.STRING,
      },
      tranType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      debitAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankCustomerCreditAccount: {
        type: DataTypes.STRING,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initiatingPan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rrn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      conversionRate: {
        type: DataTypes.DOUBLE,
      },
      creditPan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creditAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tranDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      approvalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      terminal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      processingCode: {
        type: DataTypes.STRING,
      },
      acqinstId: {
        type: DataTypes.STRING,
      },
      posEntryMode: {
        type: DataTypes.STRING,
      },
      posCondition: {
        type: DataTypes.STRING,
      },
      tranCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      billingCurrency: {
        type: DataTypes.STRING,
      },
      merchant: {
        type: DataTypes.STRING,
      },
      termCity: {
        type: DataTypes.STRING,
      },
      termAddress: {
        type: DataTypes.STRING,
      },
      termRegion: {
        type: DataTypes.STRING,
      },
      requestRecDate: {
        type: DataTypes.DATE,
      },
      datesentoAuthoriser: {
        type: DataTypes.DATE,
      },
      authoriserResponseDate: {
        type: DataTypes.STRING,
      },
      responseDate: {
        type: DataTypes.STRING,
      },
      reconciliationApiRespCode: {
        type: DataTypes.STRING,
      },
      reconciliationApiRespDesc: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Dts.associate = function (models) {
    // associations can be defined here
  };
  return Dts;
};
