const express = require("express");

const {
  consultData,
  message,
  pagesData,
} = require("../controlador/controlador");

const roteador = express();

roteador.get("/", message);
roteador.get("/launches", consultData);
roteador.get("/launches?limit=4&offset=0", pagesData);

module.exports = roteador;
