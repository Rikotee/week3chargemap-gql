import levelType from '../models/levelType';

export default {
  Query: {
    leveltypes: async (parent, args) => await levelType.find(),
  },
  Connection: {
    LevelID: async (parent, args) => {
      console.log('LevelID', parent.LevelID);
      return await levelType.findById(parent.LevelID);
    },
  },
};
