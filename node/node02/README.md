# Node.js - Clase 2

---

## :star: REST SERVER

REST es un tipo de arquitectura de servicios que proporciona estándares entre sistemas informáticos para establecer como se van a comunicar entre esi

---

## :star:  REST SERVER API

Cuando se envía una solicitud del cliente a través de una API de RESTful, esta transfiere una representación del estado del recurso requerido a quien lo haya solicitado o al extremo. La información, o representación, se entrega por medio de HTTP en uno de estos formatos: JSON (JavaScript Object Notation), HTML, XLT, Python, PHP o texto sin formato.

Asimismo, es necesario tener en cuenta otros aspectos. Los encabezados y los parámetros también son importantes en los métodos HTTP de una solicitud HTTP de la API de RESTful, ya que contienen información de identificación importante con respecto a los metadatos, la autorización, el identificador uniforme de recursos (URI), el almacenamiento en caché, las cookies y otros elementos de la solicitud. Hay encabezados de solicitud y de respuesta, pero cada uno tiene sus propios códigos de estado e información de conexión HTTP.

---

### RECURSOS UNIFORMES

Desde el lado del servidor, una **arquitectura REST** expone a los clientes a una interfaz uniforme.

Todos los recursos del servidor tienen un nombre en forma de URL o hipervínculo.

Toda la info se intercambia a través del protocolo HTTP

A esas URL les llamamos **endpoints**, es decir, el servidor expone a los clientes un conjunto de endpoints para que este pueda acceder. 

A esa interfaz uniforme, o sea, al conjunto de endpoints, la llamamos **API**

Un **endpoint** está ligado al recurso que solicitamos, dicho recurso debe tner solamente un id

---
##  :star: API


### ¿ Qué es?

Una API es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones.Suele considerarse como el contrato entre el proveedor de información y el usuario, donde se establece el contenido que se necesita del consumidor (la llamada) y el que requiere el productor (la respuesta)

En otras palabras, si desea interactuar con una computadora o un sistema para obtener datos o ejecutar una función, las API le permiten comunicar lo que desea al sistema, para que este comprenda la solicitud y la cumpla.  

#### PARA QUE UNA API SE CONSIDERE DE RESTFUL, DEBE CUMPLIR LOS SIGUIENTES CRITERIOS:

- Arquitectura cliente-servidor compuesta de clientes, servidores y recursos, con la gestión de solicitudes a través de **HTTP**.

- **Comunicación entre el cliente y el servidor** sin estado, lo cual implica que la información del cliente no se almacena entre las solicitudes de GET y que cada una de ellas es independiente y está desconectada del resto.
Datos que pueden almacenarse en caché y **optimizan las interacciones** entre el cliente y el servidor.

- Una **interfaz uniforme** entre los elementos, para que la información se transfiera de forma estandarizada. 

- Un **sistema en capas** que organiza en jerarquías invisibles para el cliente cada uno de los servidores que participan en la recuperación de la información solicitada.

- **Código disponible** según se solicite (opcional), es decir, la capacidad de enviar códigos ejecutables del servidor al cliente cuando se requiera, lo cual amplía las funciones del cliente. 

---

```
CLIENT              HTTP              SERVER
sends    <-JSON->  METHODS   <-HTTP->  sends
 a                                       a
REQUEST                              RESPONSE
```

HTTP METHODS: 

**GET** permite acceder a todos los datos del recurso

**PORT** permite crear un nuevo recurso

**PUT** reemplaza un recurso ya existente

**PATCH** actualiza o modifica parcialmente a un recurso ya existente

**DELETE** permite indicar al servidor que borre un recurso

---


### Códigos de status


| CODE  | NAME | NOTES |
| ----- | ---- | ----- |
| 100 | CONTINUE | - |
| 101 | SWITCHING PROTOCOLS | - |


SUCCESSFUL
| CODE  | NAME | NOTES |
| ----- | ---- | ----- |
| 200 | OK | - |
| 201 | CREATED | - |
| 202 | ACCEPTED | - |
| 203 | NON-AUTHORITATIVE INFORMATION | - |
| 204 | NO CONTENT | - |
| 205 | RESET CONTENT | - |
| 206 | PARTIAL CONTENT | - |

