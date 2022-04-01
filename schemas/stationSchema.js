import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    stations: [Station]
  }

  type Station {
    id: ID
    Connections: [Connection]
    Title: String
    AddressLine1: String
    Town: String
    StateOrProvince: String
    Postcode: String
    Location: PointObject
  }

  type PointObject {
    coordinates: [Float]
    type: String
  }
`;

