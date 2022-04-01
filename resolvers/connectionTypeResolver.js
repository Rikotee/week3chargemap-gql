import connectionType from '../models/connectionType';

export default {
  Query: {
    connectiontypes: async (parent, args) => await connectionType.find(),
  },
};
