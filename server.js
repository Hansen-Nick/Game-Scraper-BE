const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const gameData = require("./gameData.json");

const server = express();
server.use(express.json());
server.use(morgan());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Welcome to the GameFinder!" });
});

server.get("/gameData", (req, res) => {
  res.status(200).json(gameData);
  // python.stdout.on("data", (data) => {
  //   console.log("python game data...", data);
  //   dataSet.push(gameData);
  // });

  // python.on("close", (code) => {
  //   console.log(`child process close all stdio with code ${code}`);
  //   res.send(dataSet);
  // });
});

module.exports = server;
