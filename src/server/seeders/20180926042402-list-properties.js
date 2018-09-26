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
        user_id: '089da2e0-2dce-4580-8a5e-ae551c1dac88',
        street: '4050 Peck Court',
        city: 'Irvine',
        state: 'CA',
        zip: '92714',
        rent: 3500,
        createdAt: '2018-09-24 04:48:04',
        updatedAt: '2018-09-24 04:48:04'
      },
      {
        user_id: '48592273-b8e0-4765-9e2f-75a6b10ee427',
        street: '505 South Market St',
        city: 'San Jose',
        state: 'CA',
        zip: '95008',
        rent: 2500,
        createdAt: '2018-09-24 04:48:05',
        updatedAt: '2018-09-24 04:48:05'
      },
      {
        user_id: '6cdbd21d-d397-48f6-883d-4410dfefdcf9',
        street: '4941 Orphan Road',
        city: 'Appleton',
        state: 'WI',
        zip: '54913',
        rent: 1750,
        createdAt: '2018-09-24 04:48:06',
        updatedAt: '2018-09-24 04:48:06'
      },
      {
        user_id: 'e37c9fe4-1830-4aa5-8659-ecb91b58ef68',
        street: '3796 Wayback Lane',
        city: 'Mastic',
        state: 'NY',
        zip: '11950',
        rent: 3800,
        createdAt: '2018-09-24 04:48:07',
        updatedAt: '2018-09-24 04:48:07'
      },
      {
        user_id: 'e9889385-8ed2-433c-b7d0-cad20f6ef8ab',
        street: '4987 Oak Avenue',
        city: 'Wayne',
        state: 'NJ',
        zip: '07477',
        rent: 3000,
        createdAt: '2018-09-24 04:48:08',
        updatedAt: '2018-09-24 04:48:08'
      },
      {
        user_id: '151f05a7-dece-4f58-9ad6-a741796f3064',
        street: '4847 Wiseman Street',
        city: 'Harriman',
        state: 'TN',
        zip: '37748',
        rent: 3500,
        createdAt: '2018-09-24 04:48:09',
        updatedAt: '2018-09-24 04:48:09'
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
