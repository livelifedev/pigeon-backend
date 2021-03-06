"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

const PRIMARY_BREED = "Pigeon";
const GENDERS = ["Female", "Male", "Genderless"];
const REGIONS = [
  "Africa",
  "Antartica",
  "Asia",
  "Australia/Oceania",
  "Europe",
  "North America",
  "South America",
  "Unknown"
];

class PigeonSchema extends Schema {
  up() {
    this.create("pigeons", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table.string("name", 80).notNullable();
      table.string("flock", 80).notNullable();
      table.enu("gender", GENDERS).notNullable();
      table.enu("region", REGIONS).notNullable();
      table
        .string("primary_breed", 80)
        .notNullable()
        .defaultTo(PRIMARY_BREED);
      table
        .integer("sub_breed_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("sub_breeds");
      table
        .integer("element_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("elements");
      table.integer("dob").notNullable();
      table.text("bio");
      table
        .integer("growth")
        .notNullable()
        .defaultTo(5);
      table
        .integer("life_stage_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("life_stages")
        .defaultTo(2);
      table
        .string("health")
        .notNullable()
        .defaultTo("Healthy");
      table.integer("appetite").notNullable();
      table.text("feed_schedule");
      table.integer("last_fed").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("pigeons");
  }
}

module.exports = PigeonSchema;
