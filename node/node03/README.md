# Node.js - Clase 3 * Base de Datos

---

Lo que vinimos haciendo hasta ahora son RUTAS, necesitamos la conexión a la BASE DE DATOS para poder persistir la información.

---

## ¿ Qué es MONGODB?

Es una BASE DE DATOS.

Es orientada a DOCUMENTOS. Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en un JSON.

Una de las diferencias más importantes con respecto a las bases de datos relacionales es que no es necesario seguir un esquema. Los documentos de una misma colección, concepto similar a una tabla de una base de datos relacional, pueden tener esquemas diferentes.

[Leer más acá](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_americas_rlsamultirest_search_brand_atlas_desktop_rlsa&utm_term=download%20mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646317&gclid=CjwKCAjwj8eJBhA5EiwAg3z0mwLfWhw_GD8n_tgut4cJe894OM-QJpX4FvyHQMegUYLrRuHeY7meIBoCT0AQAvD_BwE)

---

## Características

- Alamcena datos en documentos flexibles similares a JSON, la estructura de datos puede cambiarse con el tiempo

- El modelo de documento se asigna a los objetos en el código de su aplicación para facilitar el trabajo con los datos.

- MongoDB es una base de datos distribuido en su núcleo, por lo que la alta disponibilidad, la escalabilidad horizontal y la distribución geográfica están integradas y son fáciles de usar.

- Es de uso gratuito.

---

## CONCEPTO

- Es NoSQL, es decir es una base de datos NO RELACIONAL, va creciendo y se utiliza con más frecuencia.

- El concepto NoSQL define sistemas que difieren del modelo clásico SQL. Lo más destacado de NoSQL es que no usan SQL como lenguaje principal de consulta.

- MongoDB es una base de datos orientada a documentos. No se basa en el concepto de tabla fila y registro sino que se apoya en el concepto de **Colección**, **Documento** y **Propiedad**.

---

## Arquitectura


```
Servidor MongoDB

|-------------------------------------|
|                                     |
| Database1             Database2     |
| ---------------    ---------------- |
| |              |   |              | |
| | Coleccion1   |   | Coleccion3   | |
| | -----------  |   | ------------ | |
| | |Documentos| |   | |Documentos| | |
| | -----------  |   | ------------ | |
| |              |   |              | |
| | Coleccion2   |   | Coleccion4   | |
| | -----------  |   | ------------ | |
| | |Documentos| |   | |Documentos| | |
| | -----------  |   | ------------ | |
| |--------------|   |--------------| |
|-------------------------------------|

```
----

## Diferencias

- Aqui comienzan las diferencias importantes entre una base de datos SQL y una NoSQL. El concepto de fila y de documentos son bastantes diferentes.

- Una fila está compuesta de columnas y siempre son las mismas para todas ellas.

- En cambio un documento está compuesto por claves y valores y cada documento puede tener varaiciones importantes con rsespecto al anterior dentro de una colección.

---

## Ejemplo

Imaginemos que tenemos un listado de **Persona** con **nombre**, **apellido** y **edad**.

En una base de datos relacional dispondremos de la sigueinte tabla:

| nombre | apellido | edad |
| ------ | -------- | -----|

Ahora el mismo concepto de Persona(nombre, apellido, edad) en una base de datos MongoDB cada persona sería un objeto y cada propiedad no es un requisito obligatorio, lo puede tener o no, por ejemplo una persona puede no tener la clase edad, y al ver esa persona edad ni va a estar.

---

## Ventajas y Desventajas


### Ventajas

- La escalabilidad y su carácter descentralizado hacen que soporte estructuras distribuidas.

- Permiten realizar sistemas más abiertos y flexibles debido a su fácil adaptacion de nuevas evoluciones de nuestras aplicaciones web

- No se requieren potente recursos para poder trabajar con bases de datos NoSQL.

- Optimización de las consultas en bade de datos para grandes cantidad de datos almacenados


### Desventajas

- Problemas con sentencias SQL ya que no admiten el 100% de las consultas existentes.

- Carece de algo tan fundamental como los Joins

- Falta de estandarización entre diferentes bases de datos NoSQL.

---

## Pasos para conectarnos a una bass de datos

- PASO 1: Entrar a [https://cloud.mongodb.com/v2/6220e379eac5a809ecc713f8#clusters](https://cloud.mongodb.com/v2/6220e379eac5a809ecc713f8#clusters) para crear el CLUSTER, lo ideal es buscar un servidor que proporcione en Sao Pablo (que sea free).

Primeros pasos:

* Iniciar un proyecto con express-generator

1. Crear la carpeta "controller" y migrar los cb de routes.

2. Instalar `mongoose` y `dotenv`
```
npm i mongoose
npm i dotenv
```

3. Crear archivo `.env` y colocar ruta de conección (se puede llamar como quieras. Ej: MONGO_CNN). Asignar username y password que creamos en la sección `Database Access`.

4. En `www` agregar la linea `require('dotenv').config();` para utilizar los env dentro del archivo.

5. Crear una carpeta `db` con un archivo `db.js` y generar la conección con mongoose.

6. Ejecutar la función dentro de App.js


---

## Creamos un usuario

Modelo usuario

Vamos a crear todas las propiedades de nuestro usuario

Luego realizaremos el CRUD (CREATE READ UPDATE DELETE) del usuario

### Schema

¿ Para que utilizamos los esquemas?

**Un esquema en Mongoose es una estructura JSON que contiene información acerca de las propiedades de un documento.**

En otras palabras, los esquemas sirven como guias de la estructura de los documentos. Estos son necesitados para la creación del modelo. Así que antes de utilizar los modelos de manera apropiada, es necesario definir sus esquemas.

[Para poder leer más sobre el tema](https://mongoosejs.com/docs/guide.html)

Ejemplo en codigo:

```JavaScript
const { schema, model} = require('mongoose');

const UsuariosSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre es obligatorio']
  },
  correo: {
    type: String.
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  password: {
  },
  img: {
  },
  rol: {
  },
  estado: {
  },
  google: {
  },
});
```
