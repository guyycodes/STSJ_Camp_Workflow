const sequelize = require('../config/connection.js');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')

const hashPassword = async (newUserData) => {
 if (newUserData.Password) {
    const newPassword = await bcrypt.hash(newUserData.Password, 10);
    newUserData.Password = newPassword;
  } else {
    throw new Error('Password is required');
  }
};

class Volunteers extends Model {
  // this function uses bcrypt to  validate a pasword with the saved hashed password
  async checkPassword(loginPw) {
    // console.log(`loginPw: ${loginPw}, this.password: ${this.Password}`);
    return bcrypt.compareSync(loginPw, this.Password);
  }
}
  Volunteers.init({
    ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    Photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // validates email format will send back an error is its wrong 400 error
      }
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [8],
        //is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // the plus means there needs to be just one regular expression 
      },
    },
    VolunteerType: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    DateOfBirth: {
      type: DataTypes.DATE, 
      allowNull: true
    },
    Notifications: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
  }, {

    // When adding hooks via the init() method, they go below
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: (newUserData) => hashPassword(newUserData), //(POST methods)
      // Here, perform a check before updating the database.
      beforeUpdate: (newUserData) => hashPassword(newUserData), //(PUT methods)
    },

    sequelize,
    tableName: 'Volunteers',
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
    ]
  });
  module.exports = Volunteers
