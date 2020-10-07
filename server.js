const express = require("express");
const bodyParse = require("./src/config/bodyParse");
const routes = require("./src/network/routes");
require("dotenv").config();

//instanciar el servidor
const app = express();
//configuramos
bodyParse(app);
//configura rutas
routes(app);
//configuramos el puerto
app.listen(process.env.PORT || 3000)