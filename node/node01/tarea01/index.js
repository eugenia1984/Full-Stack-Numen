
/*
-Generar un backend con express-generator
-Hacer una ruta con query que me devuelva un texto presentadose por su nombre y diciendo de donde es
-Hacer una ruta que divida dos números
-Usar método Number ejemplo ( let num1= Number(req.params.num1) , esto hará que el parametro pase de formato string a number
*/
const express = require('express');  // requiero el modulo express
const app = express();  // para almacenar la ejecucion de express
const port = 3000; // el puerto de la conexion para el local host

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi primer servidor')  
 })

// Hacer una ruta con query que me devuelva un texto presentadose por su nombre y diciendo de donde es
// para utilizar la response, pasando parametos en la URN con el metodo send()
// probarlo con: http://localhost:3000/nombre/maria?lugar/buenos_aires
app.get('/alumno/:nombre/origen/:lugar', (req, res) => {
  res.send(`Hola, soy ${req.params.nombre} de ${req.params.lugar}`)
})

// levanto el puerto
app.listen(port, () => {
  console.log(`Primer server escuchando desde el puerto ${port}`)
 })