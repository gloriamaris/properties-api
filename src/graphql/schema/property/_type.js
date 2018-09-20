const Property = `
  type Property {
    id: String!,
    street: String!,
    city: String!,
    state: String!,
    zip: String!,
    rent: Float!
  }
`;

export const types = () => [Property];

export const typeResolvers = {

};
