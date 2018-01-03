// Represents an Employee table in the database.

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ssn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    beneficiary_dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    us_vet: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //TODO associate with employment???
<<<<<<< HEAD
      }
=======
      },
>>>>>>> front-end
    }
  });
  return Employee;
};
