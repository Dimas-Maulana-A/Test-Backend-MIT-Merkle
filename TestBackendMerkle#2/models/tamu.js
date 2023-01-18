'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tamu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tamu.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telepon: DataTypes.STRING,
    catatan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tamu',
    tableName: 'tamu'
  });
  return tamu;
};