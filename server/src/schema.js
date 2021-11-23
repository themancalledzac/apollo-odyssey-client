const { gql } = require("apollo-server");

// typeDefs, short for Type Definitions
const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid, Non null list of none null tracks"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration ti display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules, This array can't be null, so we put an exclemation point at the end. The entries in the array can't be null either, so we add an exclemation point after Module"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "aAuthor's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
