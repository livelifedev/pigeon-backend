"use strict";

/*
|--------------------------------------------------------------------------
| InitialSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Element = use("App/Models/Element");
const LifeStage = use("App/Models/LifeStage");
const SubBreed = use("App/Models/SubBreed");
const User = use("App/Models/User");
const Pigeon = use("App/Models/Pigeon");

class InitialSeeder {
  async run() {
    const subBreeds = [
      { name: "Amphibian", description: "" },
      { name: "Bird", description: "" },
      { name: "Fish", description: "" },
      { name: "Invertebrate", description: "" },
      { name: "Mammal", description: "" },
      { name: "Reptile", description: "" },
      { name: "Alien", description: "" },
      { name: "Mythological", description: "" }
    ];

    const elements = [
      { name: "Air", description: "" },
      { name: "Earth", description: "" },
      { name: "Fire", description: "" },
      { name: "Water", description: "" },
      { name: "Void", description: "" }
    ];

    const lifeStages = [
      { stage: 100, name: "Godhood", description: "" },
      { stage: 0, name: "Hatchling", description: "" }
    ];

    const users = [
      {
        breeder_name: "Admin",
        rank: "Admin Breeder",
        email: "admin@admin.com",
        password: "password"
      }
    ];

    const pigeons = [
      {
        user_id: 1,
        name: "Alpha",
        flock: "God",
        gender: "Genderless",
        region: "Unknown",
        primary_breed: "Pigeon",
        sub_breed_id: 8,
        element_id: 5,
        dob: 1000000000,
        bio: null,
        growth: 100,
        life_stage_id: 1,
        health: "Godly",
        appetite: 4,
        feed_schedule: null,
        last_fed: 1000000000
      }
    ];

    await SubBreed.createMany(subBreeds);
    await Element.createMany(elements);
    await LifeStage.createMany(lifeStages);
    await User.createMany(users);
    await Pigeon.createMany(pigeons);
  }
}

module.exports = InitialSeeder;
