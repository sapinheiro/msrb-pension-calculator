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

    var emp1 = {ssn: "123-45-6789", start: new Date(90, 2, 1), end: new Date(98, 1, 1),
                group: 1, salary: 45000, createdAt: new Date(),
                updatedAt: new Date()};

    var emp2 = {ssn: "123-45-6780", start: new Date(90, 1, 1), end: null,
                group: 4, salary: 60000, createdAt: new Date(),
                updatedAt: new Date()};

    var emp3 = {ssn: "123-45-6789", start: new Date(99, 2, 1), end: null,
                group: 1, salary: 50000, createdAt: new Date(),
                updatedAt: new Date()};



    return queryInterface.bulkInsert('Employments', [emp1, emp2, emp3], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Emplyoments', null, {});
  }
};
