const { spawn } = require("child_process");

function pythonFunction(req, res, next) {
  spawn("python", ["webscraper.py"]);
  setTimeout(next, 400);
}

module.exports = pythonFunction;
