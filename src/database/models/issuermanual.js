'use strict';
module.exports = (sequelize, DataTypes) => {
  const IssuerManual = sequelize.define(
    'IssuerManual',
    {
      sn: {
        type: DataTypes.STRING,
      },
      settlementDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cpd: {
        type: DataTypes.DATE,
      },
      retailer: {
        type: DataTypes.STRING,
      },
      retailerId: {
        type: DataTypes.STRING,
      },
      term: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
      tranxType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      irfPercentage: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      procFee: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      procFeeVat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      irf: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      irfVat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      amtPayable: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      maskedPan: {
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
      cardAcNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issuerStan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acqstan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issuerBin: {
        type: DataTypes.STRING,
      },
      idList: {
        type: DataTypes.STRING,
      },
      issuerRRN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tranNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acquirerName: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  IssuerManual.associate = function (models) {
    // associations can be defined here
  };
  return IssuerManual;
};
