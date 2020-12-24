'use strict';
module.exports = (sequelize, DataTypes) => {
  const PayDirect = sequelize.define(
    'PayDirect',
    {
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clearedCollections: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      earningAsCollectingBank: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      earningAsLeadBank: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      earningForRemittanceToIso: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      serviceProviderEarnings: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      terminalOwnerEarnings: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      splitCR: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      splitDR: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      settlementAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  PayDirect.associate = function (models) {
    // associations can be defined here
  };
  return PayDirect;
};
