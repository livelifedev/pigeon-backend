"use strict";

/*
|--------------------------------------------------------------------------
| LifeStageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const LifeStage = use("App/Models/LifeStage");

class LifeStageSeeder {
  async run() {
    const lifeStages = [
      { stage: 100, name: "Godhood", description: "" },
      { stage: 0, name: "Hatchling", description: "" }
    ];

    await LifeStage.createMany(lifeStages);
  }
}

module.exports = LifeStageSeeder;
