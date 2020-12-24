'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'GefuFile',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        startIdentifier: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        brnCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sourceCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        currentNo: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        uploadStat: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ccyCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        initiationDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        accountNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        accountBrn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drcrInd: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lcyEquivalent: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        exchRate: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        valueDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        instrNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactnCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        financialCycle: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        periodCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        additionalText: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        batchNumberOfTheUpload: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        relatedCustomer: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        misCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        misGroup: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        misHead: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode4: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode5: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode6: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode7: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode8: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode9: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        transactionMisCode10: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compositeMisCode1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compMis2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compositeMisCode3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compMis4: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compositeMisCode5: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compMis6: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compMis7: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compMis8: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compositeMisCode9: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        compositeMisCode10: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        costCode1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        costCode2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        costCode3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        costCode4: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        costCode5: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        externalRefNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        relatedAcct: {
          type: Sequelize.STRING,
          allowNull: false,
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
    return queryInterface.dropTable('GefuFile');
  },
};
