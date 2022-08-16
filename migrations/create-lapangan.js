'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lapangan', {
      id_lapangan: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jenis_lapangan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jumlah: {
        type: Sequelize.STRING,
        allowNull: false
      },
      harga_per_jam: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jam_operasional: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kontak: {
        type: Sequelize.STRING,
        allowNull: false
      },
      koordinat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lapangan');
  }
};