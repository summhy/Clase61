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
hbs.registerPartials(__dirname+"/views/partials");

//2 
app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/productos", (req, res) =>{
    res.render("productos");
});

app.get("/contacto", (req, res) =>{
    res.render("contacto");
});

//1 levantamos el servidor
app.listen(3000, ()=>{
    console.log("Servicio corriendo en puerto 3000");
});
