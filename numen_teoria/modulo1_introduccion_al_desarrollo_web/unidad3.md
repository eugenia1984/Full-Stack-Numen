

# :book:  Unidad 3: Conceptos de desarrollo Web


Temas:

- Prototipados y conceptos de HTML

- Box modeling (posicionamiento y visualización)

- FlexBox

- Grids y Mobile First

- Animaciones

- Primeros pasos al HTML

- CSS (Multimedia, bases del scc y atributos)

- Sintaxis CSS

- Integración CSS con HTML

- Intro a Pre-procesadores (SASS)

- Subida de sitios al servidor

- Dominios

- Hosting


## :star: Bases de CSS


### ¿Qué significa CSS? 

CSS, por sus siglas en inglés (**Cascading Style Sheets**) “hojas de estilo en cascada” es el lenguaje que define el estilo de los elementos en un documento HTML, por lo tanto es la manera con la cual vamos a manipular el diseño de nuestra página. 

El término cascada hace referencia a la manera en la que CSS trabaja, porque aplica los estilos sobre otros. 

Con CSS seleccionaremos el elemento HTML que queremos maquetar o darle estilo, luego escribiremos las instrucciones o declaraciones para definir las propiedades, características o estilos de dicho elemento, estas propiedades lo definiremos mediante un valor. 

Ejemplo: imaginemos que queremos dar un color de fondo verde a un elemento de párrafo. Para eso tenemos que hacer lo siguiente: 

- Seleccionamos el párrafo. 

- Definimos la propiedad, en este caso el color de fondo (background-color). ● Definimos el valor para la propiedad especificada, en este caso el valor será el color verde (green). 

La sintaxis se vería de la siguiente manera: 

```CSS
p { 

   background-color: green; 

} 
```


Nótese la sintaxis, las **llaves**, los **dos puntos**, el **punto y coma** son signos importantes ya que forman parte de la sintaxis o forma de escribir código CSS. 

Existen muchas propiedades como: color, alineación, tamaño, tipo de letra, bordes, tipos de borde, márgenes, etc. 

También están los valores para dichas propiedades como por ejemplo para alineación puede ser a la izquierda, al centro, a la derecha, para tipo de letra puede ser: Helvética, Verdana, Lato, etc.


### Integración de CSS con HTML 


#### ¿Cómo se puede utilizar CSS? 

Existen tres formas bastante conocidas de emplear CSS para maquetar una página HTML y son las siguientes: 

- Aplicar CSS en línea HTML mediante atributos. 

- Incrustar el código CSS en una etiqueta <style> dentro del documento HTML. ● Crear un documento CSS externo. 

- CSS en línea empleando un atributo 

Esta forma de utilizar CSS es la más básica y muy conocida, básicamente consiste en indicar los estilos de un elemento HTML dentro de su etiqueta de apertura. 

Ejemplo: 

```<p style=”color: red;”> Academia Numen – Introducción a CSS </p> ```

Y se vería de la siguiente manera: 


De esta manera se aplica un estilo determinado sólo al elemento de la etiqueta, en este caso color de letra para el párrafo será rojo. 

### CSS incrustado en el documento HTML 

Ésta es otra de las maneras de usar CSS, simplemente insertamos el código dentro del documento HTML de tal manera que los estilos que deseamos aplicar afectarán no solo a un elemento, sino que afectará a toda la página entera. 

```
<style> 

/* Aquí irá todo el código CSS*/ 

</style> 
```

La etiqueta <style> contiene el código CSS que se desea aplicar al documento HTML. <style> Debe ser insertado dentro de la etiqueta <head> del documento para que funcione correctamente.

Ejemplo de un código CSS insertado en el documento HTML: 

```HTML
<html> 
   <head> 
       <title>Numen CSS</title> 
       <style> 
           p { color: red; } 
       </style> 
   </head> 
   <body> 
       <p>Párrafo de prueba</p> 
   </body> 
</html> 
```


## CSS en un documento CSS externo 

Ésta es la forma más recomendable de aplicar estilos CSS a nuestro documento HTML. Consiste en crear un archivo de CSS además de nuestro archivo .html y guardarlo con la extensión .css, por ejemplo: estilos.css 

- En el archivo estilos.css se encuentran todos los códigos CSS que determinarán el estilo de todos los elementos HTML que se desean. 

- Desde un documento HTML llamaremos al archivo estilos.css para que se haga presente y aplique los estilos que hemos escrito en dicho archivo CSS. 

- Para realizar la invocación, emplearemos la etiqueta <link> dentro de la etiqueta <head> del documento HTML y mediante el atributo rel y href invocamos al documento CSS mediante su nombre. 


```HTML
<html> 
  <head> 
    <title>Numen CSS</title> 
    <link rel=”stylesheet” href=”estilos.css”> 
  </head> 
  <body> 
  </body> 
</html>
```



El atributo **REL** define la relación entre el documento HTML y el documento CSS invocado, el valor StyleSheet indica que es un estilo preferido. 

El atributo **href** es el que invoca al documento CSS, si el archivo se encuentra guardado en la misma carpeta que el documento HTML entonces bastaría con colocar el nombre del documento con su respectiva extensión como en el ejemplo href=“estilos.css”. 

Si el archivo CSS se encuentra guardado en otra carpeta, entonces hay que especificar la dirección URL donde está ubicada.

---

## Sintaxis CSS 



### ¿Qué es la sintaxis CSS? 

Cuando utilizamos estilos en un elemento HTML se deben establecer algunas reglas de estilos las cuales van a aplicarse a dicho elemento. En un documento HTML existen distintos tipos de elementos como textos, multimedia, formularios, links, listas, etc. Todos éstos elementos pueden poseer un estilo. 

Se considera sintaxis al orden y relación de los elementos que componen una correcta instrucción CSS así como las funciones que cumplen. Un documento CSS contiene todas las reglas establecidas para cada elemento HTML. 


### ¿Qué es una regla CSS? 

Una regla CSS es la forma correcta de escribir instrucciones de código CSS, es decir, la manera en la que se debe escribir código CSS para que éste sea interpretado y aplicado correctamente en el navegador web. 

Principalmente una regla CSS está formada por un sector y una declaración, dentro de la declaración se encuentran las propiedades con su respectivo valor. 

- **Selector**: El selector es quien indica a qué elemento HTML se aplica el estilo. 

- **Propiedad**: Es la característica que se desea definir, por ejemplo: el color. 

- **Valor**: Es el valor que tomará la propiedad, por ejemplo: background: red; 

- **Punto y coma (;)**: Una declaración siempre se debe terminar con un punto y coma. 



Ejemplo de una regla CSS: 

```CSS
h1 { 
color: red; 
} 
```


En el ejemplo se puede identificar: 

- El selector apunta a un elemento HTML, en éste caso un <h1> 

- La declaración siempre está dentro de llaves y contienen la propiedad y su valor seguido por un punto y coma, en éste caso es color: red;


### Selectores de CSS 

La sintaxis siempre tiene la siguiente forma: el selector, seguido del grupo de declaraciones encerradas en llaves. 

```
Selector { 
  grupo de declaraciones 
} 
```

Las declaraciones tienen la siguiente forma: están formadas por la propiedad, seguido de dos puntos para continuar con un valor y cerrado con un punto y coma. 

**propiedad: valor;** 


