import { AuthenticationError } from 'apollo-server-express';
import Connection from '../models/connection';
import Station from '../models/station';
import { rectangleBounds } from '../utils/rectangleBounds';

export default {
  Query: {
    stations: async (parent, args) => {
      const start = args.start || 0;
      const limit = args.limit || 10;
      const stations = Station.find().skip(start).limit(limit);

      return args.bounds
        ? stations
            .find()
            .where('Location')
            .within(
              rectangleBounds(args.bounds._northEast, args.bounds._southWest)
            )
        : stations;
    },
  },
  Mutation: {
    addStation: async (parent, args, context) => {
      console.log(context);
      // authorization
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      // save the connections first
      const conns = await Promise.all(
        args.Connections.map(async (conn) => {
          const newConnection = new Connection(args);
          const result = await newConnection.save();
          return result._id;
        })
      );

      const newStation = new Station({ ...args, Connections: conns });
      return newStation.save();
    },
  },
};

/*
mutation {
  addStation(
    Connections: [{ConnectionTypeID:"5e39eecac5598269fdad81c0",LevelID:"5e39edf7bb7ae768f05cf2be",CurrentTypeID:"5e39ef4a6921476aaf62404c",Quantity:2},{ConnectionTypeID:"5e39eecac5598269fdad81a1",LevelID:"5e39edf7bb7ae768f05cf2bc",CurrentTypeID:"5e39ef4a6921476aaf62404a",Quantity:2}],
    Postcode: "02730",
    Title: "",
    AddressLine1: "Tammipääntie 55",
    StateOrProvince: "Uusimaa",
    Town: "Espoo",
    Location: {
      coordinates: [24.770991504192356, 60.25421352204379]
    }
  )
  {
    AddressLine1
    Town
  }
}
*/
