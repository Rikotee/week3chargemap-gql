import connection from '../models/connection';

export default {
  Station: {
    Connections: async (parent, args) => {
      console.log('parent', parent);
      return await connection.find({ _id: { $in: parent.Connections } });
    },
  },
};
