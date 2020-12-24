'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Mdb',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        transactionId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionDatetime: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        settlementService: {
          type: Sequelize.STRING,
        },
        settlementDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        uppd: {
          type: Sequelize.DATE,
        },
        mebBatchNumber: {
          type: Sequelize.STRING,
        },
        clearingDate: {
          type: Sequelize.DATE,
        },
        approvalCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        docno: {
          type: Sequelize.STRING,
        },
        upBatchId: {
          type: Sequelize.STRING,
        },
        sequenceNumber: {
          type: Sequelize.STRING,
        },
        invoiceNum: {
          type: Sequelize.STRING,
        },
        tranNumber: {
          type: Sequelize.STRING,
        },
        sign: {
          type: Sequelize.STRING,
        },
        sectorCode: {
          type: Sequelize.STRING,
        },
        sectorDescription: {
          type: Sequelize.STRING,
        },
        retailerId: {
          type: Sequelize.STRING,
        },
        retailerName: {
          type: Sequelize.STRING,
        },
        retailerOutletName: {
          type: Sequelize.STRING,
        },
        mccCode: {
          type: Sequelize.STRING,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        terminalLocation: {
          type: Sequelize.STRING,
        },
        merchantDepositBankCode: {
          type: Sequelize.STRING,
        },
        merchantDepositBankName: {
          type: Sequelize.STRING,
        },
        merchantBankAccount: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vendorId: {
          type: Sequelize.STRING,
        },
        vendorCode: {
          type: Sequelize.STRING,
        },
        vendorName: {
          type: Sequelize.STRING,
        },
        acquirerName: {
          type: Sequelize.STRING,
        },
        acquirerReferenceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acqCountry: {
          type: Sequelize.STRING,
        },
        acqStan: {
          type: Sequelize.STRING,
        },
        issuerBank: {
          type: Sequelize.STRING,
        },
        issCountryCode: {
          type: Sequelize.STRING,
        },
        issuerRRN: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        issStan: {
          type: Sequelize.STRING,
        },
        cardScheme: {
          type: Sequelize.STRING,
        },
        maskedPan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phoneNo: {
          type: Sequelize.STRING,
        },
        issfiid: {
          type: Sequelize.STRING,
        },
        tranAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        originalAmount: {
          type: Sequelize.DOUBLE,
        },
        dollarAmount: {
          type: Sequelize.DOUBLE,
        },
        standardExchangeRateValue: {
          type: Sequelize.DOUBLE,
        },
        exchangeRateMarkupValue: {
          type: Sequelize.DOUBLE,
        },
        settlementExchangeRateValue: {
          type: Sequelize.DOUBLE,
        },
        transactionCurrencyCode: {
          type: Sequelize.STRING,
        },
        settlementCurrencyCode: {
          type: Sequelize.STRING,
        },
        lcyAmount: {
          type: Sequelize.DOUBLE,
        },
        totalMscRate: {
          type: Sequelize.DOUBLE,
        },
        msccap: {
          type: Sequelize.DOUBLE,
        },
        lcyMscValue: {
          type: Sequelize.DOUBLE,
        },
        vatCharge: {
          type: Sequelize.DOUBLE,
        },
        dollarMscValue: {
          type: Sequelize.DOUBLE,
        },
        lcyAmountDueMerchant: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        dollarAmountDueMerchant: {
          type: Sequelize.DOUBLE,
        },
        agentAccount: {
          type: Sequelize.STRING,
        },
        agentName: {
          type: Sequelize.STRING,
        },
        agentRate: {
          type: Sequelize.DOUBLE,
        },
        agentFee: {
          type: Sequelize.DOUBLE,
        },
        icc: {
          type: Sequelize.STRING,
        },
        appliedMsc: {
          type: Sequelize.DOUBLE,
        },
        stampdutyAmount: {
          type: Sequelize.DOUBLE,
        },
        subsidyRate: {
          type: Sequelize.DOUBLE,
        },
        subsidyValue: {
          type: Sequelize.DOUBLE,
        },
        stampdutySubsidyRate: {
          type: Sequelize.DOUBLE,
        },
        stampdutySubsidyValue: {
          type: Sequelize.DOUBLE,
        },
        issuerName: {
          type: Sequelize.STRING,
        },
        ptspName: {
          type: Sequelize.STRING,
        },
        ptspRate: {
          type: Sequelize.DOUBLE,
        },
        ptspFee: {
          type: Sequelize.DOUBLE,
        },
        ptspVat: {
          type: Sequelize.DOUBLE,
        },
        ptsaName: {
          type: Sequelize.STRING,
        },
        ptsaRate: {
          type: Sequelize.DOUBLE,
        },
        ptsaFee: {
          type: Sequelize.DOUBLE,
        },
        ptsaVat: {
          type: Sequelize.DOUBLE,
        },
        acquirerRate: {
          type: Sequelize.DOUBLE,
        },
        acquirerFee: {
          type: Sequelize.DOUBLE,
        },
        acquirerVat: {
          type: Sequelize.DOUBLE,
        },
        switchName: {
          type: Sequelize.STRING,
        },
        switchRate: {
          type: Sequelize.DOUBLE,
        },
        switchFee: {
          type: Sequelize.DOUBLE,
        },
        switchVat: {
          type: Sequelize.DOUBLE,
        },
        terminalOwnerName: {
          type: Sequelize.STRING,
        },
        terminalOwnerRate: {
          type: Sequelize.DOUBLE,
        },
        terminalOwnerFee: {
          type: Sequelize.DOUBLE,
        },
        terminalOwnerVat: {
          type: Sequelize.DOUBLE,
        },
        bifee: {
          type: Sequelize.STRING,
        },
        textmess: {
          type: Sequelize.STRING,
        },
        bifee2: {
          type: Sequelize.STRING,
        },
        serviceProvider: {
          type: Sequelize.STRING,
        },
        serviceProviderBankCode: {
          type: Sequelize.STRING,
        },
        serviceProviderBank: {
          type: Sequelize.STRING,
        },
        serviceProviderAccountNo: {
          type: Sequelize.STRING,
        },
        remark: {
          type: Sequelize.STRING,
        },
        uphss_transref: {
          type: Sequelize.STRING,
        },
        uphss: {
          type: Sequelize.STRING,
        },
        originator: {
          type: Sequelize.STRING,
        },
        reportType: {
          type: Sequelize.STRING,
        },
        stampduty: {
          type: Sequelize.DOUBLE,
        },
        mdbVat: {
          type: Sequelize.DOUBLE,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        freezeTableName: true,
      }
    );
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mdb');
  },
};
