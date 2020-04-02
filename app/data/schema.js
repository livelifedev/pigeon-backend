"use strict";

const { makeExecutableSchema } = require("graphql-tools");

// Define our schema using the GraphQL schema language
const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

# root query for Guild of Pigeon Breeders app
type Query {
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
type Mutation {
  login (email: String!, password: String!): String
  createUser (username: String!, email: String!, password: String!): User
  addPost (title: String!, content: String!): Post
}
type User {
  id: Int!
  breederName: String!
  rank: String!
  email: String!
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
  feedSchedule: String!
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

const resolvers = require("./resolvers");

module.exports = makeExecutableSchema({ typeDefs, resolvers });
