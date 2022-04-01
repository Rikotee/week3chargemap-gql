import Station from '../models/station';

export default {
  Query: {
    stations: async (parent, args) => {
      return await Station.find().skip(args.start).limit(args.limit);
    },
  },
};

