'use strict';
module.exports = (sequelize, DataTypes) => {
  const GlSpool = sequelize.define(
    'GlSpool',
    {
      serialNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trnRefNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drcrInd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acCcy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lcyAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      fcyAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rrn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromAcc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      termId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trnDt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      valueDt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      externalRefNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      trnCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instrumentCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preAuthSeqNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  GlSpool.associate = function (models) {
    // associations can be defined here
  };
  return GlSpool;
};
