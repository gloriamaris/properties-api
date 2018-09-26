import { gql } from 'apollo-server-express';
const { Property } = require('../../../server/models');

const User = gql`
  type User {
    id: String!,
    firstName: String!,
    lastName: String!,
    properties: [Property]
  }`;

export const types = () => [User];

export const typeResolvers = {
  User: {
    // Resolver for properties belonging to a User
    properties: (parent) => {
      return Property.findAll({ where: { user_id: parent.id } })
              .then((properties) => { return properties })
              .catch((error) => { return error })
    }
  }
};
