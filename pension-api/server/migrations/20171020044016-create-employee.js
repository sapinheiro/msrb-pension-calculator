'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastname: {
<<<<<<< HEAD
        type: Sequelize.STRING
      },
=======
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ssn: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      beneficiary_dob: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      us_vet: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
>>>>>>> front-end
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> front-end
