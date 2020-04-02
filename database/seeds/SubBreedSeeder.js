"use strict";

/*
|--------------------------------------------------------------------------
| SubBreedSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const SubBreed = use("App/Models/SubBreed");

class SubBreedSeeder {
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

    await SubBreed.createMany(subBreeds);
  }
}

module.exports = SubBreedSeeder;
