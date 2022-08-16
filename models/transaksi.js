'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{
        foreignKey: "id_user"
      })
      this.belongsTo(models.lapangan,{
        foreignKey: "id_lapangan"
      })
    }
  }
  transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_lapangan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_booking: {
      type: DataTypes.DATE,
      allowNull: false
    },
    batas_bayar: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tgl_main: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jam_mulai: {
      type: DataTypes.TIME,
      allowNull: false
    },
    jam_berakhir: {
      type: DataTypes.TIME,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};