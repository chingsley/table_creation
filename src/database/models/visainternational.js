'use strict';
module.exports = (sequelize, DataTypes) => {
  const VisaInternational = sequelize.define(
    'VisaInternational',
    {
      transactionCode: {
        type: DataTypes.STRING,
      },
      fullPan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      month: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      day: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      settledAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      approvalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  VisaInternational.associate = function (models) {
    // associations can be defined here
  };
  return VisaInternational;
};
