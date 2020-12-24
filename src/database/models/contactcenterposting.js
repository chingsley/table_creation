'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContactCenterPosting = sequelize.define(
    'ContactCenterPosting',
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rrnNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stanNumber: {
        type: DataTypes.STRING,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      cardPan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currentStatus: {
        type: DataTypes.STRING,
      },
      glNarration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initiator: {
        type: DataTypes.STRING,
      },
      sheetName: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      transactionDate: {
        type: DataTypes.DATE,
      },
      valueDate: {
        type: DataTypes.DATE,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  ContactCenterPosting.associate = function (models) {
    // associations can be defined here
  };
  return ContactCenterPosting;
};
