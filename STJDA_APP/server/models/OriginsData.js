const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');
class OriginsData extends Model {}
// after a delay run a hook that links OriginsData ID to the camper table
  OriginsData.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CamperID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'Camper',
        key: 'ID'
      },
      unique: true
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateOfBirth: {
      type: DataTypes.DATE, 
      allowNull: true
    },
    Mother: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Father: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OriginsData',
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
        name: "CamperID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CamperID" },
        ]
      },
    ]
  });
  module.exports = OriginsData
