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

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Gina',
        lastName: 'Vickery',
        createdAt: '2018-09-24 04:48:04',
        updatedAt: '2018-09-24 04:48:04'
      },
      {
        firstName: 'Raymond',
        lastName: 'Stewart',
        createdAt: '2018-09-24 04:48:05',
        updatedAt: '2018-09-24 04:48:05'
      },
      {
        firstName: 'Joshua',
        lastName: 'McDonell',
        createdAt: '2018-09-24 04:48:06',
        updatedAt: '2018-09-24 04:48:06'
      },
      {
        firstName: 'Vitto',
        lastName: 'Mathers',
        createdAt: '2018-09-24 04:48:07',
        updatedAt: '2018-09-24 04:48:07'
      },
      {
        firstName: 'Pablo',
        lastName: 'Escobar',
        createdAt: '2018-09-24 04:48:08',
        updatedAt: '2018-09-24 04:48:08'
      },
      {
        firstName: 'Pedro',
        lastName: 'Pascal',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