### Ejemplo de cómo se utiliza la sintaxis CSS: 

Imaginen que deseamos ponerle un color verde al subtítulo de nuestro documento HTML. La sintaxis adecuada sería: 

```CSS
h2 { 
   color: green; 
} 
```

- El selector siempre va antes que las declaraciones. 

- Las declaraciones van dentro de llaves y se separan con un “;”



### Selectores de tipo 

Los selectores de tipo en CSS se refieren a los selectores que apuntan a un tipo de elemento HTML como puede ser: 

- Los títulos: ```<h1> ```

- Los subtítulos: ```<h2>``` , ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```

- Párrafos:``` <p>``` 

- Los enlaces: ```<a> ```

- Tablas: ```<table> ```

Por poner un ejemplo, imaginen que deseamos poner de color azul, todos los párrafos de la página. El código adecuado sería: 

```css
p { 
  color: blue; 
} 
```


## Selectores de ID y Clase 

Este tipo de selectores en CSS apuntan a un elemento HTML identificado, es decir, a un elemento HTML que tenga el atributo id o class. 

Ejemplo de código HTML: 

```HTML
<div id=“numen”> 
  <h2>Academia Numen</h2> 
  <p>Desarrollo Web</p> 
</div> 
```

Código CSS para ponerle letras azules y un fondo de color rojo al elemento con un id: 

```CSS
#numen { 
  color: blue; 
  background-color: red; 
} 
```

Tanto el selector de tipo id y class funcionan de la misma manera, la única diferencia es que para los selectores de tipo id se le escribe un signo numeral (#) y a los tipo class, un punto (.)


### Selectores descendientes 

Los selectores descendientes en CSS se utilizan para apuntar elementos que se encuentran dentro de otros elementos. De ésta manera se puede colocar un estilo específico a un item de un elemento padre (el que lo contiene) 

Por ejemplo, si tenemos un elemento <span> dentro de un párrafo <p> y éste párrafo a la vez está dentro de otro <div> podríamos aplicar CSS de la siguiente manera: 

Ejemplo de código HTML: 

```HTML
<div id=”contenedor“> 
  <p class=”item“>Éste es un <span>párrafo de ejemplo</span></p> 
  <p>Otro párrafo de ejemplo</p> 
