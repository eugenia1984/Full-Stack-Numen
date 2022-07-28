# Node.js - Clase 5 : liberias

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

[https://openbase.com/js/bcryptjs/documentation](https://openbase.com/js/bcryptjs/documentation)

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

## :star: axios

[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

Nos permite pegarle a URLs, tanto para rutas externas a nuestro BackEnd como las propias de nuestro BackEnd.

->> para el proyecto final hay darle a una ruta publica y que tenga una conexion segura



---

## :star: TypeScript

Los archivos son **.ts**

Type por tipado, es fuertemente tipado.

Vamos a tener un archivo con muchos ejemplos.


### variables

```TypeScript
let perrito: String = "Pipi";
let edad: Number = 22;
let verdad: boolean = true;
let algo: any = "hola" // para cuaquier tipo de dato
let nada: void; // no se puede rellenar, no se le puede dar valor
let sinnada: undefined; 
let perritos: string[]= ["Perrito1", "Perrito2"];
```


### funciones

```TypeScript
let hacerCuenta =():number => {
  return 1+1;
}

let darSaludo =():string => {
  return "hola";
}

// como es una funcion sin return es de tipo void
let noDevuelveNada =():void => {
  console.log("hola");
}
```

Cuando tengo parametros

```TypeScript
let returnUnaSum=(num1:number, num2:number):number=>{
  return num1 + num2;
}
```
---

