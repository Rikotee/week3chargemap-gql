import Station from '../models/station';
import {rectangleBounds} from '../utils/rectangleBounds';

export default {
  Query: {
    stations: async (parent, args) => {
      const mapBounds = rectangleBounds(
        args.bounds._northEast,
        args.bounds._southWest
      );
      console.log('stResolver', mapBounds);
      // return await Station.find().skip(args.start).limit(args.limit);
      return await Station.find({
        location: {
          $geoWithin: {
            $geometry: mapBounds,
          },
        },
      });
    },
  },
};

