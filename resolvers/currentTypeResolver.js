import currentType from '../models/currentType';

export default {
  Query: {
    currenttypes: async (parent, args) => await currentType.find(),
  },
};
