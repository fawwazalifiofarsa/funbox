'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaksi', {
      id_transaksi: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id_user'
        }
      },
      id_lapangan: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'lapangan',
          key: 'id_lapangan'
        }
      },
      tgl_booking: {
        type: Sequelize.DATE,
        allowNull: false
      },
      batas_bayar: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tgl_main: {
        type: Sequelize.DATE,
        allowNull: false
      },
      jam_mulai: {
        type: Sequelize.TIME,
        allowNull: false
      },
      jam_berakhir: {
        type: Sequelize.TIME,
        allowNull: false
      },
      total_harga:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transaksis');
  }
};