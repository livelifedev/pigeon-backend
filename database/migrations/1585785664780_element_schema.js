"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ElementSchema extends Schema {
  up() {
    this.create("elements", table => {
      table.increments();
      table.string("name", 80).notNullable();
      table.text("description");
      table.timestamps();
    });
  }

  down() {
    this.drop("elements");
  }
}

module.exports = ElementSchema;
