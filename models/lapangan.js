'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lapangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.feedback,{
        foreignKey: "id_lapangan"
      })
    }
  }
  lapangan.init({
    id_lapangan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jenis_lapangan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jumlah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    harga_per_jam: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    jam_operasional: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kontak: {
      type: DataTypes.STRING,
      allowNull: false
    },
    koordinat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'lapangan',
  });
  return lapangan;
};