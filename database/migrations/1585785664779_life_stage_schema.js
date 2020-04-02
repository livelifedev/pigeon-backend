"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LifeStageSchema extends Schema {
  up() {
    this.create("life_stages", table => {
      table.increments();
      table.integer("stage").notNullable();
      table.string("name", 80).notNullable();
      table.text("description");
      table.timestamps();
    });
  }

  down() {
    this.drop("life_stages");
  }
}

module.exports = LifeStageSchema;