</div> 
```

Ejemplo de código CSS para poner de color rojo el elemento que está dentro del <span> y un fondo de color azul: 


```CSS
#contenedor .item span { 
  color: red; 
  background-color: blue; 
}
```

---
---


## :star: Dominio y Hosting


## Concepto básico 

Hosting es el espacio de almacenamiento donde se alojan los archivos que componen tu sitio web, y el dominio es el nombre con el que tus visitantes accederán a él. 

Ejemplo: www.google.com.ar 


## ¿Qué es un nombre de dominio? 

El nombre de dominio es la dirección de tu sitio web, que las personas escriben en la barra de direcciones del navegador para visitar tu sitio web. 

Internet es una red gigante de computadoras, servidores y dispositivos conectados entre sí a través de cables y redes inalámbricas, y para identificarlos fácilmente, a cada dispositivo se le asigna una serie de números llamados direcciones IP. 

Esta dirección IP, es una combinación de números separados por puntos, o por doble punto (depende de la tecnología utilizada por tu proveedor de Internet) y por lo general lucen de esta manera: 

● 80.51.40 si se trata de una dirección IPV4. 

● 2001:0DB8::1428:57AB si se trata de una dirección IPV6. 

Las computadoras, servidores y los dispositivos electrónicos no tienen problemas para identificar, recordar y guardar estos números, pero sería casi imposible para un humano retener en su mente y usar estos números para conectarse a cada sitio en Internet. 

Para resolver este problema, se inventaron los nombres de dominio, de forma de ponerle un nombre amigable y recordable a cada página web. 

Su funcionamiento se basa en traducir el nombre ingresado a una dirección IP para visitar un sitio web almacenado en tal o cual servidor.


## ¿Qué es un servicio de hosting? 

El hosting, web hosting o el alojamiento web es el lugar donde viven todos los archivos y contenidos que componen tu página web. 

Cuando alguien ingresa tu dirección web en un navegador, el nombre de dominio se traduce a la dirección IP del servidor de la empresa de hosting o alojamiento web donde el sitio está almacenado. Este servidor (o supercomputadora) contiene los archivos de tu sitio web y los envía a los navegadores de los usuarios cuando estos acceden. 

Las empresas de hosting o alojamiento web se especializan en almacenar y servir sitios web. Ofrecen diferentes tipos de hosting y planes de alojamiento a sus clientes. 


## ¿Cómo se relacionan los nombres de dominio y el hosting o alojamiento web? 

Los nombres de dominio y el alojamiento web son dos servicios diferentes, pero uno no puede vivir sin el otro y trabajan juntos para hacer posible un sitio web. Un sitio web no existe sin un nombre de dominio, ni tampoco sin un servicio de hosting. 

¿Cómo sabe el dominio que debe ir a buscar tales o cuáles archivos de un sitio web a un servidor de hosting en particular? Aquí entra en juego lo que se llama DNS: el encargado de informar al dominio dónde ir a buscar la información. 


## ¿Cómo funciona el hosting o alojamiento web? 

El hosting o alojamiento de páginas web entra en juego cuando los archivos que componen un sitio web se cargan desde el servidor al pedir una página web por navegador. Los recursos del servidor (procesador, memoria RAM, espacio en su disco duro y ancho de banda) se asignan a los sitios web que lo utilizan de acuerdo a lo incluido en tu paquete de hosting. La división de los recursos del servidor varía según el tipo de plan de alojamiento elegido. Para elegir el plan de alojamiento apropiado, primero debes diferenciar entre los planes y tipo disponibles en tu proveedor.


## Tipos de hosting web 

Si tu sitio web es el de una pequeña o mediana empresa, normalmente basta un hosting compartido o un hosting especializado en el CMS que vas a utilizar. Si en cambio prevés muchos miles de visitas diarias, un sitio con muchas páginas o vas a usar una aplicación web muy compleja, mejor opta por otro tipo de hosting más exclusivo. 

Para delimitar el tipo de hosting que necesitas, primero piensa cómo de grande quieres que sea tu proyecto web, y cuáles son tus conocimientos técnicos para enfrentarte a cuestiones como su administración. Dependiendo de estos dos aspectos, puedes elegir el hosting más adecuado a tus necesidades y a tu presupuesto económico. 


## ¿Cómo elegir un buen hosting o alojamiento web? 

Para escoger al mejor proveedor de hosting debes tener en cuenta tus necesidades y analizar qué ofrecen las compañías de alojamiento web. Recuerda que en muchas ocasiones “lo barato sale caro”, por lo que la mejor opción será realizar una comparativa de lo que ofrecen las empresas por el mismo servicio. 

Algunas de las variables que debes tener en cuenta son las siguientes: 

● Comentarios y reviews positivas: Las opiniones públicas positivas de los clientes de un servicio de hosting son las que aportan mayor credibilidad y es una manera fiable de comprobar si el proveedor cumple o no sus promesas. 

● Servicio de atención al cliente en tu idioma: La atención al cliente debe ser 24/7, es decir, veinticuatro horas durante los siete días de la semana. Trata de buscar un proveedor que te atienda en español, y que tenga atención telefónica para dudas urgentes. 

● Métodos de pago: Si vas a pagar por tu servicio de hosting, pues que sea cómodo para ti. Fíjate bien en los métodos de pago disponibles y comprueba que se ajusten a tu ubicación geográfica. Recuerda que en algunos países de América latina en ocasiones hay problemas con las tarjetas de crédito como pasarelas de pago si es que el proveedor no tiene bien dominado este asunto. 

● Precios: Los precios son muy importantes y es fundamental que elijas un proveedor que ofrezca una buena relación calidad-precio, pero también ten en cuenta que la calidad tiene su precio.



---
---

## :star: Intro pre-procesadores (SASS)


## ¿Qué es un preprocesador? 

En pocas palabras, un preprocesador te permite escribir CSS en un idioma alternativo (es muy parecido al CSS nativo) y ofrece algunas características avanzadas como variables, funciones y la posibilidad de incluir archivos. En resumen, te ayudan a escribir de manera más simple para organizar mejor tu código, evitando al mismo tiempo las repeticiones. Una vez que el código CSS esté escrito en este nuevo idioma, se compilará para volver a transformarse en CSS nativo, el único que los navegadores web pueden entender. Esta característica de los preprocesadores es clave: aportan nuevas formas de escribir código a través de un idioma alternativo pero, en última instancia, el código enviado al navegador sigue siendo CSS nativo. Los preprocesadores no aportan nuevas funciones a CSS, pero lo hacen más eficiente. 



## ¿Qué es SASS? 

Sass (Syntactically Awesome StyleSheets) es una extensión de CSS que agrega potencia y elegancia al lenguaje básico, como lo describe Sass en su documentación. Se trata de un procesador de hojas de estilos dinámico e introductorio a conceptos de la programación como las variables, funciones, iteradores, bucles, condicionales, entre otros. 

Sass trabaja escribiendo sus estilos en archivos .scss (o .sass), donde se compila en un archivo CSS normal. El archivo CSS recién compilado es lo que se carga en el navegador para darle un nuevo estilo a su sitio web. 


## ¿Qué se puede hacer con SASS? 


**Variables**: Tal y como se hace en muchos lenguajes de programación, podemos almacenar información en una variable. Posteriormente, podemos reutilizar esta información a través de las diferentes hojas de estilos. 

Dentro de esta variable podemos almacenar valores hexadecimal, números, pixeles, cadena de caracteres, booleanos, listas, mapas, entre otros. Esta es una ventaja, ya que asignamos el valor de un color en una variable al principio de un archivo y luego usamos esta variable cuando configuramos el color de nuestros elementos. Esto permite cambiar rápidamente los colores sin tener que modificar cada línea.


**Anidado**: Nos permite anidar los selectores CSS imitando la jerarquía visual de HTML. Además, nos permite agrupar los estilos en componentes y asegurarnos de que sea mucho más fácil de leer. También, nos ayuda a reducir la cantidad de código que necesitamos escribir y mejorar la legibilidad. 


**Parciales**: Nos permite tener trozos de códigos para luego incluirlos en otros archivos sass. Los archivos parciales están considerados por sass con solo añadir un subrayado al comienzo de su nombre. Por ejemplo: _reseter.scss o _variables.scss. 


**Importaciones**: El uso de @import nos permite importar archivos parciales en el archivo actual construyendo un único archivo CSS. El @import es diferente en sass que en CSS, ya que en una hoja de estilos CSS, se realiza una nueva llamada al servidor para cargar otra hoja de estilo y esperar a que se cargue para aplicar los nuevos estilos. En sass es diferente, ya que la importación en un archivo .scss o .sass se produce durante la compilación. Además, no tenemos por qué poner la extensión del archivo. 


**Mixins**: Un Mixin es un bloque de código que nos permite agrupar las declaraciones de CSS que podemos reutilizar en nuestro sitio. La gran ventaja de los mixins está en que podemos pasar argumentos, los cuales se declaran como una lista de variables dentro de un paréntesis. A cada una de estas variables se le asigna un valor cada vez que se usa el mixin. De esta forma, no se genera un código repetido cada vez que lo usemos, ya que gracias a los argumentos podemos obtener un código singular para cada caso. 


**Herencia / Extend**: Se trata de una característica que permite que los selectores puedan heredar los estilos de otros selectores. De esa forma, no tenemos que repetir códigos, haciendo el trabajo más rápido, eficiente y fácil de mantener. Se pueden compartir las propiedades de un selector a otro usando @extend. 


**Operadores**: Sass nos permite crear rápidamente cálculos matemáticos en nuestra hoja de estilos, donde por ejemplo, podremos convertir valores pixel a porcentajes. Podemos usar los operadores más comunes como suma, resta, multiplicación y división.


---
---

## :star: Renderización de HMTL


### ¿Cómo se renderiza el HTML?
 

El renderizado de un documento HTML es el proceso que realiza el **motor de render** de los navegadores Web.

Antes de explicarte cómo funciona este proceso en el navegador, debemos saber:

 

### ¿Qué es el DOM? y ¿Qué es el DOCTYPE?

Entonces **¿Qué es el DOM?**

Sus siglas se refieren a **Document Object Model**, que traduce, **Modelo de Objetos del Documento**.

El **DOM** es la representación de los elementos HTML en el navegador que tiene características y funcionalidades propias de HTML5 para cada etiqueta. Su estructura es tipo árbol y cada uno de los elementos representa un nodo.

A través del DOM y el conjunto de funciones que provienen de HTML5, podemos manipular una página Web a nuestro gusto.

 
```
                         <hmtl>
                        |      |
                    <head>     <body>
                   |     |      |    
             <title> <link>     <p>
              |                 | |
            Titulo       Texto en <b>
                                   |
                                  negrita
```


 

Siempre que vamos a crear un documento HTML debemos saber que existen un conjunto de etiquetas obligatorias para la creación de una página Web.

 

**DOCTYPE**, es la primera etiqueta obligatoria que da inicio a un documento HTML indicando al navegador la versión HTML que vamos a utilizar para la creación de nuestra página Web.

Esta etiqueta se utiliza luego de la aparición de la versión 2.0 como un recurso para que el motor de render identifique el tipo de versión que debe capturar durante el proceso.

DOCTYPE ha evolucionado en la forma como se declara en cada versión. Veamos:

 

**HTML5**: ```<! DOCTYPE html>```

 

**HTML4**: ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">```

 

**HTML3**: ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">```

 

**HTML2**: ```<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">```

 

Recuerda que la versión de HTML que vamos a usar en este curso es HTML5, por lo tanto el único DOCTYPE válido es:

 

**HTML5**: ```<! DOCTYPE html>```
 

Ahora, retomemos el proceso que realiza el motor del navegador para renderizar el documento HTML.

Para comenzar, este proceso se realiza de forma incremental, es decir el motor comienza a leer el documento en línea iniciando en la parte superior hacia la inferior.

```HTML
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


```
              HTML
             |   |
          HEAD   BODY
         |   |      |
     TITLE  META    H1
            |  |
     viewport charset
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

La etiqueta ```<html>``` que encierra a dos partes ```<head>``` y ```<body>```.

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

Comenzamos con la **línea 1** que indica que lo que sigue es un documento HTML.

