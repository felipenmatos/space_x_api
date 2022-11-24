const express = require("express");

const {
  consultData,
  message,
  consultStatus,
} = require("../controlador/controlador");

const roteador = express();

roteador.get("/", message);
roteador.get("/launches", consultData);
roteador.get("/launches/status", consultStatus);

module.exports = roteador;
