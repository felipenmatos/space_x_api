const dados = require("../data");

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

function pagesData(req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  if (dados.length === 0) {
    return res.status(400).send({
      message: "Database connection error",
    });
  }

  setTimeout(() => {
    res.json(dados);
  }, 2000);
}

module.exports = { consultData, message, pagesData };
