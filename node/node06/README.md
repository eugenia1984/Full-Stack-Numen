# Node.js - Clase 6 * 04 Agosto

---

## Session y Cookies

## :star: Session

### Que es una session en un web server?

Una session en un web server solo podra suceder a nivel navegador la misma era individual para cada usuario, la session consiste en un ambiende donde se comparte informacion de una ventada a la otra sin que se pierda dicha informacion, no importa si se recarga las rutas.

Aun asi esta informacion es de tipo volatil la misma aun estando almacenada en el navegador se puede perder en uno de estos casos:

- Se apaga el servidor 

- La session la cerramos nosotros mismos

- Cerramos el navegador 

---

- La informacion solo se podra compartir entre pestañas del navegador o entre rutas

- Pero no entre computadoras ya que no se compartiran los recursos del buscador

---

## Implementar Session en el proyecto

- Para comenzar a usar session lo vamos a instalar con el comando npm i express-session

- Hacemos una contante y requerimos express-session en la carpeta app.js 

```JavaScript
const session = require('express-session')
```

- Despues de eso, en la carpeta app.js haremos la configuracion necesaria para que las sessiones funcionen, colocaremos un secret compuesto por un string y los campos que vemos en pantalla como sale en el ejemplo

```JavaSCript
app.use(session({
    secret: "shh esto es una contraseña",
    resave: true,
    saveUninitialized: true
}))
```

---

## :star: Que son las Cookies?

A diferencia de las sessiones, las cookies les podemos configurar un tiempo de vida.
Es decir que una cookie desaparecera cuando llegue a su tiempo limite y no cuando el usuario cierre el navegador 

Tenemos que tener en cuanta que cuando manejamos cookies tenemos que estar pendientes que tiene poco espacio para guardar informacion en el navegador,
entonces tenemos que priorisar algunos datos ante otros 

### Como instalar Cookies?

---
