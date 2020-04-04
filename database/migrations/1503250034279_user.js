"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const DEFAULT_RANK = "Novice Breeder";

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table
        .string("breeder_name", 80)
        .notNullable()
        .unique();
      table
        .string("rank", 60)
        .notNullable()
        .defaultTo(DEFAULT_RANK);
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
