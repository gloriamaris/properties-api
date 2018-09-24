'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    rent: DataTypes.FLOAT
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};
