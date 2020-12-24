'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'CoralpayBillPayment',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        vendConfirmationDate: {
          type: Sequelize.DATE,
        },
        vendInitializationDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        transactionId: {
          type: Sequelize.STRING,
        },
        paymentReference: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpVASBillerReference: {
          type: Sequelize.STRING,
        },
        productCode: {
          type: Sequelize.STRING,
        },
        vendStatus: {
          type: Sequelize.STRING,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        convenienceFee: {
          type: Sequelize.DOUBLE,
        },
        orderId: {
          type: Sequelize.STRING,
        },
        customerId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        customerName: {
          type: Sequelize.STRING,
        },
        accountNumber: {
          type: Sequelize.STRING,
        },
        phoneNumber: {
          type: Sequelize.STRING,
        },
        sourcePhoneNumber: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        district: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        channel: {
          type: Sequelize.STRING,
        },
        narration: {
          type: Sequelize.STRING,
        },
        billerId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        packageId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.STRING,
        },
        institutionId: {
          type: Sequelize.STRING,
        },
        markReversal: {
          type: Sequelize.STRING,
        },
        isReversed: {
          type: Sequelize.STRING,
        },
        reversalDate: {
          type: Sequelize.DATE,
        },
        nextRequeryTime: {
          type: Sequelize.DATE,
        },
        markForRevend: {
          type: Sequelize.STRING,
        },
        cgatePaymentCode: {
          type: Sequelize.STRING,
        },
        billerVendStatus: {
          type: Sequelize.STRING,
        },
        standardToken: {
          type: Sequelize.STRING,
        },
        bonusToken: {
          type: Sequelize.STRING,
        },
        tokenReceiptNumber: {
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
    return queryInterface.dropTable('CoralpayBillPayment');
  },
};