REDIRECTION
| CODE  | NAME | NOTES |
| ----- | ---- | ----- |
| 300 | MULTIPLE CHOICES | - |
| 301 | MOVED PERMANTLY | UPDATE YOUR URL, THIS HAS MOVED FOR GOOD |
| 302 | FOUND | - |
| 303 | SEE OTHER | - |
| 304 | NOT MODIFIED | - |
| 305 | USE PROXY | - |
| 306 | UNUSED | - |
| 307 | TEMPORARY REDIRECT | THIS IS TEMPORARY MOVED, DON´T UPDATE YOU BOOKMARKS |


CLIENT ERROR
| CODE  | NAME | NOTES |
| ----- | ---- | ----- |
| 400 | BAD REQUEST | SERVER DON´T UNDERSTAND THE URL YOU GAVE IT |
| 401 | UNAUTHORIZED | MUST BE AUTHENTICATED |
| 402 | PAYMENT REQUIRED | NOT USED REALLY |
| 403 | FORBIDDEN | SERVER REFUSES TO GIVE YOU A FILE, AUTHENTICTATION WON´T HELP |
| 404 | NOT FOUND | A FILE DOESN`T EXIST AT THAT ADDRESS |
| 405 | MTHOD NOT ALLOWED | - |
| 406 | NOT ACEPTABLE | - |
| 407 | PROXY AUTHENTICATION REQUIRED | - |
| 408 | REQUEST TIMEOUT | BROWSER TOOK TOO LONG TO REQUEST SOMETHING |
| 409 | CONFLICT | - |
| 410 | GONE | - |
| 411 | LENGHT REQUIRED | - |
| 412 | PRECONDTION DAILED | - |
| 413 | REQUEST ENTITY TOO LARGE | - |
| 415 | UNSUPPORTED MEDIA TYPE | - |
| 416 | REQUEST RANGE NOT SATISFIABLE | - |
| 147 | EXPECTATION FAILED | - |

SERVER ERROR
| CODE  | NAME | NOTES |
| ----- | ---- | ----- |
| 500 | INTERNAL SERVER ERROR | SOMETHING ON THE SERVER DIDN´T WORK RIGHT |
| 501 | NOT IMPLEMENTED | - |
| 502 | BAD GATEWAY | - |
| 503 | SERVICE UNAVAILABLE | TOO BUSY TO RESPOND TO A CLIENT | - |
| 504 | GATEWAY TIMEOUT | - |
| 505 | HTTP VERSION NOT SUPPORTED | - |


### ¿Qué nos devuelve una URL ?

Cuando accedemos a una URL de nuestra API, esta nos suele devolver datos en formato JSON
Algunos de esos datos son:

- Una clave link que apunta al mismo endpoint al que acabamos de acceder

- Informacion generica (ej. Cantidad de datos)

- Datos basicos de la peticion y otros endpoints para acceder a mas detalles

---

## MVC

Es  un patrón de diseño. Sus siglas corresponden a Modelo VIsta Controlador 


#### ¿Qué es un patrón de diseño?

Dentro del mundo de la programación existen lo que se conocen como patrones de diseño. Los mismos proponen un esquema de trabajo, una serie de reglas que permiten simplificar el código y encarar mejor la solución de diferentes situaciones a lo largo del desarrollo. Uno de los patrones más populares es MVC. Su objetivo es crear aplicaciones modulares, dividiendo la columna vertebral del proyecto en tres componentes principales, en donde cada uno de ellos cumple con un rol determinado. Estos componentes son: los modelos, las vistas y los controladores.

**VISTAS**: Conforman la interfaz gráfica de la aplicación y contienen todos los elementos que son visibles al usuario. A través de ellas el usuario interactúa enviando y solicitando información al servidor. Su responsabilidad es definir la apariencia de los datos y mostrarlos en pantalla. Las vistas no se comunican de forma directa con los modelos.

**MODELOS**: conforman y contienen la lógica de la aplicación. Sus responsabilidades son conectarse con la base de
datos Los modelos no se comunican de forma directa con las vistas.

**CONTROLADOR**: Conforman la capa intermedia entre las vistas y los modelos. Su responsabilidad es procesar los datos que recibe de los modelos y elegir la vista correspondiente en función de aquellos datos. Tienen relación directa con las vistas y con los modelos y es un componente fundamental dentro del flujo del patrón. Administra lo que se conoce como la lógica de negocio.


---

## FLUJO DEL SERVER

**01** -> **app.js**

-> Empezamos por el archivo -> Es el archivo principal donde levanta el server.

-> Nota: en este archivo no hay mucho codigo, solo la instancia del server y el metodo listen


app.js
```JavaScript
require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();
```

**02** : **server.js**:

-> Nuestra clase server -> En una carpeta models creamos el archivo server.js que contendra nuestro molde del server . tiene la siguiente estructura: constructor | middlewares | routes | listen.

server.js
```javaScript
const express = require('express');
const cars = require('cars');

