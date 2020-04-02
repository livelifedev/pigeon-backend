"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Hash = use("Hash");
const User = use("App/Models/User");

class UserSeeder {
  async run() {
    const users = [
      {
        breeder_name: "Admin",
        rank: "Admin Breeder",
        email: "admin@admin.com",
        password: Hash.make("password")
      }
    ];

    await User.createMany(users);
  }
}

module.exports = UserSeeder;
