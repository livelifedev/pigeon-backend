"use strict";

/*
|--------------------------------------------------------------------------
| ElementSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Element = use("App/Models/Element");

class ElementSeeder {
  async run() {
    const elements = [
      { name: "Air", description: "" },
      { name: "Earth", description: "" },
      { name: "Fire", description: "" },
      { name: "Water", description: "" },
      { name: "Void", description: "" }
    ];

    await Element.createMany(elements);
  }
}

module.exports = ElementSeeder;
