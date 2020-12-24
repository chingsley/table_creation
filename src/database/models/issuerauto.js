'use strict';
module.exports = (sequelize, DataTypes) => {
  const IssuerAuto = sequelize.define(
    'IssuerAuto',
    {
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      settlementService: {
        type: DataTypes.STRING,
      },
      settlementDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      uppd: {
        type: DataTypes.DATE,
      },
      clearingDate: {
        type: DataTypes.DATE,
      },
      approvalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      docno: {
        type: DataTypes.STRING,
      },
      sequenceNumber: {
        type: DataTypes.STRING,
      },
      tranNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sectorCode: {
        type: DataTypes.STRING,
      },
      sectorDescription: {
        type: DataTypes.STRING,
      },
      retailerId: {
        type: DataTypes.STRING,
      },
      retailerName: {
        type: DataTypes.STRING,
      },
      retailerOutletName: {
        type: DataTypes.STRING,
      },
      mccCode: {
        type: DataTypes.STRING,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      terminalLocation: {
        type: DataTypes.STRING,
      },
      acquirerName: {
        type: DataTypes.STRING,
      },
      acquirerReferenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acqcountry: {
        type: DataTypes.STRING,
      },
      acqstan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issCountryCode: {
        type: DataTypes.STRING,
      },
      issuerRRN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issStan: {
        type: DataTypes.STRING,
      },
      cardScheme: {
        type: DataTypes.STRING,
      },
      maskedPan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardHolderAccountNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: DataTypes.STRING,
      },
      issfiid: {
        type: DataTypes.STRING,
      },
      tranAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      transactionCurrencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  IssuerAuto.associate = function (models) {
    // associations can be defined here
  };
  return IssuerAuto;
};
