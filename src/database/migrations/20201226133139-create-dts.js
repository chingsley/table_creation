'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Dts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tranDesc: {
          type: Sequelize.STRING,
        },
        tranType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        debitAccount: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bankCustomerCreditAccount: {
          type: Sequelize.STRING,
        },
        customerId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        initiatingPan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rrn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        conversionRate: {
          type: Sequelize.DOUBLE,
        },
        creditPan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        creditAccount: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tranDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        approvalCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        terminal: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        processingCode: {
          type: Sequelize.STRING,
        },
        acqinstId: {
          type: Sequelize.STRING,
        },
        posEntryMode: {
          type: Sequelize.STRING,
        },
        posCondition: {
          type: Sequelize.STRING,
        },
        tranCurrency: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        billingCurrency: {
          type: Sequelize.STRING,
        },
        merchant: {
          type: Sequelize.STRING,
        },
        termCity: {
          type: Sequelize.STRING,
        },
        termAddress: {
          type: Sequelize.STRING,
        },
        termRegion: {
          type: Sequelize.STRING,
        },
        requestRecDate: {
          type: Sequelize.DATE,
        },
        datesentoAuthoriser: {
          type: Sequelize.DATE,
        },
        authoriserResponseDate: {
          type: Sequelize.STRING,
        },
        responseDate: {
          type: Sequelize.STRING,
        },
        reconciliationApiRespCode: {
          type: Sequelize.STRING,
        },
        reconciliationApiRespDesc: {
          type: Sequelize.STRING,
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
    return queryInterface.dropTable('Dts');
  },
};
