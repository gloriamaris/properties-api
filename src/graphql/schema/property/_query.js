import { gql } from 'apollo-server-express';

const Query = gql`
 extend type Query {
   properties: [Property]
 }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
 Query: {
   /**
    * TODO:
    * Database logic for retrieving properties
    */
   properties: () => ([
     {
       id: '5592d311d7c6770300921b65',
       street: '4050 Peck Court',
       city: 'Irvine',
       state: 'CA',
       zip: '92714',
       rent: 3500
     },
     {
       id: '5582d311d7c6770300991b65',
       street: '505 South Market St',
       city: 'San Jose',
       state: 'CA',
       zip: '95008',
       rent: 2500
     },
     {
       id: '5592d371d7c6770300921c65',
       street: '4941 Orphan Road',
       city: 'Appleton',
       state: 'WI',
       zip: '54913',
       rent: 1750
     },
     {
       id: '5592d311d7c6770300921b65',
       street: '3796 Wayback Lane',
       city: 'Mastic',
       state: 'NY',
       zip: '11950',
       rent: 3800
     }
   ])
 }
};
