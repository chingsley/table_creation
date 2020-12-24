'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'MastercardNou',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        msgType: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        onlineSettlementDate: {
          type: Sequelize.DATE,
        },
        iin: {
          type: Sequelize.STRING,
        },
        rawDataRecipient: {
          type: Sequelize.STRING,
        },
        terminalId: {
          type: Sequelize.STRING,
          allowNull: false,
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
        },
        drcrTransactionAmtI: {
          type: Sequelize.STRING,
        },
        transactionAmtCurrencyCode: {
          type: Sequelize.STRING,
        },
        settlementAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        drcrSettlementI: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        settlementAmtCurrencyCode: {
          type: Sequelize.STRING,
        },
        interchangeFee: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        drcrIfI: {
          type: Sequelize.STRING,
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
        responseDescrption: {
          type: Sequelize.STRING,
        },
        transactionType: {
          type: Sequelize.STRING,
        },
        fromAccountType: {
          type: Sequelize.STRING,
        },
        toAccountType: {
          type: Sequelize.STRING,
        },
        settlementmentServiceSelected: {
          type: Sequelize.STRING,
        },
        approvalCode: {
          type: Sequelize.STRING,
        },
        acqrrn: {
          type: Sequelize.STRING,
        },
        originalAmount: {
          type: Sequelize.DOUBLE,
        },
        processorId: {
          type: Sequelize.STRING,
        },
        switchSerialId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        reportOwnerType: {
          type: Sequelize.STRING,
        },
        accessFee: {
          type: Sequelize.DOUBLE,
        },
        drcrAccessFeeI: {
          type: Sequelize.STRING,
        },
        exchangeRate: {
          type: Sequelize.DOUBLE,
        },
        mcc: {
          type: Sequelize.STRING,
        },
        posEntryMode: {
          type: Sequelize.STRING,
        },
        tranNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        adviceReasonCode: {
          type: Sequelize.STRING,
        },
        transId: {
          type: Sequelize.STRING,
        },
        revrequestId: {
          type: Sequelize.STRING,
        },
        adjustmentAmtLocal: {
          type: Sequelize.DOUBLE,
        },
        drcrAalI: {
          type: Sequelize.STRING,
        },
        reqamttrxLocal: {
          type: Sequelize.DOUBLE,
        },
        drcrAasI: {
          type: Sequelize.STRING,
        },
        brand: {
          type: Sequelize.STRING,
        },
        orgAmountReq: {
          type: Sequelize.DOUBLE,
        },
        procAcqIss: {
          type: Sequelize.STRING,
        },
        cardHolderBilling: {
          type: Sequelize.DOUBLE,
        },
        drcrChbI: {
          type: Sequelize.STRING,
        },
        cashbackAmt: {
          type: Sequelize.DOUBLE,
        },
        drcrCashbackI: {
          type: Sequelize.STRING,
        },
        serviceLevIndicator: {
          type: Sequelize.STRING,
        },
        crossBorderIndicator: {
          type: Sequelize.STRING,
        },
        crossBorderCurrIndicator: {
          type: Sequelize.STRING,
        },
        feprrn: {
          type: Sequelize.STRING,
        },
        extrrn: {
          type: Sequelize.STRING,
        },
        acqstan: {
          type: Sequelize.STRING,
        },
        origType: {
          type: Sequelize.STRING,
        },
        issuerFiId: {
          type: Sequelize.STRING,
        },
        acquireRfiId: {
          type: Sequelize.STRING,
        },
        origId: {
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
    return queryInterface.dropTable('MastercardNou');
  },
};
