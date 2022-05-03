# :book: Modulo 7 - Base de Datos

---

## :star: Unidad 2 - NODE

---
---

## :star: NODE.js

El entorno de destino principal para Knex es Node.js, deberá instalar la biblioteca knex y luego instalar la biblioteca de base de datos adecuada: pg para PostgreSQL, CockroachDB y Amazon Redshift, pg-native para PostgreSQL con enlaces libpq nativos de C++ (requiere PostgresSQL instalado para vincular), mysql para MySQL o MariaDB, sqlite3 para SQLite3 o tedioso para MSSQL.

```
$ npm install knex --save
```

 

Luego agregar uno de los siguientes comandos (agregando un –save al final):

```
$ npm install pg
$ npm install pg-native
$ npm install @vscode/sqlite3 # required for sqlite
$ npm install better-sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install tedious
```

---

## Navegador

Knex se puede compilar con una herramienta de compilación de JavaScript, como browserify o webpack. De hecho, esta documentación utiliza una compilación de paquete web que incluye knex. Vea la fuente en esta página para ver la compilación del navegador en acción (la variable knex global). 

### Inicializando la biblioteca 

El módulo knex es en sí mismo una función que toma un objeto de configuración para Knex, aceptando algunos parámetros. El parámetro de cliente es obligatorio y determina qué adaptador de cliente se usará con la biblioteca.

```
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'tu usuario de base de datos',
    password : 'tu contraseña de base de datos',
    database : 'myapp_test'
  }
});
```

Las opciones de conexión se pasan directamente al cliente de la base de datos correspondiente para crear la conexión y pueden ser un objeto, una cadena de conexión o una función que devuelve un objeto.

---

## Implementación

```
// Crear una tabla
  await knex.schema
    .createTable('usuario', table => {
      table.increments('id'); //id con incremento
      table.string('nombre_usuario'); //cadena
    })
    // ...y otra
    .createTable('cuentas', table => {
      table.increments('id');
      table.string('nombre_cuenta');
      table
        .integer('id_usuario')
        .unsigned()
        .references('usuarios.id');
    })

  // Luego consultar la tabla para insertar un usuario...
  const filasInsertadas = await knex('usuarios').insert({ nombre_usuario: 'Tim' })

  // ...y utilizando el id de inserción, insertar en la otra tabla:
  await knex('accounts').insert({ account_name: 'knex', user_id: insertedRows[0] })

 
  // Consultar ambas filas:
  const filasSeleccionadas = await knex('usuarios')
    .join('cuentas', 'usuarios.id', 'cuentas.id_usuario')
    .select('usuarios.nombre_usuario as usuario', 'cuentas.nombre_cuenta as cuenta')

 
  // mapeo de resultados:
  const filasEnriquecidas = filasSeleccionadas.map(row => ({ ...row, active: true }))
 

  // Por último, declarar un catch para capturar un posible error:
} catch(e) {
  console.error(e);
};
```

---
---

## :star: Operaciones CRUD

En informática, CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar" (del original en inglés: Create, Read, Update and Delete), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software.

En algunos lugares, se utilizan las siglas ABM para lo mismo ("Alta, Baja y Modificación"), obviando la operación de "obtener"; el acrónimo ABC para "Altas, Bajas y Cambios"; ABML siendo la última letra (L) de "listar, listado o lectura"; ABMC siendo la 'C' de "Consulta"; o bien CLAB que sería la traducción literal del acrónimo ("Crear, Leer, Actualizar y Borrar") también se llega a usar el acrónimo ABCC ("Altas, Bajas, Cambios y Consultas").

 

### CRUD CON KNEX

Ayudante para funciones CRUD en ```Knex.js```

Instalación

```
$ npm i --save knex-crud
```


---
 
#### Utilización

```JavaScript
const knexCrud = require('knex-crud')

const mascotasCrud = new knexCrud('mascotas', {
  formatter: mascota => ({
    esGato: mascota.familia === 'gatos'
  })
})

mascotasCrud.bind(knex)

const felix = await mascotasCrud.insertOne({
  nombre: 'Felix',
  familia: 'gatos'
})

console.log(felix)

// {
//    id: 1,
//    nombre: 'Felix',
//    familia: 'cats',
//    esGato: true
// }
```


### Métodos

```
NOMBRE                  DESCRIPCIÓN

constructor             Inicializa una nueva instancia para la tabla. Pueden pasarse también opciones adicionales.
(tabla, opciones)

bind                    Unir a una nueva instancia knex. Si no está ligado, todos los otros métodos arrojarán error.
(knex)

checkKnexBinding ()      Utilizado para chequear una union existente. Si no está unido, arrojará un error.

getBaseQuery ()          Utilizado para generar la base de todas las consultas. Por default es knex(nombreDeTabla).

list (filtros)           Devolver una lista de registros, opcionalmente filtrados por un arreglo de funciones filtradoras (ej: async query => query.where(...)).

paginatedList             Devolver una lista paginada de registros, opcionalmente filtrada y limitada. Ver lista(...).
(filtros, límete, offset)

getOneBy                 Obtener el primer registro que coincide con el valor dado en columna (${pk} -clave primaria- por defecto).
(valor, columna)

insertOne               Insertar un nuevo registro con los datos proporcionados y devolverlo.
(datos)

updateOneBy             Actualizar datos del primer registro coincidente por valor en columna (${pk} por defecto).
(datos, value, column)

deleteOneBy             Borrar el primer registro coincidente por valor en columna (${pk} por defecto).
(datos, valor, columna)
```


 
### Opciones

```
NOMBRE          DESCRIPCIÓN
-------         ------------
pk              Definir la clave primaria para la tabla. Por defecto es: id
defaultOrder    Definir el orden por defecto de la consulta: Default ${pk}:asc
formatter       Definir una función para formatear cada entrada en una respuesta de consulta.
```

###  Test

```$ npm test```

 

Material adicional: [Cheat sheet de Knex.](https://devhints.io/knex)



---
---
