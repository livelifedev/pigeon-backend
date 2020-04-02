"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Pigeon extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  subBreed() {
    return this.hasOne("App/Models/SubBreed");
  }
  element() {
    return this.hasOne("App/Models/Element");
  }
  lifeStage() {
    return this.hasOne("App/Models/LifeStage");
  }
}

module.exports = Pigeon;
