const express = require("express");

const {
  consultData,
  message,
  consultStatus,
  consultRocket,
} = require("../controlador/controlador");

const roteador = express();

roteador.get("/", message);
roteador.get("/launches", consultData);
roteador.get("/launches/status", consultStatus);
roteador.get("/launches?search=:textName&limit=:numberLimit", consultRocket);

module.exports = roteador;
