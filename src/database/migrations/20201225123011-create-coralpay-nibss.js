'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'CoralpayNibss',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        sessionId: {
          type: Sequelize.STRING,
        },
        transactionDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        sessionStartTime: {
          type: Sequelize.DATE,
        },
        sessionEndTime: {
          type: Sequelize.DATE,
        },
        transactionAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        response: {
          type: Sequelize.STRING,
        },
        merchantAccountNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        merchantBankAccount: {
          type: Sequelize.STRING,
        },
        merchantName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        merchantId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        terminalLocation: {
          type: Sequelize.STRING,
        },
        approvalCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mscPercentage: {
          type: Sequelize.STRING,
        },
        msc: {
          type: Sequelize.DOUBLE,
        },
        amountPayableToMerchant: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        amountDueToAcquirer: {
          type: Sequelize.DOUBLE,
        },
        amountDueToIssuer: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        amountDueToPtsp: {
          type: Sequelize.DOUBLE,
        },
        amountDueToPssp: {
          type: Sequelize.DOUBLE,
        },
        amountDueToUssdAggregator: {
          type: Sequelize.DOUBLE,
        },
        amountDueToSwitch: {
          type: Sequelize.DOUBLE,
        },
        amountDueToTerminalOwner: {
          type: Sequelize.DOUBLE,
        },
        amountDueToPlatformProvider: {
          type: Sequelize.DOUBLE,
        },
        amountDueToAgent: {
          type: Sequelize.DOUBLE,
        },
        transactionType: {
          type: Sequelize.STRING,
        },
        ussdDebitAccountNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        accountName: {
          type: Sequelize.STRING,
        },
        mobileNumber: {
          type: Sequelize.STRING,
        },
        shortCode: {
          type: Sequelize.STRING,
        },
        transactionId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sequenceNumber: {
          type: Sequelize.STRING,
        },
        referenceNumber: {
          type: Sequelize.STRING,
        },
        acquirer: {
          type: Sequelize.STRING,
        },
        issuer: {
          type: Sequelize.STRING,
        },
        narration: {
          type: Sequelize.STRING,
        },
        ptsp: {
          type: Sequelize.STRING,
        },
        terminalOwner: {
          type: Sequelize.STRING,
        },
        ptoFees: {
          type: Sequelize.STRING,
        },
        instantSettlement: {
          type: Sequelize.STRING,
        },
        transRef: {
          type: Sequelize.STRING,
        },
        mcc: {
          type: Sequelize.STRING,
        },
        category: {
          type: Sequelize.STRING,
        },
        settlementAmount: {
          type: Sequelize.DOUBLE,
        },
        subMerchantName: {
          type: Sequelize.STRING,
        },
        traceId: {
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
    return queryInterface.dropTable('CoralpayNibss');
  },
};
