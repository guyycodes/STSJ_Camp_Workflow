const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');
class CarbIntake extends Model {}

CarbIntake.init({
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
    DateTaken: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TimeLabel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CarbAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CarbIntake',
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
  module.exports = CarbIntake
