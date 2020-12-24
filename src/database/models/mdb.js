'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mdb = sequelize.define(
    'Mdb',
    {
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionDatetime: {
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
      mebBatchNumber: {
        type: DataTypes.STRING,
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
      upBatchId: {
        type: DataTypes.STRING,
      },
      sequenceNumber: {
        type: DataTypes.STRING,
      },
      invoiceNum: {
        type: DataTypes.STRING,
      },
      tranNumber: {
        type: DataTypes.STRING,
      },
      sign: {
        type: DataTypes.STRING,
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
      merchantDepositBankCode: {
        type: DataTypes.STRING,
      },
      merchantDepositBankName: {
        type: DataTypes.STRING,
      },
      merchantBankAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendorId: {
        type: DataTypes.STRING,
      },
      vendorCode: {
        type: DataTypes.STRING,
      },
      vendorName: {
        type: DataTypes.STRING,
      },
      acquirerName: {
        type: DataTypes.STRING,
      },
      acquirerReferenceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acqCountry: {
        type: DataTypes.STRING,
      },
      acqStan: {
        type: DataTypes.STRING,
      },
      issuerBank: {
        type: DataTypes.STRING,
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
      originalAmount: {
        type: DataTypes.DOUBLE,
      },
      dollarAmount: {
        type: DataTypes.DOUBLE,
      },
      standardExchangeRateValue: {
        type: DataTypes.DOUBLE,
      },
      exchangeRateMarkupValue: {
        type: DataTypes.DOUBLE,
      },
      settlementExchangeRateValue: {
        type: DataTypes.DOUBLE,
      },
      transactionCurrencyCode: {
        type: DataTypes.STRING,
      },
      settlementCurrencyCode: {
        type: DataTypes.STRING,
      },
      lcyAmount: {
        type: DataTypes.DOUBLE,
      },
      totalMscRate: {
        type: DataTypes.DOUBLE,
      },
      msccap: {
        type: DataTypes.DOUBLE,
      },
      lcyMscValue: {
        type: DataTypes.DOUBLE,
      },
      vatCharge: {
        type: DataTypes.DOUBLE,
      },
      dollarMscValue: {
        type: DataTypes.DOUBLE,
      },
      lcyAmountDueMerchant: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      dollarAmountDueMerchant: {
        type: DataTypes.DOUBLE,
      },
      agentAccount: {
        type: DataTypes.STRING,
      },
      agentName: {
        type: DataTypes.STRING,
      },
      agentRate: {
        type: DataTypes.DOUBLE,
      },
      agentFee: {
        type: DataTypes.DOUBLE,
      },
      icc: {
        type: DataTypes.STRING,
      },
      appliedMsc: {
        type: DataTypes.DOUBLE,
      },
      stampdutyAmount: {
        type: DataTypes.DOUBLE,
      },
      subsidyRate: {
        type: DataTypes.DOUBLE,
      },
      subsidyValue: {
        type: DataTypes.DOUBLE,
      },
      stampdutySubsidyRate: {
        type: DataTypes.DOUBLE,
      },
      stampdutySubsidyValue: {
        type: DataTypes.DOUBLE,
      },
      issuerName: {
        type: DataTypes.STRING,
      },
      ptspName: {
        type: DataTypes.STRING,
      },
      ptspRate: {
        type: DataTypes.DOUBLE,
      },
      ptspFee: {
        type: DataTypes.DOUBLE,
      },
      ptspVat: {
        type: DataTypes.DOUBLE,
      },
      ptsaName: {
        type: DataTypes.STRING,
      },
      ptsaRate: {
        type: DataTypes.DOUBLE,
      },
      ptsaFee: {
        type: DataTypes.DOUBLE,
      },
      ptsaVat: {
        type: DataTypes.DOUBLE,
      },
      acquirerRate: {
        type: DataTypes.DOUBLE,
      },
      acquirerFee: {
        type: DataTypes.DOUBLE,
      },
      acquirerVat: {
        type: DataTypes.DOUBLE,
      },
      switchName: {
        type: DataTypes.STRING,
      },
      switchRate: {
        type: DataTypes.DOUBLE,
      },
      switchFee: {
        type: DataTypes.DOUBLE,
      },
      switchVat: {
        type: DataTypes.DOUBLE,
      },
      terminalOwnerName: {
        type: DataTypes.STRING,
      },
      terminalOwnerRate: {
        type: DataTypes.DOUBLE,
      },
      terminalOwnerFee: {
        type: DataTypes.DOUBLE,
      },
      terminalOwnerVat: {
        type: DataTypes.DOUBLE,
      },
      bifee: {
        type: DataTypes.STRING,
      },
      textmess: {
        type: DataTypes.STRING,
      },
      bifee2: {
        type: DataTypes.STRING,
      },
      serviceProvider: {
        type: DataTypes.STRING,
      },
      serviceProviderBankCode: {
        type: DataTypes.STRING,
      },
      serviceProviderBank: {
        type: DataTypes.STRING,
      },
      serviceProviderAccountNo: {
        type: DataTypes.STRING,
      },
      remark: {
        type: DataTypes.STRING,
      },
      uphss_transref: {
        type: DataTypes.STRING,
      },
      uphss: {
        type: DataTypes.STRING,
      },
      originator: {
        type: DataTypes.STRING,
      },
      reportType: {
        type: DataTypes.STRING,
      },
      stampduty: {
        type: DataTypes.DOUBLE,
      },
      mdbVat: {
        type: DataTypes.DOUBLE,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Mdb.associate = function (models) {
    // associations can be defined here
  };
  return Mdb;
};
