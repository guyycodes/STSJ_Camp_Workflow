const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');
class RapidActingInsulin extends Model {}

  RapidActingInsulin.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CareDataID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'CareData',
        key: 'ID'
      },
      unique: true
    },
    Dosage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LastAdministered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastAdministeredDosage: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RapidActingInsulin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "CareDataID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CareDataID" },
        ]
      },
    ]
  });
  module.exports = RapidActingInsulin
