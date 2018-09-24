import { gql } from 'apollo-server-express';
const models = require('../../../server/models');

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
   properties: () => {
     return models.Property.all()
        .then((properties) => {
          return properties;
        })
        .catch((error) => {
          return  error;
        });
   }
 }
};
