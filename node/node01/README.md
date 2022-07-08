# Node.js - Clase 1

---

## :star:  ARQUITECTURA CLIENTE - SERVIDOR

Dentro del contexto de un desarrollo web, esta arquitectura hace refernecia a un modelo de comunicación que vincula a varios dispositivos con un servidor a través de internet

- **CLIENTE**: Son los dispositivos que hacen peticiones de servicios o recursos a un servidor. Pueden ser: una computadora, un teléfono celular, una tablet, una consola de video juegos o cualquier implemento que tenga la capacidad de conectarse a una red. Dentro de Internet, el cliente suele acceder a estos servicios y recursos a través de un navegador web.

- **SERVIDOR**: Es el equipo que brinda los servicios y recursos a los que acceden los clientes. Es importante tener en cuenta que la misma computadora puede ser el cliente y el servidor al mismo tiempo. De hecho es lo más normal en el entorno de desarrollo de un sitio o aplicación web.


### FLUJO CLIENTE - SERVIDOR

- **REQUEST** : Es la solicitud que hacemos a través del navegador (el cliente) a un servidor, en este ejemplo, la página de Facebook que está almacenada
en sus servidores.

- **RESPONSE**: El servidor recibe nuestra solicitud, la procesa, y envía como resultado una respuesta al cliente (navegador), en este ejemplo devolverá la
página principal del sitio.

---

## :star: NODE.JS

Existe la posibilidad de correr JS del lado del servidor permitiendo programar en un mismo lenguaje tanto en front como en back, logrando que el proceso de desarrollo sea mas fluido


### ¿Qué es Nodejs?

- Es un entorno de ejecución de Codigo de JavaScript.

- Basado en el motor de Javascript V8 desarrollado por Google.

- El uso mas comun es la creacion de servicos para el back-end como:

API(Aplication Programing Interface).

Crear aplicacions del lado del servidor, altamente escalables, con uso intensive de datos en tiempo rea


### Descarga de Nodejs

Descargarlo desde [https://nodejs.org/es/download/](https://nodejs.org/es/download/)

Conjuntamente con Node.js se va a instalar el gestor de paquetes NPM, que veremos con mas detalle mas adelante


1- Para testear NodeJS, crear una carpeta llamada Node.

2- Abrir el editor de texto Visual Studio Code. Ir a Archivo/Abrir carpeta y seleccionar la carpeta que creamos recién.

3- Crear un archivo llamado prueba.js y escribir el siguiente script:
```console.log('Probando Node!');```

4- Abrir una terminal. Para eso, ir a Terminal/Nueva terminal, o ejecutar el atajo ```ctrl + shift + ñ```.

5- En la terminal escribir el siguiente comando: ```node prueba.js```

6- Si todo anduvo bien, veremos en la terminal el mensaje: **Probando Node!**.

---

## :star: NPM (NODE PACKAGE MANAGER)

NPM es el gestor de paquetes de Node y nos permite descargar e instalar librerías para incorporar a nuestro proyecto

### QUE SON LAS LIBRERÍAS

Son bloques de código que nos permiten abordar soluciones específicas dentro de la aplicación que estemos desarrollando.

En un entorno de desarrollo web, hay situaciones que se repiten una y otra vez. Las librerías llegan para facilitar esas problemáticas que sabemos que nos vamos a cruzar mientras desarrollamos nuestra aplicación. Manejar la subida de archivos, validar un formulario, o restringir el acceso a un usuario que no está registrado son algunas de ellas.



Cuando se instala Node, se genera un comando para usar en la terminal.

Lo primero que hay que hacer para usar npm es inicializar nuestro proyecto Node usando el comando . 

Este comando creará un archivo package.json, dentro del cual se se irán guardando todas las configuraciones del proyecto. 

Por el momento, la característica que más nos interesa de este archivo es la propiedad  "main". La misma hace referencia al entry point, es decir, el punto de entrada a nuestra aplicación, en donde pondremos el nombre de nuestro archivo principal, que, por convención solemos llamar  app.js.


### Instalando librerias

Para instalar una librería usamos el siguiente comando: 

```npm install PACKAGE --save ``` en donde reemplazaremos la palabra por el nombre de la librería que queramos instalar.

El comando guarda dentro del package.json, en la propiedad  "dependencies", una referencia a la librería que estamos instalando.

Dentro de la carpeta **Node Modules** se irán creando las carpetas de las librerías que instalemos.

Cada una contendrá los archivos necesarios para poder trabajar con esa librería dentro del proyecto.


---

## :star: MODULOS

### ¿Qué es un módulo ?

Un módulo no es nada más que una unidad de código organizado en archivos o directorios, la cual puede ser exportada con facilidad para poder reutilizarse en otras partes de la aplicación.


### Tipos de modulos

- Modulos nativos

- Modulos creados

- Modulos de terceros
---

## Modulohttp

## EXPRESS

## Server con Express

## Contenido Static

---
