"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class SubBreed extends Model {
  pigeon() {
    return this.belongsTo("App/Models/Pigeon");
  }
}

module.exports = SubBreed;
