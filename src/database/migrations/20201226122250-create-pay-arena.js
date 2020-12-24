'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'PayArena',
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
        transactionDateTime: {
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
        sequenceNumber: {
          type: Sequelize.STRING,
        },
        tranNumber: {
          type: Sequelize.STRING,
          allowNull: false,
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
        acquirerName: {
          type: Sequelize.STRING,
        },
        acquirerReferenceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acqcountry: {
          type: Sequelize.STRING,
        },
        acqstan: {
          type: Sequelize.STRING,
          allowNull: false,
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
        cardHolderAccountNo: {
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
        transactionCurrencyCode: {
          type: Sequelize.STRING,
          allowNull: false,
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
    return queryInterface.dropTable('PayArena');
  },
};
