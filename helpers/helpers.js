const db = require("../knex-setup/dbConfig");

function addGame(game, score) {
  return db("games").insert({ game, score });
}

function find() {
  return db("games");
}

module.exports = { addGame, find };
