const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev")); //Monitorear las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//función middleware para archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Especificamos el motor de plantillas
app.set("view engine", "pug");

//requerimos el archivos routes donde
//estan configuradas las rutas
app.use(require("./routes/routes")); //GET localhost:4001/

app.listen(4001, () => {
  console.log("Servere on port 4001");
});
