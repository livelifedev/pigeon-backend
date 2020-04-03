"use strict";

const User = use("App/Models/User");
const Pigeon = use("App/Models/Pigeon");
const SubBreed = use("App/Models/SubBreed");
const Element = use("App/Models/Element");
const LifeStage = use("App/Models/LifeStage");
const slugify = require("slugify");

// Define resolvers
const resolvers = {
  Query: {
    // Get a user by ID
    async user(_, { id }) {
      const user = await User.find(id);
      return user.toJSON();
    },
    // Fetch all pigeons
    async pigeons() {
      const pigeons = await Pigeon.all();
      return pigeons.toJSON();
    },
    // Get a pigeon by its ID
    async pigeon(_, { id }) {
      const pigeon = await Pigeon.find(id);
      return pigeon.toJSON();
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
    }
  },
  Pigeon: {
    async owner(pigeon) {
      const user = await User.find(pigeon.user_id);
      return user.toJSON();
    },
    async subBreed(pigeon) {
      const subBreed = await SubBreed.find(pigeon.sub_breed_id);
      return subBreed.name;
    },
    primaryBreed(pigeon) {
      return pigeon.primary_breed;
    }
  }
  // Mutation: {
  //   // Handles user login
  //   async login(_, { email, password }, { auth }) {
  //     const { token } = await auth.attempt(email, password);
  //     return token;
  //   },

  //   // Create new user
  //   async createUser(_, { username, email, password }) {
  //     return await User.create({ username, email, password });
  //   },

  //   // Add a new post
  //   async addPost(_, { title, content }, { auth }) {
  //     try {
  //       // Check if user is logged in
  //       await auth.check();

  //       // Get the authenticated user
  //       const user = await auth.getUser();

  //       // Add new post
  //       return await Post.create({
  //         user_id: user.id,
  //         title,
  //         slug: slugify(title, { lower: true }),
  //         content
  //       });
  //     } catch (error) {
  //       // Throw error if user is not authenticated
  //       throw new Error("Missing or invalid jwt token");
  //     }
  //   },
  //   User: {
  //     // Fetch all posts created by a user
  //     async posts(userInJson) {
  //       // Convert JSON to model instance
  //       const user = new User();
  //       user.newUp(userInJson);

  //       const posts = await user.posts().fetch();
  //       return posts.toJSON();
  //     }
  //   },
  //   Post: {
  //     // Fetch the author of a particular post
  //     async user(postInJson) {
  //       // Convert JSON to model instance
  //       const post = new Post();
  //       post.newUp(postInJson);

  //       const user = await post.user().fetch();
  //       return user.toJSON();
  //     }
  //   }
  // }
};

module.exports = resolvers;
