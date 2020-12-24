'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'GlSpool',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        serialNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        trnRefNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drcrInd: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        acCcy: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lcyAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        fcyAmount: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        event: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rrn: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fromAcc: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stan: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        termId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        trnDt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        valueDt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        externalRefNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        trnCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        instrumentCode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        preAuthSeqNo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        authId: {
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
    return queryInterface.dropTable('GlSpool');
  },
};
