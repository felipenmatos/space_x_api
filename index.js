const express = require("express");
const roteador = require("./roteador/roteador");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: port }));
app.use(express.json());
app.use(roteador);

app.listen(8000);
