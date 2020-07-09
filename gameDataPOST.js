const gameData = require("./gameData.json");
const { default: Axios } = require("axios");

gameData.forEach((item) => {
  Axios.post("http://localhost:5000/addGame", {
    game: item.title,
    score: item.score,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(("error", err));
    });
});
