'use strict';
module.exports = (sequelize, DataTypes) => {
  const CoralpayBillPayment = sequelize.define(
    'CoralpayBillPayment',
    {
      vendConfirmationDate: {
        type: DataTypes.DATE,
      },
      vendInitializationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transactionId: {
        type: DataTypes.STRING,
      },
      paymentReference: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpVASBillerReference: {
        type: DataTypes.STRING,
      },
      productCode: {
        type: DataTypes.STRING,
      },
      vendStatus: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      convenienceFee: {
        type: DataTypes.DOUBLE,
      },
      orderId: {
        type: DataTypes.STRING,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerName: {
        type: DataTypes.STRING,
      },
      accountNumber: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      sourcePhoneNumber: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      district: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      channel: {
        type: DataTypes.STRING,
      },
      narration: {
        type: DataTypes.STRING,
      },
      billerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      packageId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
      },
      institutionId: {
        type: DataTypes.STRING,
      },
      markReversal: {
        type: DataTypes.STRING,
      },
      isReversed: {
        type: DataTypes.STRING,
      },
      reversalDate: {
        type: DataTypes.DATE,
      },
      nextRequeryTime: {
        type: DataTypes.DATE,
      },
      markForRevend: {
        type: DataTypes.STRING,
      },
      cgatePaymentCode: {
        type: DataTypes.STRING,
      },
      billerVendStatus: {
        type: DataTypes.STRING,
      },
      standardToken: {
        type: DataTypes.STRING,
      },
      bonusToken: {
        type: DataTypes.STRING,
      },
      tokenReceiptNumber: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  CoralpayBillPayment.associate = function (models) {
    // associations can be defined here
  };
  return CoralpayBillPayment;
};
