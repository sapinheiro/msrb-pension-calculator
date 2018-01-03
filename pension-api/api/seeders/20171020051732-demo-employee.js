'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
<<<<<<< HEAD
=======
    var newEmployee = { firstname: "Tom", lastname: "Smith",
                        ssn: "123-45-6789", dob: new Date(80, 1, 1),
                        beneficiary_dob: new Date(90, 1, 1), us_vet: false,
                        createdAt: new Date(), updatedAt: new Date()};

    var newEmployee1 = { firstname: "Jill", lastname: "Smith",
                        ssn: "123-45-6780", dob: new Date(80, 1, 1),
                        beneficiary_dob: null, us_vet: false,
                        createdAt: new Date(), updatedAt: new Date()};

    return queryInterface.bulkInsert('Employees', [newEmployee, newEmployee1], {});
>>>>>>> front-end
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
<<<<<<< HEAD
=======
    return queryInterface.bulkDelete('Employees', null, {});
>>>>>>> front-end
  }
};
