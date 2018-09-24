import { gql } from 'apollo-server-express';
const models = require('../../../server/models');

const Query = gql`
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
   users: () => {
     return models.User.all()
        .then((users) => {
          return users
        })
        .catch((error) => {
          return  error
        });
   }
 }
};