Luego viene la etiqueta ```<html>``` que abre en la **línea 2** y cierra en **la línea 11**.

Dentro de ```<html>``` se tiene una estructura básica compuesta por dos partes; de un lado está el **head o cabecera**, y de otro, el **body o cuerpo**.

Con la etiqueta ```<head>``` agregamos información para los navegadores, y con la etiqueta  <body> escribimos el contenido del documento HTML que será nuestra página web.

En la cabecera se utilizan etiquetas tipo meta, las cuales profundizaremos más adelante. Por ahora, utilizaremos dos etiquetas que harán parte de la estructura básica.

Para que los caracteres especiales que existen en los diferentes idiomas sean renderizados de una manera estandar por el navegador, usamos el conjunto de caracteres: UTF-8 y eso lo indicamos con la **línea 4**.

Para adaptar visualmente nuestra página a cualquier dispositivo, utilizamos la etiqueta <meta> con viewport indicada por la **línea 5**. El *viewport* es el área de la página Web visible para el usuario.  Cuando escribimos ```width=device-width``` le decimos al viewport que sea igual al ancho de la pantalla del dispositivo donde se está cargando el archivo.

Utilizamos la etiqueta ```<title>``` para asignar el título que aparecerá en la pestaña del navegador.  Indicado en la **línea 6**.

Ya hemos construido el encabezado del nuestro documento base. Ahora, vamos a ocuparnos del cuerpo. Entre el ```<body>``` y ```</body>``` agregaremos todas las etiquetas necesarias, de acuerdo a las necesidades de la página que estamos construyendo.

Para el documento base colocamos como contenido lo que está en la **línea 9**.



---
---

## :star:


### Estructura de las Carpetas y de los Nombres de los Archivos

Cuando se tiene un proyecto es importante estar organizados por lo cual debemos seguir ciertas reglas relacionadas con:

- La estructura de las carpetas.

- El nombre de las carpetas.

- El nombre de los archivos.

- El código.

Es importante tomar en cuenta que nuestro proyecto debe ser compatible en distintos sistemas operativos, para lo cual recomendamos seguir todas indicaciones siguientes.


## Estructura de las carpetas

Te recomendamos seguir las siguientes sugerencias cuando estés estructurando las carpetas de tu proyecto HTML:

- Genera carpetas para cada tipo de recurso.

- Crea la página predeterminada como index.html.

La estructura puede ser la siguiente:

```
site
  audios
  images
  scripts
  styles
  videos
  index.html
```

 

Podemos colocar los nombres en español, pero recordemos tener cuidado con los caracteres con acentos y similares.

 

### Nombre de las carpetas


Para nombrar las carpetas sugerimos que respetes los puntos a continuación:

 

- Usar minúsculas.

- No usar espacios.

- No usar caracteres con acento o tilde, etc.

- Definir un separador de palabras usualmente guión bajo _ o  guión -.
 

### Nombre de los archivos

Al igual que para las carpetas, debemos respetar los siguientes puntos al nombrar los archivos:

- Usar minúsculas.

- No usar espacios.

- No usar caracteres con acento o tilde, etc.

- Definir un solo tipo de separador de palabras, usualmente guión bajo _ o  guión -.

- Usar extensiones de archivos consistentes, es decir, los archivos JPEG deben usar una de las siguientes extensiones .jpg o .jpeg, pero una vez que hemos definido qué extensión usaremos debemos mantenerla en nuestro proyecto. De la misma forma se recomienda usar .html en vez de .htm.


### Código

En cuanto al código también tenemos algunas recomendaciones:

- La codificación de archivos: es el conjunto de caracteres que se utilizan para escribir el código. Por ejemplo, si deseamos que  los archivos .html acepten distintos tipos de caracteres (acentos, asiáticos, etc.) y sea estándar en distintos lenguajes es recomendable usar UTF-8. Cabe destacar, que esta opción se configura en nuestro editor.

- Usar indentaciones: el código indentado es más legible, por lo cual se recomienda usar tabuladores o espacios; sin embargo, debemos seleccionar cual de los mecanismos emplearemos y trabajar siempre de esa manera. Recuerda que muchos editores tienen una opción para arreglar el formato tu código e indentarlo automáticamente.

---
---

## :star: Editores de códigos

El editor de código es la herramienta fundamental para hacer una web. Hay muchos editores de código, como Dreamweaver, SublimeText, Atom, Brackets… algunos de ellos, gratuitos

Los editores te brindan algunas ventajas como:

- Resaltado de código con colores.

- Autocompletado de etiquetas y atributos.

- Plantillas para la creación de tablas, formularios, etc.

Para trabajar con un código HTML es necesario tener una buena herramienta de edición. Hoy en día existen varios editores que son muy poderosos y nos brindan todo lo necesario para trabajar con HTML.

 

A continuación te mostramos tres opciones muy populares en el mercado:

 

### Sublime Text

http://www.sublimetext.com/

