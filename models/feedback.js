'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class feedback extends Model {
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
  feedback.init({
    id_feedback: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_lapangan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ulasan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'feedback',
  });
  return feedback;
};