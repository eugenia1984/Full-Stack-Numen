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

[https://www.npmjs.com/package/nodemon(https://www.npmjs.com/package/nodemon)

- Para que se refresque automaticamente el servidor, sin necesidad de pararlo, actualizarlo y volver a correrlo. Hay que tener en cuenta que lo que tenga en **.gitignore** no me lo va a leer (por si hago un cambio ahi)

- Para instalarlo: ```npm install -g nodemon ``` es mejor hacerlo desde GitBash (para no tener problemas del permisos de admin)


---