Es un editor de texto muy poderoso y ligero, programado en C++ y Python. Es multiplataforma y cuenta con distintos plugins que extienden su funcionalidad. Tiene un producto asociado llamado Sublime Merge (https://www.sublimemerge.com/), el cual  permite visualizar los cambios de software en un manejador de versiones.

 

### Atom

https://atom.io/ 

Atom es un editor libre de código fuente desarrollado por Github y está basado en tecnologías Web. Sus extensiones se escriben con NodeJS y tiene muchos plugins. Entre sus características más resaltantes se tienen que tiene integrado ambos una funcionalidad para editar de forma colaborativa y un manejador de versiones.


### VSCode

https://code.visualstudio.com/

VSCode es un editor libre liderado por Microsoft. Entre sus características más resaltantes se destaca que es muy ligero y tiene integrado un manejador de versiones. Además es multiplataforma y soporta extensiones.



Actualmente, los editores de textos proporcionan muchas funcionalidades, que vienen embebidas con el producto o se integran a través de alguna extensión o plugin. Te invitamos a descargar algunos de estos editores de texto, investigar sus extensiones / plugins  y practicar creando tu propio código HTML.

Recomendamos utilizar los siguientes para realizar las prácticas

Editor de código Brackets: http://brackets.io/

Editor de código Atom: https://atom.io/

 


---
---

## :star:  Etiquetas Meta

Las **meta etiquetas** (también llamadas: **meta tags**) se utilizan al crear páginas en HTML o XHTML. Estas etiquetas pueden describir el contenido de un sitio web con precisión. Este elemento te permite transmitir metadatos estructurados a través de la página web. Los metadatos pueden variar dependiendo de la descripción de los atributos deseados. Las meta etiquetas se pueden utilizar para describir una página con más detalle.

Un meta elemento puede utilizarse para imitar la respuesta HTTP de un encabezado o para anclar meta información adicional en el documento HTML, como el autor de un texto con una etiqueta de autor, o la forma en que los caracteres se mostrarán a través de la etiqueta de tipo de contenido.

En HTML5 hay un total de **cinco atributos válidos** que están disponibles para la etiqueta meta: charset, http-equiv, nombre, esquema y contenido. El http-equiv se usa para imitar la respuesta HTTP del encabezado.

Los meta tags pueden ser declarados en la cabecera del documento HTML o XHTML.


```HTML
<!DOCTYPE html>
  <head> 
    <title> Tipos de meta</title>
    <meta charset="utf-8"/>
    <meta name="author" content="FRancesc Ricart"/>
    <meta name="description" content="Contenido relevante del usuario"/>
    <meta name="keywords" content="meta obsoleto, pero no para meta etiquetas html/>
    <meta nmae="generator" content="prestashop"/>
    <meta name="robots" content="noindex, follow/>
  </head>
  <body>
     <p>Este documento lleva informacion sobro los META </p>
  </body>
</html>

```

### Ejemplos:

Las meta etiquetas se codifican generalmente en la cabecera de un documento HTML. El siguiente ejemplo muestra una meta etiqueta declarada con la descripción de los atributos, las **palabras clave** y el **contenido** con la descripción correspondiente:

 ```<meta name ="description" content = "This is the description. It should be about 155 characters long.">```

El motor de búsqueda recibe la descripción de esta página: “Esta es la descripción. Debe tener unos 155 caracteres”.

Otro ejemplo es el contenido del atributo con el valor refresh y el contenido del atributo con el valor en segundos. Tendría el siguiente aspecto:

```<meta http-equiv=”refresh” content=”100”> ```

La meta etiqueta pasa la información al navegador, que recargará la página actual cada 100 segundos.


### Atributos de meta etiqueta relevantes para los motores de búsqueda

Las meta etiquetas proporcionan información valiosa sobre la página web, principalmente para ayudar a los motores de búsqueda a clasificarlas correctamente. Para los usuarios, los Meta-tags normalmente no son visibles, aunque la descripción y el título pueden ser visibles para el usuario en los SERPs.

En los años 90, la tecnología de los motores de búsqueda no estaba tan avanzada como lo está hoy en día. En ese momento, los motores de búsqueda eran más dependientes de la meta información y esto fue considerado como uno de los factores de posicionamiento más influyentes. En ese momento, muchos webmasters eran fácilmente capaces de influir o incluso manipular deliberadamente los resultados de búsqueda utilizando meta tags.

Debido al continuo desarrollo de los motores de búsqueda, los meta tags están perdiendo cada vez más importancia. Sin embargo, algunas de las meta etiquetas siguen siendo importantes y no deben descuidarse (como la etiqueta robots, la etiqueta title).

### El valor del título en el contenido del atributo

```<meta name=”title” content=”OnPage SEO”>```

La etiqueta meta título es polémica. Tiene la misma función que la etiqueta título. Es por eso que los expertos no están de acuerdo si es realmente relevante para la optimización de motores de búsqueda. Algunos están convencidos de que es beneficioso utilizarlos, mientras que otros lo discuten. En el ejemplo anterior, se especificó el siguiente encabezamiento:

**“SEO OnPage”**

En la práctica, la etiqueta Meta título se equiparará al título del documento HTML. Aunque la meta etiqueta es en realidad superflua, el título es un elemento relevante para el posicionamiento de un sitio web, que además se muestra en los SERPs.

El valor de la descripción en el contenido del atributo
 ```<meta name=”description” content=”You are on the ryte.com website and this description should be about 155 characters long.”>```
En este ejemplo, el motor de búsqueda vería la siguiente descripción de la página:

“Estás en el sitio ryte.com y esta descripción debe tener unos 155 caracteres.” La mayoría de los motores de búsqueda soportan la descripción de atributos como Bing. Google, sin embargo, sólo accederá a la información de la meta etiqueta si la información se solicita a través de la página.

La descripción del atributo proporciona una descripción precisa de los contenidos del sitio web. Esto permite a los autores de la web describir el contenido con mayor precisión. La descripción aparecerá a menudo, pero no siempre, en los resultados de la búsqueda, por lo tanto, es un factor que influye en el hecho de que se haga clic o no en una página. No se especifica el tiempo que puede durar esta descripción, pero se recomienda no sobrepasar los 175 caracteres.

Las etiquetas nombradas con la Meta Descripción son elementos importantes para aumentar el CTR en los resultados de búsqueda. Junto con el título, se pueden utilizar para featured snippets.

### El valor de las palabras clave en el contenido del 

```<meta name=”keywords” content=”Meta, Attribute, Keywords”>```

Como se muestra arriba, puedes indicar al motor de búsqueda qué palabras son relevantes para el contenido. El atributo palabras clave se hizo muy popular en 1995. Un factor decisivo para ello fueron los antiguos buscadores Infoseek y AltaVista.

Su popularidad creció tan rápidamente que este atributo fue usado muy comúnmente. Pero a finales de 1997 quedó claro que las palabras clave de las metaetiquetas podían desviar la búsqueda y resultó obvio para los operadores de los motores de búsqueda que esto debía corregirse. Por lo tanto, la prioridad de las palabras clave del atributo cayó abruptamente en el algoritmo de los motores de búsqueda. En 2009, los principales motores de búsqueda habían abandonado la compatibilidad con las palabras clave de atributo. Sin embargo, en septiembre de 2012, Google anunció que las palabras clave de las metaetiquetas volverían a ser relevantes para los editores de noticias. A diferencia de las palabras clave meta tag no relevantes, las nuevas keywords son ahora de importancia para los motores de búsqueda.

### El valor del idioma en el contenido del atributo

```<meta http-equiv=”language” content=”de”>```

El atributo “idioma” indica al motor de búsqueda en qué idioma está escrita la página (por ejemplo, francés, español o alemán). Por lo general, el idioma se especifica como etiqueta de idioma IETF (es decir, “de” para el alemán o “fr-ca” para el francés en Quebec). Esto es de especial interés para los operadores de páginas web, que están escritos en varios idiomas. Utilizando la etiqueta de idioma, puedes indicar al motor de búsqueda qué idiomas se utilizan en qué páginas.


### El valor robots en el contenido del atributo

```<meta name=”robots” content=”nofollow”>  ```

El atributo robots es compatible con los motores de búsqueda correspondientes. La etiqueta le dice a los crawlers (o arañas) de los motores de búsqueda qué información debe y qué información no debe ser tomada en cuenta. En el ejemplo anterior, se indica a los crawlers del motor de búsqueda que no sigan los enlaces de la página. Para quitar la web del índice del motor de búsqueda, puedes añadir el valor nofollow, noindex, para que esta página no aparezca en los resultados del motor de búsqueda. Otros valores útiles serían noarchive y nosnipped, donde el primero indica al motor de búsqueda que no guarde la página en el archivo y el segundo especifica no listar la página en los resultados de búsqueda. Otra forma de bloquear el rastreador del motor de búsqueda o rechazar una acción es robots.txt.


### Redirecciones

El atributo “refresh” no sólo se puede utilizar para recargar la página, sino también para dirigir a los visitantes a otra página.

```<meta http-equiv=”refresh” content=”10;url=http://www.academianumen.com” >```

En este ejemplo, los visitantes de la página serán redirigidos al sitio Onpage después de 10 segundos. Los navegadores Internet Explorer y Mozilla Firefox tienen la opción de deshabilitar la redirección a través de una metaetiqueta. Como algunos navegadores tienen problemas con el botón Atrás en este tipo de redirección, apenas se utiliza.



---
---

## :star:  Etiquetas semánticas

Te presentamos otras etiquetas semánticas de gran utilidad.

 

Existen más etiquetas semánticas que se han incorporado para darle significado a las partes de tu documento HTML, las cuales describimos a continuación.

 

La etiqueta ```<main> ```especifica la parte principal del documento

 

Las etiqueta  ```<summary> ```se utiliza para mostrar un extracto de la información, que al darle click se expande con el contenido dentro de ```<details>```. Para ilustrar el uso de estas etiquetas te presentamos un ejemplo:

 

```
<details>  
   <summary>Academia Numen</summary> 
   <p>Escritor</p> 
   <p>más información</p>
</details>
```
 

El cual despliega lo siguiente:

 
>Academia Numen
 

 

La etiqueta ```<time>``` se utiliza para indicar tiempo o fechas.

 

La etiqueta ```<mark>``` sirve para resaltar una palabra o frase.





---
---

## :star:  Entidades HTML

La representación de los símbolos especiales es un problema en muchos lenguajes de programación. Un símbolo especial puede ser un arroba (@), usado en los correos electrónico o un símbolo de dólar ($), empleado para distinguir una moneda específica, entre muchos tantos ejemplos.  En el caso de HTML, existen las **entidades** las cuales son estructuras que proporcionan una forma de representar estos símbolos.

 

Hay **dos maneras de codificar una entidad HTML**:

- La primera es a través del uso del  ampersand(&) seguido del código o nombre de la entidad y terminado en un punto y coma. 

- La segunda es usando el ampersand (&), a continuación el numeral (#) y seguidamente el código o nombre de la entidad y terminado en punto y coma. En resumen, una entidad se estructura usando cualquiera de las siguientes formas:

 ```&nombre_entidad; ```

 ```&#número_entidad; ```
 

Te mostramos algunas entidades HTML útiles. Como puedes observar en la tabla siguiente se puede utilizar el número de la entidad (código de la entidad) o el nombre de la entidad.

 

| Caracter | Código de la Entidad | Nombre de la Entidad |
| -------- | -------------------- | -------------------- |
| á |	 ```&#224; ``` |  ```&aacute; ``` |
| é |	 ```&#233; ``` |	 ```&eacute; ``` |
| í |	 ```&#237; ``` |  ```&iacute; ``` |
| ó |	 ```&#243; ``` |	 ```&oacute;  ```|
| ú |	 ```&#250; ``` |	 ```&uacute;  ```|
| < |	 ```&#60; ``` |	 ```&lt; ``` |
| > |	 ```&#62; ``` |	 ```&gt; ``` |
| @ |	 ```&#64; ``` |	- |
| & |	 ```&#38 ```; |	 ```&amp; ``` |
| $ |	 ```&#36; ``` | -	 |
| € |	 ```&#8364; ``` |	 ```&euro; ``` |
| “ |	 ```&#34; ``` |	 ```&quot; ``` |
| Π |	 ```&#928; ``` |	 ```&Pi; ``` |
 

El siguiente código HTML es un ejemplo del uso de las entidades HTML:
 ```
<p>Esta bicicleta tiene un costo de &dolar;40</p>
<p>Nuestro corres electr&oacute;nico:test&#64;test.com</p>
 ```
Que se desplegará como:

 ```
Esta bicicleta tiene un costo de $40
Este es mi correo electrónico: test@test.com
 ```

 


---
---

## :star:  Etiquetas de Formato Adicionales


A continuación vamos a estudiar algunas etiquetas de formato adicionales.

 

Así como existen las etiquetas de formato común, tales como ```<h1>```, ```<h2>```,``` <p>```, etc, existen muchas otras que indican un formato específico.  A continuación varias de las etiquetas que debes tomar en cuenta:

| Etiqueta | Descripción |
| -------- | ----------- |
| ```<abbr>``` |	Para abreviaciones |
| ```<b>```	| En negrita |
| ```<blockquote>``` |	Referencia de un texto |
| ```<cite>``` |	Cita |
| ```<del>```	| Texto eliminado (tachado) |
| ```<em>```	| Énfasis |
| ```<ins>```	| Texto insertado |
| ```<meter>```	| Medida |
|``` <q>``` | - |
|``` <small>``` | Cita corta |
| ```<strong>```	 | Texto importante |
|``` <sub>```	| Subíndice |
| ```<sup>``` | Supraíndice |



---
---

## :star:  Etiquetas de Código

Vamos a estudiar algunos aspectos que tienen que ver con las etiquetas usadas para representar códigos.

 

Existen etiquetas especiales cuando queremos representar código fuente en nuestro HTML

 

- La etiqueta ```<code> ```se emplea para representar un código fuente  usando  un tipo y tamaño de letra, para proporcionar un formato adecuado a una pieza de programa de computación.
 

- La etiqueta``` <pre>``` se usa para que todos los (espacios, saltos, tabulaciones) que estén dentro de ella sean interpretados literalmente.
 

- La etiqueta ```<var>``` se emplea para definir variables.
 

- La etiqueta ```<samp>``` se usa para definir la salida de un programa.
 

- La etiqueta``` <kbd>``` define una combinación de teclas.
 

- La etiqueta ```<template>``` es usada para colocar código HTML y no interpretar las etiquetas



---
---

## :star:  Etiquetas de Diagramación

En lo que sigue vamos a estudiar dos etiquetas adicionales de HTML: <span> y <div>.

 

Existen dos etiquetas muy utilizadas en HTML que sirven como contenedores genéricos de una parte de nuestra página: ```<div>``` y ```<span>```. Usualmente estos contenedores no tienen un aspecto físico bien definido, pero son utilizados por los programadores para proporcionar un estilo específico a dicha parte usando CSS.

 

La etiqueta ```<div> ```representa agrupa un bloque de código HTML e inserta saltos de línea antes y después su contenido.

 

La etiqueta <span> agrupa una porción de una línea de código HTML.

 

A continuación usaremos el atributo style que permite definir un color de fondo con CSS, para ilustrar el comportamiento de la dos etiquetas:

```html
<p>
    Ejemplo de uso de la etiqueta <span style="background-color:lightblue">span</span> para ilustrar su uso.
</p>
<p>
    Ejemplo de uso de la etiqueta <div style="background-color:lightgreen">div</div> para ilustrar su uso.
</p>
```

---
---

## :star:  Etiqueta Figure

Vamos a estudiar algunos aspectos que tienen que ver con la etiqueta de HTML ```<figure>```.

La etiqueta ```<figure>``` representa un elemento autocontenido perteneciente al contenedor principal.

Es usada para encerrar imágenes, tablas, código entre otros. Un ejemplo de cómo podemos emplear esta etiqueta se muestra seguidamente:
```
<figure>
    <img src="https://free-images.com/sm/cede/lion_head_male_lion.jpg" alt="León">
</figure>
```
Esta etiqueta se usa en conjunto con la etiqueta ```<figcaption> ```para colocarle un título al contenido de <figure>, en este caso, una imagen, tal como se ilustra a continuación:

```
<figure>
     <img src="https://free-images.com/sm/cede/lion_head_male_lion.jpg" alt="León">
       <figcaption>Imagen 1.1: León</figcaption>
</figure>
```

---
---

## :star:  Etiqueta Iframe


El elemento iframe representa un contexto de navegación anidado, lo que es básicamente  un documento anidado en el documento actual. La dirección desde la cual el navegador  debería recuperar el documento incrustado puede ser provista en el atributo src y  últimamente, desde la llegada de HTML5, este documento también puede incluirse  completamente como contenido del atributo srcdoc. 

El comportamiento de la etiqueta iframe es parecido al de la etiqueta image respecto de  su posición en la página. Ambas son etiquetas en línea y admiten el atributo align para su  posicionamiento, o pueden ser posicionadas de la misma manera mediante el código CSS. 

para su correcto funcionamiento la etiqueta iframe debe tener su correspondiente  etiqueta de cierre, aunque entre estas dos etiquetas no se escriba nada: 

```
<iframe ….></iframe> 
```
Los atributos de la etiqueta iframe son: 

- ```src=”ruta_de_la_página”```: atributo obligatorio para indicar la página que se debe  cargar en esta ventana. 

- ```height=”altura”```: altura en píxeles de la ventana donde se muestra el iframe. ∙ width=”anchura”: anchura en píxeles de la ventana donde se muestra el iframe. El  valor puede ponerse también en tantos por ciento. Si no se ponen los atributos de  anchura y altura, el documento se mostrará en una pequeña ventana cuyas  medidas pueden variar dependiendo del navegador. También podemos definir la  anchura y la altura mediante el código CSS. 

- ```scrolling = “yes | no | auto”```: Barras de desplazamiento. El valor yes las muestra  siempre, el valor no nunca las muestra, y el valor auto las muestra sólo si son  necesarias. El valor por defecto es auto. 

- ```name=”nombre”``` Este atributo da un nombre a la etiqueta, y es imprescindible, si  queremos direccionar los enlaces hacia la ventana del iframe. Para ello se utiliza el  mismo mecanismo que para los frames (atributo target=”nombre” en el enlace, y  atributo name=”nombre” en el iframe).

### Ejemplo de etiqueta iframe 

Veamos cómo insertar un iframe en esta misma página que nos muestre la página  principal de la wikipedia. el código que hemos insertado es el siguiente: 
```
<iframe src=”https://es.wikipedia.org” width=”400″ height=”300″  name=”ventana”></iframe> 
```

---
---

## :star:  Etiquetas script y link

### Etiquetas

Ahora analizando las etiquetas para integrar CSS y código JavaScript en nuestro código.

HTML se usa conjuntamente con otras tecnologías con la ayuda de ciertas etiquetas y atributos. A continuación veremos las etiquetas para integrar CSS (Cascade Stylesheets) y JavaScript

### Para enlazar CSS

- Etiqueta ```<style>```: se emplea para insertar código CSS. Cabe mencionar que esta etiqueta debe ubicarse dentro del ```<head>```.


- Etiqueta ```<link>```:  se emplea dentro de la etiqueta ```<head>``` y permite enlazar un archivo con un CSS externo. Por ejemplo, el siguiente código: ```<link rel="stylesheet" type="text/css" href="estilo.css"> ```enlaza el archivo CSS estilo.css.


- Estilo en línea: podemos agregar el atributo style y asignarle como valor los estilos CSS que deseemos.


### Para enlazar JavaScript

- Etiqueta ```<script>```: se emplea para insertar código escrito en JavaScript.

- Etiqueta ```<script>``` con atributo src:  permite que enlacemos un archivo con código JavaScript externo. Por ejemplo, el siguiente código: ```<script src="funciones.js"></script>```, enlaza el archivo JavaScript,  funciones.js.

- JavaScript en etiquetas: podemos asociar código JavaScript que responda  a ciertos eventos. Por ejemplo, se emplea cuando deseamos ejecutar un código JavaScript al hacer click en un enlace. El siguiente código ilustra lo antes dicho: ```<a onclick="alert(1)">Presiona</a>. ```Este muestra un enlace que al darle click ejecuta alert(1) que despliega una ventana con el contenido “1”.



---
---

## :star:  Etiqueta de Video

En HTML5 se introduce la interesante posibilidad de mostrar videos directamente desde  nuestro navegador. De hecho, si arrastramos un video a la ventana del navegador,  veremos que comienza a reproducirse en él. Para poder insertar videos en nuestras  páginas HTML tenemos que utilizar la etiqueta ```<video>```, que junto a la  etiqueta``` <source> ```podremos utilizar estas capacidades multimedia de HTML5. 

La etiqueta ```<video>``` tiene varios atributos a nuestra disposición: 


- ```src=”direccion_url”```: Video que va a reproducir. 


- ``` poster=”direccion_url”```: Muestra una imágen a modo de presentación.


- ``` preload=”auto | metadata | none”```: Indica como realizar la precarga del video. 


- ```mediagroup=”nombre”```: Establece un nombre para un grupo de contenidos  multimedia. 


-``` autoplay=”boolean”```: Comienza a reproducir el video automáticamente. 


-```muted=”boolean”```: Muestra los controles de reproducción.  


-``` controls=”boolean”```: Muestra los controles de reproducción 


-``` width=”tamaño”```: Indica el tamaño de ancho del video 


-``` height=”tamaño”```: Indica el tamaño de alto del video 

Código de ejemplo: 

```<video src=”numen.mp4″ width=”1920″ height=”1080″></video> ```

Ésto mostrará el primer fotograma del video con un tamaño de 1920×1080, pero se verá  como una imágen ya que no muestra los controles del video y tampoco tiene la  reproducción automática activada. Se podría solucionar agregando los atributos controls o  autoplay.

### Formatos de video 

En primer lugar, debemos saber que un archivo de video tiene dos partes principales:  el formato contenedor, que es el formato del video en sí, mientras que en su interior  puede tener múltiples componentes codificados con diferentes codecs. 

Un video básico suele tener, como mínimo, un componente de video y otro de audio, pero  puede tener muchos más (subtítulos, imágenes, etc…). Estos detalles son muy  importantes, ya que dependiendo del formato y/o codec de un video, puede que sea  factible utilizarlo para web o no, así que hay que conocer un poco sobre estos conceptos. 

La etiqueta ```<source> ```puede tener los atributos src, type y establece un archivo de video o  lo añade como alternativa. 

La etiqueta ```<track>``` tiene los atributos src, srclang, label, kind, default y establece un  archivo de subtítulos o lo añade como alternativa. 

Si utilizamos la etiqueta <video> como etiqueta contenedora, podemos incluir  etiquetas <source> en su interior para proporcionar formatos alternativos y tener mayor  compatibilidad con otros navegadores y navegadores antiguos que no soporten HTML5: 

```html
<video width=“640” height=”480″ > 
 <source src=”video.mp4″ type=”video/mp4″ /> 
 <source src=”video.webm” type=”video/webm” /> 
 <source src=”image.png” alt=”Video no soportado” /> 
 Su navegador no soporta contenido multimedia 
</video> 
```

Los navegadores no mostrarán todos los contenidos a la vez, sino que seguirán el  siguiente procedimiento: 

- Intenta mostrar el primer formato (MP4). Si el navegador no soporta este formato,  salta al siguiente. 

- Intenta mostrar el segundo formato (WEBM). Si el navegador no soporta este  formato, salta al siguiente. 

- Intenta mostrar el tercer formato (OGV). Si el navegador no soporta este formato,  salta al siguiente. 

- Si se trata de un navegador que no soporta HTML5, intentará mostrar la imágen. ∙ Si se trata de un navegador de terminal de texto (o sin capacidades gráficas),  mostrará el texto “Su navegador no soporta contenido multimedia” 

De ésta manera tenemos soporte completo para todo tipo de dispositivos.


---
---

## :star: Etiqueta audio

Al igual que la etiqueta video, es posible insertar audio a nuestras páginas web. 

En éste caso utilizaremos la etiqueta <audio> que funciona exactamente igual que  ```<video>```, pero en relación a archivos de audio. 

Ésta etiqueta tiene varios atributos que podemos utilizar: 

- ```src=”direccion_url”```: Audio que va a reproducirse. 


- ```preload=”auto | metadata | none”```: Indica como realizar la precarga del audio. ∙ mediagroup=”nombre”: Establece un nombre para un grupo de contenidos  multimedia. 


-``` autoplay=”boolean”```: Comienza a reproducir el audio automáticamente. ∙ muted=”boolean”: Muestra los controles de reproducción.  


-``` controls=”boolean”```: Muestra los controles de reproducción 


-``` loop=”boolean”```: Vuelve a iniciar el audio cuando finaliza su reproducción. Ejemplo de cómo utilizar la etiqueta audio: 

```<audio src=“audio.mp3”></audio> ```

Sin embargo aún no va reproducir ningún sonido. Podemos agregarle el atributo controls para que muestre los controles y el usuario pueda darle play. 

Otros ejemplos básicos: 

```
<audio src=“audio.mp3″ preload=”none” controls ></audio> 
<audio src=”audio.ogg” autoplay loop ></audio> 
```
En el primer ejemplo, cargamos un audio en formato MP3, pero indicamos que no  precargue nada. Empezará a descargarse solo cuando el usuario pulse en los controles de  reproducción. Este escenario puede ser interesante para evitar consumo de ancho de  banda de archivos que es probable que el usuario no escuche o en dispositivos móviles  donde las tarifas de datos son costosas. 

Por otro lado, el segundo ejemplo, carga un archivo de audio en formato OGG y lo  reproduce automáticamente y en bucle, de modo que vuelve a empezar cuando termina.

### Formatos de audio 

Los archivos de audio están codificados mediante un codec específico, y es importante  conocer estos detalles para saber que formatos están soportados por los diferentes  navegadores. 

Éste es un listado de los formatos o codecs de audio más conocidos y utilizados: 

- MP3 (MPEG Layer-3) tiene buena calidad y soporte. 

- ACC (Advanced Audio Coding) Mejora el MP3. Usado como audio en MP4, tiene  buen soporte. 

- OGG (Ogg Vorbis) Buena calidad. Alternativa a MP3, soporte medio. ∙ Opus (Opus) Buena calidad. Alternativa a MP3, soporte medio. 

- FLAC (FLAC Audio Lossless) Compresión sin pérdidas. Alto tamaño. Buen soporte. ∙ WAV (Wave sound) Formato de Microsoft. Está soportado pero es muy pesado. 


### Audio (Avanzado) 

También la etiqueta <audio> puede activar como etiqueta contenedora e incluir varias etiquetas HTML para tener capacidades adicionales. 

- ```<source>``` Tiene los atributos src y type. Establece un archivo de audio o lo añade  como alternativa 

- ```<track> ```Tiene los atributos src, srclang, label, kind, default. Establece un archivo de  subtítulos o lo añade como alternativa. 

De esta forma, pasamos de un esquema donde solo usabamos una etiqueta ```<audio> ```a  otro un poco más avanzado, donde <audio> contiene múltiples etiquetas que actúan  sobre ese audio en cuestión.

### Audio Alternativo (fallback) 

Si utilizamos la etiqueta ```<audio> ```como etiqueta contenedora, podemos incluir etiquetas  <source> en su interior para proporcionar formatos alternativos y tener mayor  compatibilidad con otros navegadores y navegadores antiguos que no soporten HTML5. 

```
<audio> 
 <source src=”audio.opus” /> 
 <source src=”audio.ogg” /> 
 <source src=”audio.mp3″ /> 
</audio> 
```

En éste ejemplo, el navegador intentará reproducir el archivo de audio den formato Opus,  en caso de no estar soportado por el navegador, intentará reproducir el formato Ogg  Vorbis, y en caso de tampoco soportarlo, reproducirá el formato MP3.


---
---

## :star: ¿Qué es un SVG?

Los Gráficos Vectoriales Redimensionables o más conocidos por sus siglas en inglés SVG (Scalable Vector Graphics), son una especificación recomendada por el World Wide Web Consortium (W3C) desde septiembre de 2001 como estándar para describir gráficas de dos dimensiones en formato XML. Este estándar surge a partir de la idea de generar un formato de archivo para describir elementos gráficos vectoriales. Varias empresas como Microsoft con el VML (Vector Markup Language) y Adobe en coordinación con IBM, Netscape y SUN con su PGML (Precision Graphics Markup Language), participaron en las versiones previas de lo que luego se convertiría en SVG.

Entre las ventajas que tienen las imágenes SVG, se encuentran las siguientes: 

- generar archivos que ocupen poco espacio en la memoria y puedan comprimirse de manera óptima

- permitir que las imágenes puedan escalarse a cualquier tamaño sin perder nitidez (exceptuando tamaños muy pequeños)

- facilitar la creación de gráficas tanto estáticas como animadas la cuales pueden ser de los siguientes tipos: figuras vectoriales (por ejemplo: trazos que consisten en líneas rectas y curvas), imágenes y textos.

Las imágenes en formato SVG pueden agruparse, estilizarse, transformarse y componerse de objetos previamente renderizados. Dentro de sus características principales se encuentran las transformaciones anidadas, trazos recortados, capas de transparencia, efectos de filtro y objetos de plantilla.

 

Los dibujos SVG pueden ser interactivos y dinámicos; sus animaciones se definen e inician de manera declarativa (incrustando elementos SVG animados dentro del contenido) o utilizando lenguajes de script (por ejemplo JavaScript). Pueden desarrollarse aplicaciones sofisticadas utilizando lenguajes de script avanzados para manipular los archivos SVG a partir del Document Object Model (DOM).





---
---

## :star: Canvas

En esta oportunidad te mostraremos cómo trabajar con Canvas.

```<canvas>``` es una etiqueta que permite definir un lienzo para dibujar imágenes usando algún lenguaje de script. En general se usa JavaScript para dibujar en este lienzo. Y JavaScript tiene un conjunto de instrucciones para dibujar:

 
```
Figuras (círculos rectångulos, etc)
Texto
Imágenes
Colores de fondo
etc
```

Canvas es una alternativa a SVG y generalmente se utiliza para generar gráficos dinámicos en el momento. Un ejemplo que ilustra cómo utilizar la etiqueta ```<canvas>``` se muestra a continuación:

 
```
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Ejemplo</title>
</head>
<body>
   <h1>Ejemplo</h1>
   <canvas id="miCanvas" width="200" height="100"></canvas>
   <script>
       var c = document.getElementById("miCanvas");
       var ctx = c.getContext("2d");
       ctx.moveTo(0, 100);
       ctx.lineTo(200, 0);
       ctx.stroke();
   </script>
</body>
</html>
```

En este ejemplo se crea un lienzo de 200 de ancho por 100 de alto y se dibuja una línea desde la esquina inferior izquierda a la superior derecha.

Canvas también es usado para dibujar en 3D con una tecnología que se llama WebGL.




---
---

## :star: