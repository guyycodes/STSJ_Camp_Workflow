const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');
class CamperAssignedVolunteers extends Model {}

CamperAssignedVolunteers.init({
    CamperID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'Camper',
        key: 'ID'
      }
    },
    VolunteerID: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'Volunteers',
        key: 'ID'
      }
    },
    PK: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'CamperAssignedVolunteers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PK" },
        ]
      },
      {
        name: "CamperID",
        using: "BTREE",
        fields: [
          { name: "CamperID" },
        ]
      },
      {
        name: "VolunteerID",
        using: "BTREE",
        fields: [
          { name: "VolunteerID" },
        ]
      },
    ]
  });
  module.exports = CamperAssignedVolunteers