class Server {

 constructor() {
  this.app = express();
  this.port = process.env.PORT;
  this.usuariosPath = '/api/usuarios';
  
  //middlewares
  this.middlewares();
  
  //Rutas de mi aplicacion
  this.routes();
 }
 
 middleware() {
  //CORS
  this.app.use( cors() );
  
  //Lectura y parseo del body
  this.app( express.json() );
  
  //Directorio publico
  this.app.use( express.static('public'));
 }
 
 routes() {
 this.app.use( this.usuariosPath, require('../routes/usuarios'))};
 }
 
 listen() {
  this.app.listen( this.port, () => {
   console.log(`servidor corriendo en el puerto ${this.port}`)
  });
 }
}

module.exports = Server;
```

**03** : **routes**:

-> Carpeta con nuestras rutas -> En esta carpeta pondremos todas las rutas de nuestro server: get | post | put | delete

```JavaScript
const { Router } = require('express');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');
        
const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post( '/', usuariosPost );

router.delete( '/', usuariosDelete );

router.patch( '', usuariosPatch );

module.exports = router;
```


**04**: **controllers**

-> EN UNA CARPETA TENDREMOS TODOS LOS CONTROLLERS ->  Cada ruta esta asociada con un controlador, en éste se aloja toda la logica de dicha ruta

controllers.j
```JavaScript
const { response, request } = require('express');

const usuariosGet = ( req = request , res = response) => {
 const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
 
 res.json({
  msg: 'get API - controlador',
  qm
  nombre,
  apijey,
  page,
  limit
 }) ;
}

const usuariosPost = ( req, res = response ) => {
 const { nombre, edad } = req.body;
 
 res.json({
  msg: 'post API - usuariosPost',
  nombre,
  edad
 });
}

const usuariosPut = (req, res = response) => {
 const { id } = req.params;
 
 res.json({
 msg: 'put API - usuariosPut,
 id
 });
}

const usuariosDelete = (req, res = response) => {
 res.json({
  msg: 'delete API - usuariosDelete'
 });
}

module.exports = {
 usuariosGet,
 usuariosPost,
 usuariosPut,
 usuariosDelete
}
```

---

##  EXPRESS BASADO EN CLASES

Servidor normal de forma FUNCIONAL:


```JavaScript
const express = requiere('express');

const app = express();
const PORT = 8080;

app.get('/'), (req, res) => {
 res.send('Pagina de inicio')
}

app.get('/primer-server', (req, res) => {
 res.send('Nuestro primer server con express')
})

app.listen(POSRT, () => {
 consolelog(`Servidor corriendo en el puerto ${PORT}`)
})
```

Servidor express basado en Clases

```JavaScript
const express = require('express');

class Server{

 constructor() {
  this.app = express();
  this.port = process.env.PORT;
  
  this.routers();
 }
 
 routers() {
  this.app.get('/', (req, res) => {
   res.send('Hola mundo')
  })
 }
 
 listen() {
  this.app.listen( this.port, () => {
    console.log(`Servidor corriendo en puerto ${this.port}`)
  })
 }
 
}

```


app.js

```JavaScript
require('dotenv').config();

const Server = require('/models/Server');

const server = new Server();

server.listen();

```

---
---

## LINEA DEL TIEMPO

- PASO 1: creacion de un server con HTTP

- PASO 2: creacion de un server con Express

- PASO 3: Server basico en clases

- PASO 4: rutas GET-POST-PUT-DELETE

- PASO 5: conectar nuestro CRUD con mongoDB, mongoose y poner logica en los conrtrollers

- PASO 6: login, tokens, JWT

- PASO 7: google sign in

- PASO 8: agregar productos y categorias

---
