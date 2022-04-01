import Station from '../models/station';

export default {
  Query: {
    stations: async (parent, args) => {
      return await Station.find()
        .limit(10)
        .populate({
          path: 'Connections',
          populate: {
            path: 'ConnectionTypeID LevelID CurrentTypeID',
          },
        });
    },
  },
};
