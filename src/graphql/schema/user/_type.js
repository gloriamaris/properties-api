import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    id: String!,
    firstName: String!,
    lastName: String!
  }
`;

export const types = () => [User];

export const typeResolvers = {

};
