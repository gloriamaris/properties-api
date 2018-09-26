const Sequelize = require('sequelize');
import { gql } from 'apollo-server-express';
const { Op } = Sequelize;

const { User, Property } = require('../../../server/models');

const Query = gql`
  union UserOrProperty = User | Property

  extend type Query {
    users: [User],
    search(keyword: String!): [UserOrProperty]
  }
`;

export const queryTypes = () => [Query];

const queries = {
  fetchUsersByKeyword: (keyword) => {
    return User.findAll({
      include: [{ model: Property }],
      where: {
        [Op.or]: [
          Sequelize.where(Sequelize.fn('concat', Sequelize.col('firstName'), ' ', Sequelize.col('lastName')), {
            [Op.iLike]: `%${keyword}%`
          }),
          { firstName: { [Op.iLike]: `%${keyword}%` } },
          { lastName: { [Op.iLike]: `%${keyword}%` } }
        ]
      }
    })
    .then((users) => { return users })
    .catch((error) => { return  error });
  },

  fetchPropertiesByKeyword: (keyword) => {
    return Property.findAll({
      where: {
        [Op.or]: [
          { street: { [Op.iLike]: `%${keyword}%` } },
          { city: { [Op.iLike]: `%${keyword}%` } },
          { state: { [Op.iLike]: `%${keyword}%` } },
          { zip: { [Op.iLike]: `%${keyword}%` } }
        ]
      }
    })
    .then((properties) => { return properties })
    .catch((error) => { return  error });
  }
}

export const queryResolvers = {
  // Resolver for union type UserOrProperty
  UserOrProperty: {
    __resolveType(obj, context, info) {
      if (obj.firstName || obj.lastName) {
        return 'User'
      }

      if (obj.street || obj.city || obj.zip || obj.state || obj.rent) {
        return 'Property'
      }
    }
  },
  Query: {
    // Fetch all users
    users: () => {
     return User.all()
        .then((users) => { return users })
        .catch((error) => { return  error });
    },

    // Fetch users and/or properties by keyword
    search: async (_, { keyword }) => {
      const { fetchUsersByKeyword, fetchPropertiesByKeyword } = queries;

      const userResults = await fetchUsersByKeyword(keyword);
      const propsResults = await fetchPropertiesByKeyword(keyword);

      let response = {};

      if (Object.keys(userResults).length > 0) {
        response = userResults;
      } else if (Object.keys(propsResults).length > 0) {
        response = propsResults;
      }

      return response;
    }
 }
};
