"use strict";

const User = use("App/Models/User");
const Pigeon = use("App/Models/Pigeon");
const SubBreed = use("App/Models/SubBreed");
const Element = use("App/Models/Element");
const LifeStage = use("App/Models/LifeStage");

// TODO: create custom serializer to camelize field names with ORM
// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async users() {
      const users = await User.all();
      return users.toJSON();
    },
    // Get a user by ID
    user(_, { id }) {
      return User.find(id);
    },
    // Get a logged in user
    async profile(_, __, { auth }) {
      try {
        await auth.check();
        const user = await auth.getUser();

        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
    // Fetch all pigeons
    async pigeons() {
      const pigeons = await Pigeon.all();
      return pigeons.toJSON();
    },
    // Get a pigeon by its ID
    pigeon(_, { id }) {
      return Pigeon.find(id);
    },
    // Fetch all elements
    async elements() {
      const elements = await Element.all();
      return elements.toJSON();
    },
    // Fetch all sub breeds
    async subBreeds() {
      const subBreeds = await SubBreed.all();
      return subBreeds.toJSON();
    },
  },

  Mutation: {
    // Handles user login
    async login(_, { email, password }, { auth }) {
      const { token } = await auth.attempt(email, password);
      return token;
    },
    // Create new user
    async createUser(_, { user }, { auth }) {
      await User.create({
        breeder_name: user.breederName,
        email: user.email,
        password: user.password,
      });

      const { token } = await auth.attempt(user.email, user.password);
      return token;
    },
    // Create new pigeon
    async createPigeon(_, { pigeon }, { auth }) {
      try {
        await auth.check();
        const user = await auth.getUser();

        return Pigeon.create({
          name: pigeon.name,
          flock: pigeon.flock,
          gender: pigeon.gender,
          region: pigeon.region,
          sub_breed_id: pigeon.subBreedId,
          element_id: pigeon.elementId,
          dob: pigeon.dob,
          user_id: user.id,
          appetite: pigeon.appetite,
          last_fed: pigeon.dob,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    async addFeedingSchedule(_, { pigeonId, content }, { auth }) {
      try {
        await auth.check();
        const user = await auth.getUser();
        const pigeon = await Pigeon.find(pigeonId);

        if (user.id !== pigeon.user_id)
          throw new Error("Pigeon does not belong to you");

        pigeon.feed_schedule = content;

        await pigeon.save();

        return pigeon.feed_schedule;
      } catch (error) {
        throw new Error(error);
      }
    },
    async updatePigeon(_, { pigeonId, growth, health, lastFed }, { auth }) {
      try {
        await auth.check();
        const user = await auth.getUser();
        const pigeon = await Pigeon.find(pigeonId);

        if (user.id !== pigeon.user_id)
          throw new Error("Pigeon does not belong to you");

        if (growth) pigeon.growth = pigeon.growth + growth;
        if (health) pigeon.health = health;
        if (lastFed) pigeon.lastFed = lastFed;

        await pigeon.save();

        return pigeon;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  User: {
    async pigeons(user) {
      const userInstance = new User();
      userInstance.newUp(user);
      const { rows } = await userInstance.pigeons().fetch();
      return rows;
    },
    breederName(user) {
      return user.breeder_name;
    },
  },

  Pigeon: {
    owner(pigeon) {
      return User.find(pigeon.user_id);
    },
    async subBreed(pigeon) {
      const subBreed = await SubBreed.find(pigeon.sub_breed_id);
      return subBreed.name;
    },
    async element(pigeon) {
      const element = await Element.find(pigeon.element_id);
      return element.name;
    },
    lifeStage(pigeon) {
      return LifeStage.find(pigeon.life_stage_id);
    },
    primaryBreed(pigeon) {
      return pigeon.primary_breed;
    },
    feedSchedule(pigeon) {
      return pigeon.feed_schedule;
    },
    lastFed(pigeon) {
      return pigeon.last_fed;
    },
  },
};

module.exports = resolvers;
