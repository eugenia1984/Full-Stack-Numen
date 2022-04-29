# :book: Módulo 2 |  HTML, CSS, Bootstrap SASS y GIT

## :star: Unidad 1: HTML

Temas:

- Introducción al lenguaje

- Sintaxis

- Estructura del documento

- Etiquetas semánticas, estructurales y funcionales

- Atributos

- Rutas relativas y absolutas

- Vinculación de recursos

- Buenas prácticas.

---
---

## :star: Renderización de HMTL

### ¿Cómo se renderiza el HTML?
 

El renderizado de un documento HTML es el proceso que realiza el motor de render de los navegadores Web.

Antes de explicarte cómo funciona este proceso en el navegador, debemos saber:

 

### ¿Qué es el DOM? y ¿Qué es el DOCTYPE?

Entonces ¿Qué es el DOM?

Sus siglas se refieren a Document Object Model, que traduce, Modelo de Objetos del Documento.

El DOM es la representación de los elementos HTML en el navegador que tiene características y funcionalidades propias de HTML5 para cada etiqueta. Su estructura es tipo árbol y cada uno de los elementos representa un nodo.

A través del DOM y el conjunto de funciones que provienen de HTML5, podemos manipular una página Web a nuestro gusto.

 
Siempre que vamos a crear un documento HTML debemos saber que existen un conjunto de etiquetas obligatorias para la creación de una página Web.

 

DOCTYPE, es la primera etiqueta obligatoria que da inicio a un documento HTML indicando al navegador la versión HTML que vamos a utilizar para la creación de nuestra página Web.

Esta etiqueta se utiliza luego de la aparición de la versión 2.0 como un recurso para que el motor de render identifique el tipo de versión que debe capturar durante el proceso.

DOCTYPE ha evolucionado en la forma como se declara en cada versión. Veamos:

 

HTML5: ```<! DOCTYPE html>```

 

HTML4: ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd"> ```

 

HTML3: ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN"> ```

 

HTML2: ```<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN"> ```

 

Recuerda que la versión de HTML que vamos a usar en este curso es HTML5, por lo tanto el único DOCTYPE válido es:

 

HTML5:  ``` <! DOCTYPE html> ```

 

Ahora, retomemos el proceso que realiza el motor del navegador para renderizar el documento HTML.

Para comenzar, este proceso se realiza de forma incremental, es decir el motor comienza a leer el documento en línea iniciando en la parte superior hacia la inferior.

```
<!DOCTYPE html>
<html>
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="initial-scale=1, maximum-scale=1">
     <title> Mi primera página Web</title>
   </head>
   <body>
     <h1>¡Hola Mundo!, esto es HTML</h1>
   </body>
</html>
```

La primera etiqueta que encuentra es el DOCTYPE que indica al motor el tipo de versión del documento HTML.

A continuación siguen las etiquetas semánticas que representan los elementos del documento. Este proceso se conoce como Parsear el HTML a Nodos DOM. En el mundo de la informática, parsear se refiere a la conversión de un elemento de un tipo a otro.  En el contexto del HTML significa convertir una marca o etiqueta a un nodo tipo DOM.

Cuando el motor de render se encuentra con el símbolo de apertura de una etiqueta, es decir, menor que (<), comprende que el paso siguiente es leer la etiqueta específica, y luego, el símbolo de cierre barra inclinada mayor que (/>). Una vez lee la etiqueta  completa procede a Parsear y agregar el nodo al Árbol DOM.

Los símbolos de apertura y cierre son las etiquetas obligatorias que indican al motor del navegador qué elementos son HTML y cuáles no. Aquellos que no son parte del lenguaje HTML son ignorados por el motor.

La prioridad principal del motor es mostrar los resultados de la manera más rápida posible. Así funciona el proceso que realiza el navegador al momento de interpretar nuestro documento HTML, y entregarnos el resultado final: nuestra página Web.



---
---

## :star: Estructura de un Documento Base
¡Hola! Aprenderemos la estructura básica de un documento HTML.

Un HTML debe tener:

El identificador del documento.

La etiqueta``` <html>``` que encierra a dos partes ```<head>``` y``` <body>```.
Comencemos con un ejemplo básico e iremos explicando cada parte:

```
1.<!DOCTYPE html>
2.   <html>
3.     <head>
4.     <meta charset="UTF-8">
5.     <meta name="viewport" content="width=device-width, initial-scale=1.0">
6.     <title>Ejemplo</title>
7.    </head>
8.    <body>
9.      ¡Bienvenido!
10.   </body>
11.  </html>
 ```

Comenzamos con la línea 1 que indica que lo que sigue es un documento HTML.

Luego viene la etiqueta``` <html> ```que abre en la línea 2 y cierra en la línea 11.

Dentro de ```<html> ```se tiene una estructura básica compuesta por dos partes; de un lado está el head o cabecera, y de otro, el body o cuerpo.

Con la etiqueta ```<head>``` agregamos información para los navegadores, y con la etiqueta  <body> escribimos el contenido del documento HTML que será nuestra página web.

En la cabecera se utilizan etiquetas tipo meta, las cuales profundizaremos más adelante. Por ahora, utilizaremos dos etiquetas que harán parte de la estructura básica.

Para que los caracteres especiales que existen en los diferentes idiomas sean renderizados de una manera estandar por el navegador, usamos el conjunto de caracteres: UTF-8 y eso lo indicamos con la línea 4.

Para adaptar visualmente nuestra página a cualquier dispositivo, utilizamos la etiqueta <meta> con viewport indicada por la línea 5. El viewport es el área de la página Web visible para el usuario.  Cuando escribimos width=device-width le decimos al viewport que sea igual al ancho de la pantalla del dispositivo donde se está cargando el archivo.

Utilizamos la etiqueta ```<title>``` para asignar el título que aparecerá en la pestaña del navegador.  Indicado en la línea 6.

Ya hemos construido el encabezado del nuestro documento base. Ahora, vamos a ocuparnos del cuerpo. Entre el ```<body>``` y ```</body>``` agregaremos todas las etiquetas necesarias, de acuerdo a las necesidades de la página que estamos construyendo.

Para el documento base colocamos como contenido lo que está en la línea 9.

---
---

