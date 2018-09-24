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

    return queryInterface.bulkInsert('Properties', [
      {
        street: '4050 Peck Court',
        city: 'Irvine',
        state: 'CA',
        zip: '92714',
        rent: 3500,
        createdAt: '2018-09-24 04:48:04',
        updatedAt: '2018-09-24 04:48:04'
      },
      {
        street: '505 South Market St',
        city: 'San Jose',
        state: 'CA',
        zip: '95008',
        rent: 2500,
        createdAt: '2018-09-24 04:48:05',
        updatedAt: '2018-09-24 04:48:05'
      },
      {
        street: '4941 Orphan Road',
        city: 'Appleton',
        state: 'WI',
        zip: '54913',
        rent: 1750,
        createdAt: '2018-09-24 04:48:06',
        updatedAt: '2018-09-24 04:48:06'
      },
      {
        street: '3796 Wayback Lane',
        city: 'Mastic',
        state: 'NY',
        zip: '11950',
        rent: 3800,
        createdAt: '2018-09-24 04:48:07',
        updatedAt: '2018-09-24 04:48:07'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Properties', null, {});
  }
};
