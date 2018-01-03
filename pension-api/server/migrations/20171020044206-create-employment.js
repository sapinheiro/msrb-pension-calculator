'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ssn: {
<<<<<<< HEAD
=======
        allowNull: false,
        type: Sequelize.STRING
      },
      start: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      group: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      salary: {
        allowNull: false,
>>>>>>> front-end
        type: Sequelize.INTEGER
      },
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
    return queryInterface.dropTable('Employments');
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> front-end
