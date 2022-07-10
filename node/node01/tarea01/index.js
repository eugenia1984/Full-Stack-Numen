/*
-PUNTO 1 : Generar un backend con express-generator
-PUNTO 2: Hacer una ruta con query que me devuelva un texto presentadose por su nombre y diciendo de donde es
-PUNTO 3 : Hacer una ruta que divida dos números.Usar método Number ejemplo ( let num1= Number(req.params.num1) , esto hará que el parametro pase de formato string a number
*/

// PUNTO 1
const express = require("express"); // requiero el modulo express
const app = express(); // para almacenar la ejecucion de express
const port = 3000; // el puerto de la conexion para el local host

app.get("/", (req, res) => {
  res.send(`<h1>Bienvenidos a mi primer servidor !</h1>`);
});

// PUNTO 2
// pasando con parametros
// probarlo con: http://localhost:3000/alumno/maria/origen/bue
app.get("/alumno/:nombre/origen/:lugar", (req, res) => {
  res.send(`<p>Hola, soy ${req.params.nombre} de ${req.params.lugar}.</p>`);
});
// con parametro y queries
// probarlo con: http://localhost:3000/alumno/maria?origen=bue
app.get("/alumno/:nombre", (req, res) => {
  res.send(`<p>Hola, soy ${req.params.nombre} de ${req.query.origen}.</p>`);
});
// con queries
// probarlo con: http://localhost:3000/alumno?nombre=maria&&origen=bue
app.get("/alumno/", (req, res) => {
  res.send(`<p>Hola, soy ${req.query.nombre} de ${req.query.origen}.</p>`);
});

// PUNTO 
// probarlo con: http://localhost:3000/dividendo/10/divisor/0
// probarlo con: http://localhost:3000/dividendo/10/divisor/2
app.get("/dividendo/:numero1/divisor/:numero2", (req, res) => {
  //Si el divisor es 0 no podemos hacer la division
  if (req.params.numero2 == "0") {
    res.send(`<p>No podemos dividir por cero.</p>`)
  } else {
    let dividendo = Number(req.params.numero1);
    let divisor = Number(req.params.numero2);
    division = dividendo / divisor;
    res.send(`<p>La división de ${num1} con ${num2} es: ${division}.</p>`)
  }
  
});

// levanto el puerto
app.listen(port, () => {
  console.log(`Primer server escuchando desde el puerto ${port}`);
});
