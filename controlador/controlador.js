const dados = require("../data.js");

function message(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    message: "Fullstack Challenge 🏅 - Space X API",
  });
}

function consultData(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(dados);
}

module.exports = { consultData, message };
