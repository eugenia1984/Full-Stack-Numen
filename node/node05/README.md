# Node.js - Clase 5

---

## :star: Nodemon

## Correr el proyecto usando Scripts

En el **package.json** podemos agregar scrips para ir corriendo el proyecto

```
"scripts": {
  "dev": "node ./bin/www",
  "start": "nodemon ./bin/ww"
}
```

[https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

- Para que se refresque automaticamente el servidor, sin necesidad de pararlo, actualizarlo y volver a correrlo. Hay que tener en cuenta que lo que tenga en **.gitignore** no me lo va a leer (por si hago un cambio ahi)

- Para instalarlo de forma global: ```npm install -g nodemon ``` es mejor hacerlo desde GitBash (para no tener problemas del permisos de admin)

- Para instalarlo de en el proyecto: ```npm install nodemon ```

- ```"start": "nodemon ./bin/ww"``` para agregarlo en el script de package.json

---

## :star: Bcryptjs

Sirve para el hasheo, para encriptar


Se lo llama en el controlador

```JavaScript
const bcrypt = require('bcryptjs');

const prueba = (req, res) => {
  let contrasenia = "123456789";
  let salt = bcrypst.getSaltSync(10); // para generar el salto
  let hash = bcrypt.hashSync(contrasenia, salt);
  let comparacion1 = bcrypt.compareSync("123456789", hash);
  ler comparacion2 = bcrypt.compareSync("muzzaConQuesoDoble", hash);
  res.json({
    contr: contraseña,
    contr1: hash,
    comparacion: comparacion1,
    otraComparacion: comparacion2
      });
}
```

---
