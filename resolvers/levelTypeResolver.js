import levelType from '../models/levelType';

export default {
  Query: {
    leveltypes: async (parent, args) => await levelType.find(),
  },
};
