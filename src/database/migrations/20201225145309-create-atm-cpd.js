'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'AtmCpd',
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
        vssProcessingDate: {
          type: Sequelize.DATE,
        },
        vnpsettDate: {
          type: Sequelize.DATE,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        atmAcquirer: {
          type: Sequelize.STRING,
        },
        atmLocation: {
          type: Sequelize.STRING,
        },
        cardNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cardSeq: {
          type: Sequelize.STRING,
        },
        transactionAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        issuer: {
          type: Sequelize.STRING,
        },
        settlementAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        localTransactionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        localTransactionTime: {
          type: Sequelize.DATE,
        },
        traceNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        approvalCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        responseDesc: {
          type: Sequelize.STRING,
        },
        transactionType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acqrrn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acqstan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        issuerBin: {
          type: Sequelize.STRING,
        },
        transId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        revrequestId: {
          type: Sequelize.STRING,
        },
        issuerStan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        origTypeDesc: {
          type: Sequelize.STRING,
        },
        phase: {
          type: Sequelize.STRING,
        },
        debitCredit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        visaRRN: {
          type: Sequelize.STRING,
        },
        acqReimbursementFeeNGN: {
          type: Sequelize.STRING,
        },
        issuerRRN: {
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
    return queryInterface.dropTable('AtmCpd');
  },
};
