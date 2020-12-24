'use strict';
module.exports = (sequelize, DataTypes) => {
  const GefuFile = sequelize.define(
    'GefuFile',
    {
      startIdentifier: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brnCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sourceCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currentNo: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      uploadStat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ccyCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initiationDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      accountNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accountBrn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      drcrInd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lcyEquivalent: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      exchRate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      valueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      instrNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactnCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      financialCycle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      periodCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      additionalText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      batchNumberOfTheUpload: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      relatedCustomer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      misCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      misGroup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      misHead: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode6: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode7: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode8: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode9: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transactionMisCode10: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compositeMisCode1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compMis2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compositeMisCode3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compMis4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compositeMisCode5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compMis6: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compMis7: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compMis8: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compositeMisCode9: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      compositeMisCode10: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCode1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCode2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCode3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCode4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      costCode5: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      externalRefNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      relatedAcct: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  GefuFile.associate = function (models) {
    // associations can be defined here
  };
  return GefuFile;
};
