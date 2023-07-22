//1 importar express
import express from "express";
//3 importar hbs
import hbs from "hbs";
import { fileURLToPath } from "url";
import { dirname } from "path";

//1 variable express para el servicio
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//4
app.set("view engine", "hbs");
app.use(express.static("public"));
app.use(express.json());
hbs.registerPartials(__dirname + "/views/partials");


//2
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/productos", (req, res) => {
  res.render("productos", { productos });
});

app.get("/contacto", (req, res) => {
  res.render("contacto");
});

//1 levantamos el servidor
app.listen(3000, () => {
  console.log("Servicio corriendo en puerto 3000");
});

let productos = [
  {
    nombre: "Aleman",
    descripcion: "Tomate, Chucrut y Mayo",
    img: "/image/aleman.png",
    Precio: "$3.100",
  },
  {
    nombre: "Brasileño",
    descripcion: "Queso y Palta",
    img: "/image/brasileno.png",
    Precio: "$3.350",
  },
  {
    nombre: "Chacarero",
    descripcion: "Tomate, Poroto Verde, Ají Verde y mayo",
    img: "/image/chacarero.png",
    Precio: "$3.050",
  },
  {
    nombre: "Dinamico",
    descripcion: "Tomate, Palta, Americana, Salsa Verde y Mayo",
    img: "/image/dinamico.png",
    Precio: "$3.150",
  },
  {
    nombre: "Italiano",
    descripcion: "Palta, Tomate y Mayo",
    img: "/image/italiano.png",
    Precio: "$3.250",
  },
  {
    nombre: "Luco",
    descripcion: "Queso",
    img: "/image/luco.png",
    Precio: "$3.050",
  },
  {
    nombre: "Rodeo",
    descripcion: "Queso a la Plancha y Tocino con Salsa BBQ",
    img: "image/rodeo.png",
    Precio: "$3.950",
  },
];
