"use strict";

/*
|--------------------------------------------------------------------------
| PigeonSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Pigeon = use("App/Models/Pigeon");

class PigeonSeeder {
  async run() {
    const pigeons = [
      {
        user_id: 0,
        name: "Alpha",
        flock: "God",
        gender: "Genderless",
        region: "Unknown",
        primary_breed: "Pigeon",
        sub_breed_id: 8,
        element: 5,
        dob: 0000000001,
        bio: "",
        growth: 0,
        life_stage_id: 0,
        health: "Godly",
        hunger: "neutral",
        appetite: 4,
        feed_scehdule: null,
        last_fed: 0000000001
      }
    ];

    await Pigeon.createMany(pigeons);
  }
}

module.exports = PigeonSeeder;
