'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'IssuerManual',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sn: {
          type: Sequelize.STRING,
        },
        settlementDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cpd: {
          type: Sequelize.DATE,
        },
        retailer: {
          type: Sequelize.STRING,
        },
        retailerId: {
          type: Sequelize.STRING,
        },
        term: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING,
        },
        tranxType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        irfPercentage: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        procFee: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        procFeeVat: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        irf: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        irfVat: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        amtPayable: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        maskedPan: {
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
        cardAcNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        issuerStan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acqstan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cardType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        issuerBin: {
          type: Sequelize.STRING,
        },
        idList: {
          type: Sequelize.STRING,
        },
        issuerRRN: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tranNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acquirerName: {
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
    return queryInterface.dropTable('IssuerManual');
  },
};
