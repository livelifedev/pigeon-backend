"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// Define our schema using the GraphQL schema language
const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

# root query for Guild of Pigeon Breeders app
type Query {
  # list of all users
  users: [User]
  # an individual user
  user(id: Int!): User
  # list of all pigeons
  pigeons: [Pigeon]
  # an individual pigeon
  pigeon(id: Int!): Pigeon
  # list of all elements
  elements: [Element]
  # list of all subBreeds
  subBreeds: [SubBreed]
}

# root mutation for Guild of Pigeon Breeders app
type Mutation {
  # user login
  login (email: String!, password: String!): String
  # create a new user
  createUser (user: UserInput!): User
  # create a new pigeon
  createPigeon (pigeon: PigeonInput!): Pigeon
  # add a feeding schedule to a pigeon
  addFeedingSchedule (pigeonId: Int!, content: String!): String
}

input UserInput {
  breederName: String!
  email: String!
  password: String!
}
input PigeonInput {
  name: String!
  flock: String!
  gender: String!
  region: String!
  subBreed: String!
  element: String!
  dob: Int!
}

type User {
  id: Int!
  breederName: String!
  rank: String!
  email: String!
  pigeons: [Pigeon]
}
type Pigeon {
  id: Int!
  owner: User!
  name: String!
  flock: String!
  gender: String!
  region: String!
  primaryBreed: String!
  subBreed: String!
  element: String!
  dob: Int!
  bio: String!
  growth: Int!
  lifeStage: LifeStage!
  health: String!
  appetite: Int!
  feedSchedule: String
  lastFed: Int!
}
type Element {
  id: Int!
  name: String!
  description: String!
}
type LifeStage {
  id: Int!
  stage: Int!
  name: String!
  description: String!
}
type SubBreed {
  id: Int!
  name: String!
  description: String!
}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
