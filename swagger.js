const swaggerAutogen = require("swagger-autogen");

swaggerAutogen()("./swagger.json", ["./roteador/roteador.js"]);
