'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubBreedSchema extends Schema {
  up () {
    this.create('sub_breeds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_breeds')
  }
}

module.exports = SubBreedSchema
