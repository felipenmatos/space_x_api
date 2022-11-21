const express = require("express");

const { consultData, message } = require("../controlador/controlador");

const roteador = express();

roteador.get("/", message);
roteador.get("/launches", consultData);

module.exports = roteador;
