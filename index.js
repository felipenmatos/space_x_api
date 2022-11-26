const express = require("express");
const cors = require("cors");
const roteador = require("./roteador/roteador");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: port }));
app.use(express.json());
app.use(roteador);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("./swagger.json")));

app.listen(port);
