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

-API(Aplication Programing Interface).

-Crear aplicacions del lado del servidor, altamente escalables, con uso intensive de datos en tiempo rea


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

- **Modulos nativos**: Son los módulos nativos de la API de Node.js. No hace falta que se instalen, ya que vienen incluidos por defecto con Node.js. Algunos ejemplos son los módulos fs o stream. Estos paquetes solo son actualizados si cambias la versión de Node.js.

- **Modulos creados** :  Son los módulos escritos por los desarrolladores y forman en su conjunto gran parte de la aplicación. Como ya has leído, se estructuran así con la finalidad de poder ser un código reutilizable.

- **Modulos de terceros** : Son, en esencia, los paquetes de terceros distribuidos a través de npm (aunque pueden provenir de otros repositorios). Estos paquetes se instalan como dependencias y, aunque aportan funcionalidad a la aplicación, no deben incluirse en el repositorio ya que no son parte de la misma.


### ¿ Cómo requerir un módulo ?

```JavaScript
let modulo = require('nombre_modulo');
modulo.propiedad;
modulo.funcionalidad();
```

- Algunos modulos: HTTP; bcrypt, express, dotenv, mongoose
 
---

## MODULO HTTP 

#### ¿Qué es una URI ?

El protocolo HTTP permite la transferencia de información en la web a través de direcciones web, técnicamente llamadas URI.

Una URI (identificador de recursos uniformes) es un bloque de texto que se escribe en la barra de direcciones de un navegador web y está compuesto por dos partes: la URL y la URN.

#### Componentes de una URI

- **URL**: Indica donde se encuenta el recurso que deseamos obtener y siempre comienza con un protocolo (http,https)

- **URN**: Es el nombre exacto del recurso uniforme. el nombre del dominio y en ocacsiones el nombre del recurso

#### Creación de un servidor con HTTP

- PASO 1 : requerir modulo HTTP

- PASO 2 : crear el server y una ruta

- PASO 3 :  elegir el puerto donde se va a escuchar el server

Esta forma de hacer servidores es vieja y obsoleta, en la actualidad para hacer servidores usamos.......

---

## EXPRESS

#### Características:

- Enrutamiento robusto

- Centrarse en el alto rendimiento

- Cobertura de prueba súper alta

- Ayudantes HTTP (redirección, almacenamiento en caché, etc.)

- Ver el sistema que admite más de 14 motores de plantilla

- Negociación de contenido

- Ejecutable para generar aplicaciones rápidamente

#### Instalar

Lo primero que hay que hacer es instalar la librería en un proyecto de Node ya inicializado, es decir, haber hecho el ```npm init``` y tener creado el archivo vpackage.json```.

```npm install express --save```

Con el comando ```--save``` estamos **guardando**, en la propiedad ```dependencies``` del archivo ```packege.json``` , una referencia a la libreria que estamos instalando. De esta manera, quien quiera clonar el proyecto, podrá instalar todas las dependencias que el mismo necesite para funcionar haciendo uso de ```npm install```.

#### Requerir

Una vez instalado Express, tendremos que **requerir** el **modulo** en nuestro entry-point ```app.js```:

```JavaScript
const express = require('express');
```

Lo que devuelve la librería es una **función** que encapsula todas las funcionalidades de Express y para poder empezar a usarlas, hace falta **ejecutar** esa función. Lo próximo, entonces, sería crear una **variable nueva** y almacenar en ella la **ejecución** de ```express``` y así poder tener tods los métodos de la librería disponible.

```JavaScript
const app = express(;
```


---

## Server con Express

- PASO 1: hacer el archivo **package.json** con ``` npm init -y```

- PASO 2: instalamos express.

- PASO 3: importamos express con el require.

- PASO 4: creamos una constante donde guardamos express

- PASO 5: hacemos la ruta que queramos y luego lo ponemos a escuchar.



---
