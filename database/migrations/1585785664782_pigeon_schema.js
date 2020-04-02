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
const HUNGERS = ["overstuffed", "full", "neutral", "hungry", "starving"];

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
      table.text("bio");
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
      table.integer("growth").notNullable();
      table
        .string("life_stage")
        .integer("life_stage_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("life_stages");
      table.string("health").notNullable();
      table.enu("hunger", HUNGERS).notNullable();
      table.integer("appetite").notNullable();
      table.json("feed_scehdule");
      table.timestamps();
    });
  }

  down() {
    this.drop("pigeons");
  }
}

module.exports = PigeonSchema;
