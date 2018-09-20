const Query = `
 extend type Query {
   users: [User]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
 Query: {
   /**
    * TODO:
    * Database logic for retrieving users
    */
   users: () => ([
     {
       id: '5592d311d7c6770300911b65',
       firstName: 'Gina',
       lastName: 'Vickery'
     },
     {
       id: '5592d311e7c6770300911b65',
       firstName: 'Raymond',
       lastName: 'Stewart'
     },
     {
       id: '5592d311d8c6770300911b65',
       firstName: 'Joshua',
       lastName: 'McDonell'
     },
     {
       id: '5592d311d7c6170300911b65',
       firstName: 'Vitto',
       lastName: 'Mathers'
     },
     {
       id: '5592d341d7c6780300911b65',
       firstName: 'Pablo',
       lastName: 'Escobar'
     },
     {
       id: '5592d311d7c6770500911b65',
       firstName: 'Pedro',
       lastName: 'Pascal'
     }
   ])
 }
};
