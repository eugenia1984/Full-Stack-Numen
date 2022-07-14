# Node.js - Clase 3 * Base de Datos

---

Lo que vinimos haciendo hasta ahora son RUTAS, necesitamos la conexión a la BASE DE DATOS para poder persistir la información.

---

## ¿ Qué es MONGODB?

Es una BASE DE DATOS.

Es orientada a DOCUMENTOS. Esto quiere decir que en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en un JSON.

Una de las diferencias más importantes con respecto a las bases de datos relacionales es que no es necesario seguir un esquema.

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

|-------------------------------|
|                               |
| Database1         Database2   |
| -------------    ------------ |
| |            |   |          | |
| |Coleccion1  |   |          | |
```
----

## Diferencias

- Aqui comienzan las diferencias importantes entre una base de datos SQL y una NoSQL. El concepto de fila y de documentos son bastantes diferentes.

- Una fila está compuesta de columnas y siempre son las mismas para todas ellas.

- En cambio un documento está compuesto por claves y valores y cada documento puede tener varaiciones importantes.

---

## Ejemplo

Imaginemos que tenemos un listado de **Persona** con **nombre**, **apellido** y **edad**.

En una base de datos relacional dispondremos de la sigueinte tabla:

| nombre | apellido | edad |
| ------ | -------- | -----|

Ahora el mismo concepto de Persona(nombre, apellido, edad) en una base de datos MongoDB cada persona sería un objeto y cada propiedad no es un requisito obligatorio, lo puede tener o no, por ejemplo una persona ppuede no tener la clase edad, y al ver esa persona edad ni va a estar.

---