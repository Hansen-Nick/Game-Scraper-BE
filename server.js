const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const gameData = require("./gameData.json");
const helpers = require("./helpers/helpers");

const server = express();
server.use(express.json());
server.use(morgan());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Welcome to the GameFinder!" });
});

server.get("/gameData", (req, res) => {
  helpers
    .find()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

server.post("/addGame", (req, res) => {
  const { game, score } = req.body;
  helpers
    .addGame(game, score)
    .then((response) => {
      // console.log(response);
      res.status(201).json({ Success: "Game Added!" });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = server;
