const knexfile = require("../../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("games", function (table) {
    table.increments();
    table.string("game").notNullable();
    table.string("score").notNullable();
    // table.date('releaseDate').notNullable()
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("games");
};
