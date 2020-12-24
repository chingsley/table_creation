'use strict';
module.exports = (sequelize, DataTypes) => {
  const AtmCpd = sequelize.define(
    'AtmCpd',
    {
      sn: {
        type: DataTypes.STRING,
      },
      vssProcessingDate: {
        type: DataTypes.DATE,
      },
      vnpsettDate: {
        type: DataTypes.DATE,
      },
      terminalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      atmAcquirer: {
        type: DataTypes.STRING,
      },
      atmLocation: {
        type: DataTypes.STRING,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardSeq: {
        type: DataTypes.STRING,
      },
      transactionAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      issuer: {
        type: DataTypes.STRING,
      },
      settlementAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      localTransactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      localTransactionTime: {
        type: DataTypes.DATE,
      },
      traceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      approvalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      responseDesc: {
        type: DataTypes.STRING,
      },
      transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acqrrn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acqstan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      issuerBin: {
        type: DataTypes.STRING,
      },
      transId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      revrequestId: {
        type: DataTypes.STRING,
      },
      issuerStan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origTypeDesc: {
        type: DataTypes.STRING,
      },
      phase: {
        type: DataTypes.STRING,
      },
      debitCredit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visaRRN: {
        type: DataTypes.STRING,
      },
      acqReimbursementFeeNGN: {
        type: DataTypes.STRING,
      },
      issuerRRN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  AtmCpd.associate = function (models) {
    // associations can be defined here
  };
  return AtmCpd;
};
