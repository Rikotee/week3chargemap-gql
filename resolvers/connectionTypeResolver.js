import connectionType from '../models/connectionType';

export default {
  Query: {
    connectiontypes: async (parent, args) => await connectionType.find(),
  },
  Connection: {
    ConnectionTypeID: async (parent, args) => {
      console.log('ConnectionTypeID', parent.ConnectionTypeID);
      return await connectionType.findById(parent.ConnectionTypeID);
    },
  },
};
