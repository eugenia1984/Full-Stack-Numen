# :book: Modulo 3 : JavaScript

---
---

## :star: Unidad 5: DOM + AJAX

Temas:

Selección de elementos y grupos

Obtención de datos del DOM

Modificación del DOM

Modificación del CSSOM

Creación dinámica de elementos ymanejo de eventos

Browser API (localStorage, userMedia)

Asincronismo (async, await)

Promesas (then, catch)

Fetch API

Estructura de paquetes HTTP

Request methods

Status codes

JSON, CORS y Autenticació

---
---


# :star:  DOM y Ajax – Marco Teórico

## DOM 

Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por  aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle  color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos  cuenta que en cierta forma podemos estar bastante limitados. 

Si únicamente utilizamos HTML/CSS, sólo podremos crear páginasestáticas, pero si  añadimos Javascript, podremos crear páginasdinámicas. Cuando hablamos de páginas  dinámicas, nos referimos a que podemos dotar de la potencia y flexibilidad que nos da un  lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden  una experiencia más completa y con el que se puedan automatizar un gran abanico de  tareas y acciones. 


## ¿Qué es el DOM? 

Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del  documento HTML. Una página HTML está formada por múltiples etiquetas HTML,  anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se  denomina árbol DOM. 

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos  modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando  o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el  contenido de texto, etc… 

Al estar “amparado” por un lenguaje de programación, todas estas tareas se pueden  automatizar, incluso indicando que se realicen cuando el usuario haga acciones  determinadas, como por ejemplo: pulsar un botón, mover el ratón, hacer click en una  parte del documento, escribir un texto, etc…


## El objeto document 

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que  representa el árbol DOM de la página o pestaña del navegador donde nos encontramos.  En su interior pueden existir varios tipos de elementos, pero principalmente  serán Element o Node: 

- **Element** no es más que la representación genérica de una etiqueta: HTMLElement. 

- **Node** es una unidad más básica, la cuál puede ser o un nodo de texto. 

La especificación completa de DOM define 12 tipos de nodos, aunque las páginas HTML  habituales se pueden manipular manejando solamente cuatro o cinco tipos de nodos: 

- **Document**, nodo raíz del que derivan todos los demás nodos del árbol. 

- **Element**, representa cada una de las etiquetas HTML. Se trata del único nodo que  puede contener atributos y el único del que pueden derivar otros nodos. 

- **Attr**, se define un nodo de este tipo para representar cada uno de los atributos de  las etiquetas HTML, es decir, uno por cada par atributo=valor. 

- **Text**, nodo que contiene el texto encerrado por una etiqueta HTML. 

- **Comment**, representa los comentarios incluidos en la página HTML. 


#### getElementsByTagName() 

Como sucede con todas las funciones que proporciona DOM, la función **getElementsByTagName()** tiene un nombre muy largo, pero que lo hace  autoexplicativo. 

La función **getElementsByTagName(nombreEtiqueta)** obtiene todos los elementos de la  página HTML cuya etiqueta sea igual que el parámetro que se le pasa a la función. 

El siguiente ejemplo muestra cómo obtener todos los párrafos de una página XHTML: 

```
var parrafos = document.getElementsByTagName(“p”); 
```

El valor que se indica delante del nombre de la función (en este caso, document) es el  nodo a partir del cual se realiza la búsqueda de los elementos. En este caso, como se  quieren obtener todos los párrafos de la página, se utiliza el valor document como punto  de partida de la búsqueda.

El valor que devuelve la función es un array con todos los nodos que cumplen la condición  de que su etiqueta coincide con el parámetro proporcionado. El valor devuelto es un array  de nodos DOM, no un array de cadenas de texto o un array de objetos normales. Por lo  tanto, se debe procesar cada valor del array de la forma que se muestra en las siguientes  secciones. 

De este modo, se puede obtener el primer párrafo de la página de la siguiente manera: var primerParrafo = parrafos[0]; 

De la misma forma, se podrían recorrer todos los párrafos de la página con el siguiente  código: 

```
for(var i=0; I < parrafos.length; i++) { 
 var parrafo = parrafos[i]; 
} 
```

La función **getElementsByTagName()** se puede aplicar de forma recursiva sobre cada uno  de los nodos devueltos por la función. En el siguiente ejemplo, se obtienen todos los  enlaces del primer párrafo de la página: 


```
var parrafos = document.getElementsByTagName(“p”); 
var primerParrafo = parrafos[0]; 
var enlaces = primerParrafo.getElementsByTagName(“a”);
getElementsByName() 
```

La **función getElementsByName()** es similar a la anterior, pero en este caso se buscan los  elementos cuyo atributo name sea igual al parámetro proporcionado. En el siguiente  ejemplo, se obtiene directamente el único párrafo con el nombre indicado: 

```JavaScript
var parrafoEspecial = document.getElementsByName(“especial”); 
<p name=”prueba”>…</p> 
<p name=”especial”>…</p> 
<p>…</p> 
```

Normalmente el atributo name es único para los elementos HTML que lo definen, por lo  que es un método muy práctico para acceder directamente al nodo deseado. En el caso de  los elementos HTML radiobutton, el atributo name es común a todos los radiobutton que  están relacionados, por lo que la función devuelve una colección de elementos. 

#### getElementById() 

La función **getElementById()** es la más utilizada cuando se desarrollan aplicaciones web  dinámicas. Se trata de la función preferida para acceder directamente a un nodo y poder  leer o modificar sus propiedades. 

La función getElementById() devuelve el elemento HTML cuyo atributo id coincide con el  parámetro indicado en la función. Como el atributo id debe ser único para cada elemento  de una misma página, la función devuelve únicamente el nodo deseado. 

```
var cabecera = document.getElementById(“cabecera”); 
<div id=”cabecera”> 
 <a href=”/” id=”logo”>…</a> 
</div>
```

---

### Creación de elementos HTML simples 

Como se ha visto, un elemento HTML sencillo, como por ejemplo un párrafo, genera dos  nodos: el primer nodo es de tipo Element y representa la etiqueta <p> y el segundo nodo  es de tipo Text y representa el contenido textual de la etiqueta <p>. 

Por este motivo, crear y añadir a la página un nuevo elemento HTML sencillo consta de  cuatro pasos diferentes: 

- 1. Creación de un nodo de tipo Element que represente al elemento. 

- 2. Creación de un nodo de tipo Text que represente el contenido del elemento. 

- 3. Añadir el nodo Text como nodo hijo del nodo Element. 

- 4. Añadir el nodo Element a la página, en forma de nodo hijo del nodo  correspondiente al lugar en el que se quiere insertar el elemento. 

De este modo, si se quiere añadir un párrafo simple al final de una página HTML, es  necesario incluir el siguiente código JavaScript: 


```JavaScript
// Crear nodo de tipo Element 
var parrafo = document.createElement(“p”); 
// Crear nodo de tipo Text 
var contenido = document.createTextNode(“Hola Mundo!”); 
// Añadir el nodo Text como hijo del nodo Element 
parrafo.appendChild(contenido); 
// Añadir el nodo Element como hijo de la pagina 
document.body.appendChild(parrafo);
```

El proceso de creación de nuevos nodos puede llegar a ser tedioso, ya que implica la  utilización de tres funciones DOM: 

- **createElement(etiqueta)**: crea un nodo de tipo Element que representa al  elemento HTML cuya etiqueta se pasa como parámetro. 

- **createTextNode(contenido)**: crea un nodo de tipo Text que almacena el contenido  textual de los elementos HTML. 

- **nodoPadre.appendChild(nodoHijo)**: añade un nodo como hijo de otro nodo. Se  debe utilizar al menos dos veces con los nodos habituales: en primer lugar se  añade el nodo Text como hijo del nodo Element y a continuación se añade el  nodo Element como hijo de algún nodo de la página. 

---

### Eliminación de nodos 

Afortunadamente, eliminar un nodo del árbol DOM de la página es mucho más sencillo  que añadirlo. En este caso, solamente es necesario utilizar la función ```removeChild()```: 

```JavaScript
var parrafo = document.getElementById(“provisional”); 
parrafo.parentNode.removeChild(parrafo); 
<p id=”provisional”>…</p> 
```

La función **removeChild()** requiere como parámetro el nodo que se va a eliminar. Además,  esta función debe ser invocada desde el elemento padre de ese nodo que se quiere  eliminar. La forma más segura y rápida de acceder al nodo padre de un elemento es  mediante la propiedad nodoHijo.parentNode. 

Así, para eliminar un nodo de una página HTML se invoca a la función removeChild() desde  el valor parentNode del nodo que se quiere eliminar. Cuando se elimina un nodo, también  se eliminan automáticamente todos los nodos hijos que tenga, por lo que no es necesario  borrar manualmente cada nodo hijo.


---

### Modificación del DOM 

Una vez que se ha accedido a un nodo, el siguiente paso natural consiste en acceder y/o  modificar sus atributos y propiedades. Mediante DOM, es posible acceder de forma  sencilla a todos los atributos HTML y todas las propiedades CSS de cualquier elemento de  la página. 

Los atributos HTML de los elementos de la página se transforman automáticamente en  propiedades de los nodos. Para acceder a su valor, simplemente se indica el nombre del  atributo HTML detrás del nombre del nodo. 

El siguiente ejemplo obtiene de forma directa la dirección a la que enlaza el enlace: 

```
var enlace = document.getElementById(“enlace”); 
alert(enlace.href); // muestra http://www…com 

<a id=”enlace” href=”http://www…com”>Enlace</a> 
```


En el ejemplo anterior, se obtiene el nodo DOM que representa el enlace mediante la  función **document.getElementById()**. A continuación, se obtiene el atributo href del enlace  mediante enlace.href. Para obtener por ejemplo el atributo id, se utilizaría enlace.id. 

Las propiedades CSS no son tan fáciles de obtener como los atributos HTML. Para obtener  el valor de cualquier propiedad CSS del nodo, se debe utilizar el atributo style. 

El siguiente  ejemplo obtiene el valor de la propiedad margin de la imagen: 


```
var imagen = document.getElementById(“imagen”); 
alert(imagen.style.margin); 

<img id=”imagen” style=”margin:0; border:0;” src=”logo.png” /> 
```

Aunque el funcionamiento es homogéneo entre distintos navegadores, los resultados no  son exactamente iguales, como muestran las siguientes imágenes que son el resultado de  ejecutar el código anterior en distintos navegadores: 


Si el nombre de una propiedad CSS es compuesto, se accede a su valor modificando  ligeramente su nombre: 

```javaScript
var parrafo = document.getElementById(“parrafo”); 
alert(parrafo.style.fontWeight); // muestra “bold” 

<p id=”parrafo” style=”font-weight: bold;”>…</p> 
```

La transformación del nombre de las propiedades CSS compuestas consiste en eliminar  todos los guiones medios (-) y escribir en mayúscula la letra siguiente a cada guión medio.  A continuación se muestran algunos ejemplos: 

- font-weight se transforma en **fontWeight** 

- line-height se transforma en **lineHeight** 

- border-top-style se transforma en **borderTopStyle** 

- list-style-image se transforma en **listStyleImage**


---

### Eventos 

Hasta ahora, todas las aplicaciones y scripts que se han creado tienen algo en común: se  ejecutan desde la primera instrucción hasta la última de forma secuencial. Gracias a las  estructuras de control de flujo (if, for, while) es posible modificar ligeramente este  comportamiento y repetir algunos trozos del script y saltarse otros trozos en función de  algunas condiciones. 

Este tipo de aplicaciones son poco útiles, ya que no interactúan con los usuarios y no  pueden responder a los diferentes eventos que se producen durante la ejecución de una  aplicación. Afortunadamente, las aplicaciones web creadas con el lenguaje JavaScript  pueden utilizar el modelo de programación basada en eventos. 

En este tipo de programación, los scripts se dedican a esperar a que el usuario “haga  algo” (que pulse una tecla, que mueva el ratón, que cierre la ventana del navegador). A  continuación, el script responde a la acción del usuario normalmente procesando esa  información y generando un resultado. 

Los eventos hacen posible que los usuarios transmitan información a los programas.  JavaScript define numerosos eventos que permiten una interacción completa entre el  usuario y las páginas/aplicaciones web. La pulsación de una tecla constituye un evento, así  como pinchar o mover el ratón, seleccionar un elemento de un formulario, redimensionar  la ventana del navegador, etc. 

JavaScript permite asignar una función a cada uno de los eventos. De esta forma, cuando  se produce cualquier evento, JavaScript ejecuta su función asociada. Este tipo de  funciones se denominan “event handlers” en inglés y suelen traducirse por “manejadores  de eventos”. 

Cada elemento o etiqueta HTML define su propia lista de posibles eventos que se le  pueden asignar. Un mismo tipo de evento (por ejemplo, pinchar el botón izquierdo del  ratón) puede estar definido para varios elementos HTML diferentes y un mismo elemento  HTML puede tener asociados varios eventos diferentes. 

El nombre de cada evento se construye mediante el prefijo on, seguido del nombre en  inglés de la acción asociada al evento. Así, el evento de pinchar un elemento con el ratón  se denomina onclick y el evento asociado a la acción de mover el ratón se  denomina onmousemove.

La siguiente tabla resume los eventos más importantes definidos por JavaScript:

```
Evento  	Descripción 	                                    		     Elementos para los que está definido
--------        --------------------------                          		     ---------------------------------------
onblur 	        Deseleccionar  el elemento	                    		      <button>, <input>, <label>, <select>, <textarea>, <body >
onchange	Deseleccionar  un elemento  que se ha  modificado    		      <input>, <select>, <textarea>
onclick 	Pinchar y soltar  el ratón 	                    		      Todos los elementos
ondblclick	Pinchar dos  veces seguidas  con el ratón	    		      Todos los elementos
onfocus 	Seleccionar un  elemento	                    		      <button>, <input>, <label>, <select>, <textarea>, <body >
onkeydown 	Pulsar una tecla  (sin soltar) 	                    		      Elementos de formulario y <body>
onkeypress 	Pulsar una tecla 	                            		      Elementos de formulario y <body>
onkeyup 	Soltar una tecla  pulsada 	                     		      Elementos de formulario y <body>
onload	        La página se ha  cargado  completamente              		      <body>
onmousedow n	Pulsar (sin  soltar) un botón  del ratón	                      Todos los elementos
onmousemov e	Mover el ratón 	                                                      Todos los elementos
onmouseout	El  ratón “sale” del  elemento (pasa  por encima de otro elemento)    Todos los elementos
onmouseover	El  ratón “entra” e n el elemento  (pasa por  encima del  elemento)   Todos los elementos
onmouseup	Soltar el botón  que estaba  pulsado en el  ratón	              Todos los elementos
onreset	        Inicializar el  formulario  (borrar todos  sus datos)	              <form>
onresize	Se ha  modificado el  tamaño de la  ventana del  navegador	      <body>
onselect 	Seleccionar un  texto	                                              <input>, <textarea>
onsubmit 	Enviar el  formulario 	                                              <form>
onunload	Se abandona la  página (por  ejemplo al  cerrar el  navegador)	      <body>
```



Los eventos más utilizados en las aplicaciones web tradicionales son onload para esperar a  que se cargue la página por completo, los  eventos:

onclick

onmouseover

onmouseout 

para controlar el ratón y onsubmit para controlar el envío de los formularios. 


Algunos eventos de la tabla anterior (onclick, onkeydown, onkeypress, onreset, onsubmit)  permiten evitar la “acción por defecto” de ese evento. Más adelante se muestra en detalle  este comportamiento, que puede resultar muy útil en algunas técnicas de programación. 


Las acciones típicas que realiza un usuario en una página web pueden dar lugar a una  sucesión de eventos. Al pulsar por ejemplo sobre un botón de tipo ```<input  type=”submit”>``` se desencadenan los  eventos onmousedown, onclick, onmouseup y onsubmit de forma consecutiva. 


--


### Manejadores de eventos 

Un evento de JavaScript por sí mismo carece de utilidad. Para que los eventos resulten  útiles, se deben asociar funciones o código JavaScript a cada evento. De esta forma,  cuando se produce un evento se ejecuta el código indicado, por lo que la aplicación  puede responder ante cualquier evento que se produzca durante su ejecución. 

Las funciones o código JavaScript que se definen para cada evento se  denominan “manejador de eventos” y como JavaScript es un lenguaje muy flexible, existen  varias formas diferentes de indicar los manejadores: 

- Manejadores como atributos de los elementos XHTML. 

- Manejadores como funciones JavaScript externas. 

- Manejadores “semánticos”. 


---

### Manejadores de eventos como atributos HTML 

Se trata del método más sencillo y a la vez menos profesional de indicar el código  JavaScript que se debe ejecutar cuando se produzca un evento. En este caso, el código se  incluye en un atributo del propio elemento HTML. En el siguiente ejemplo, se quiere  mostrar un mensaje cuando el usuario pinche con el ratón sobre un botón: 

```html
<input type=”button” value=”Pinchame y verás” onclick=”alert(‘Gracias por pinchar’);” />
```

En este método, se definen atributos HTML con el mismo nombre que los eventos que se  quieren manejar. El ejemplo anterior sólo quiere controlar el evento de pinchar con el  ratón, cuyo nombre es onclick. Así, el elemento HTML para el que se quiere definir este  evento, debe incluir un atributo llamado onclick. 

El contenido del atributo es una cadena de texto que contiene todas las instrucciones  JavaScript que se ejecutan cuando se produce el evento. En este caso, el código JavaScript  es muy sencillo (alert(‘Gracias por pinchar’);), ya que solamente se trata de mostrar un  mensaje. 

En este otro ejemplo, cuando el usuario pincha sobre el elemento <div> se muestra un  mensaje y cuando el usuario pasa el ratón por encima del elemento, se muestra otro  mensaje: 


```html
<div onclick=”alert(‘Has pinchado con el ratón’);” onmouseover=”alert(‘Acabas de pasar el  ratón por encima’);”> 
```

Puedes pinchar sobre este elemento o simplemente pasar el ratón por encima ```</div> ```

Este otro ejemplo incluye una de las instrucciones más utilizadas en las aplicaciones  JavaScript más antiguas: 


```html
<body onload=”alert(‘La página se ha cargado completamente’);”> 
 … 
</body> 
```

El mensaje anterior se muestra después de que la página se haya cargado completamente,  es decir, después de que se haya descargado su código HTML, sus imágenes y cualquier  otro objeto incluido en la página. 

El evento onload es uno de los más utilizados ya que, como se vio en el capítulo de DOM,  las funciones que permiten acceder y manipular los nodos del árbol DOM solamente están  disponibles cuando la página se ha cargado completamente.

---

### Manejadores de eventos y variable this 

JavaScript define una variable especial llamada this que se crea automáticamente y que se  emplea en algunas técnicas avanzadas de programación. En los eventos, se puede utilizar  la variable this para referirse al elemento HTML que ha provocado el evento. Esta variable  es muy útil para ejemplos como el siguiente: 

Cuando el usuario pasa el ratón por encima del <div>, el color del borde se muestra de  color negro. Cuando el ratón sale del ```<div>```, se vuelve a mostrar el borde con el color gris  claro original. 

Elemento``` <div>``` original: 


```html
<div id=”contenidos” style=”width:150px; height:60px; border:thin solid silver”>  
  Sección de contenidos… 
</div> 
```

Si no se utiliza la variable this, el código necesario para modificar el color de los bordes,  sería el siguiente: 

```html
<div id=”contenidos” style=”width:150px; height:60px; border:thin solid silver” onmouseover=”document.getElementById(‘contenidos’).style.borderColor=’black’;” onmouseout=”document.getElementById(‘contenidos’).style.borderColor=’silver’;”> 
 Sección de contenidos… 
</div>
```

El código anterior es demasiado largo y demasiado propenso a cometer errores. Dentro  del código de un evento, JavaScript crea automáticamente la variable this, que hace  referencia al elemento HTML que ha provocado el evento. Así, el ejemplo anterior se  puede reescribir de la siguiente manera: 

```html
<div id=”contenidos” style=”width:150px; height:60px; border:thin solid silver” onmouseover=”this.style.borderColor=’black’;” 
onmouseout=”this.style.borderColor=’silver’;”> 
 Sección de contenidos… 
</div> 
```

El código anterior es mucho más compacto, más fácil de leer y de escribir y sigue  funcionando correctamente aunque se modifique el valor del atributo id del ```<div>```. 

---


### Manejadores de eventos como funciones externas 

La definición de los manejadores de eventos en los atributos HTML es el método más  sencillo pero menos aconsejable de tratar con los eventos en JavaScript. El principal  inconveniente es que se complica en exceso en cuanto se añaden algunas pocas  instrucciones, por lo que solamente es recomendable para los casos más sencillos. 

Si se realizan aplicaciones complejas, como por ejemplo la validación de un formulario, es  aconsejable agrupar todo el código JavaScript en una función externa y llamar a esta  función desde el elemento HTML. 

Siguiendo con el ejemplo anterior que muestra un mensaje al pinchar sobre un botón:
```html
 <input type=”button” value=”Pinchame y verás” onclick=”alert(‘Gracias por pinchar’);” />
```

Utilizando funciones externas se puede transformar en: 


```javaScript
function muestraMensaje() { 
 alert(‘Gracias por pinchar’); 
} 
```

```html
<input type=”button” value=”Pinchame y verás” onclick=”muestraMensaje()” /> 
```

Esta técnica consiste en extraer todas las instrucciones de JavaScript y agruparlas en una  función externa. Una vez definida la función, en el atributo del elemento XHTML se incluye  el nombre de la función, para indicar que es la función que se ejecuta cuando se produce  el evento. 

La llamada a la función se realiza de la forma habitual, indicando su nombre seguido de los  paréntesis y de forma opcional, incluyendo todos los argumentos y parámetros que se  necesiten. 

El principal inconveniente de este método es que en las funciones externas no se puede  seguir utilizando la variable this y por tanto, es necesario pasar esta variable como  parámetro a la función: 


```JavaScript
function resalta(elemento) { 
 switch(elemento.style.borderColor) { 
  case ‘silver’: 
  case ‘silver silver silver silver’: 
  case ‘#c0c0c0’: 
     elemento.style.borderColor = ‘black’; 
     break; 
  case ‘black’: 
  case ‘black black black black’: 
  case ‘#000000’:
     elemento.style.borderColor = ‘silver’; 
     break; 
 } 
} 
```

```html
<div style=”width:150px; height:60px; border:thin solid silver” 
onmouseover=”resalta(this)” onmouseout=”resalta(this)”> 
 Sección de contenidos… 
</div> 
```

En el ejemplo anterior, la función externa es llamada con el parámetro this, que dentro de  la función se denomina elemento. La complejidad del ejemplo se produce sobre todo por  la forma en la que los distintos navegadores almacenan el valor de la  propiedad borderColor. 

Mientras que Firefox almacena (en caso de que los cuatro bordes coincidan en color) el  valor black, Internet Explorer lo almacena como black black black black y Opera almacena  su representación hexadecimal #000000.





---
---

# :star: Promise – Lectura


##Promises
 

Javascript es muy potente a la hora de trabajar con tareas asincrónicas, podemos programar funciones y código que hacen uso de `callbacks` para ejecutar código en el futuro cercano, cuando un evento sucede o cuando se termina la ejecución de un proceso (escribir en la base de datos, o escribir en el disco, hacer un request http, etc…).

Esto es genial, pero a veces nos sucede que tenemos callbacks anidadas, es decir, que dentro de un callback tenemos otro callback y así sucesivamente, y también tenemos problemas donde tenemos que esperar que dos o más eventos terminen para continuar la ejecución de nuestro código. Si bien podemos resolverlo sin problemas con callbacks, vamos a ver que nuestro código empieza a hacerse difícil de leer, muy difícil de controlar si hay errores (no sabemos qué función es la que realmente produjo el error), y si tenemos que buscar un bug dentro del código nos daremos cuenta que, sin querer, hemos terminado dentro del Callback Hell.


```JavaScript
function hell(win) {
  // for listener purpose
  return function() {
    loadLink(win, REMOTE_SRC+'/assets/css/style.css', function() {
       loadLink(win, REMOTE_SRC+'/lib/async.js', function(){
         loadLink(win, REMOTE_SRC+'lib/json2.js', function() {
          });
       });
    });
  };
}

```

Se pueden imaginar, por los nombres que eligieron para esto, que no es una situación deseada en nuestro código. También van a pensar, que es un mal necesario, ya que de esta forma puedo lograr que mi aplicación se comporte de acuerdo a los requerimientos asincrónicos que hay en el medio.

---
---

# :star: Promises al rescate

Cuando programamos en lenguajes que son bloqueantes, como `C++` o `python`, perdemos el poder del asincronismo, pero ganamos legibilidad, ya que una línea de código se ejecuta exactamente cuando termina al anterior (si la anterior tarda 3 horas, vamos a esperar a que termine), esto hace que el código sea fácil de leer ya que siguiendo la línea de ejecución vamos a ver qué cosas suceden antes o después, esto mismo no lo podemos hacer con callbacks (o por lo menos sin entrar al Callback hell):


¿No sería genial si pudieras escribir código como si fuera sincrónico, pero que la ejecución fuera asincrónica? 

¡Esta pregunta seguramente se hicieron los inventores de las Promises de Javascript!

Justamente las Promises en Js intentan solucionar el problema del callback hell y lograr que el código sea más legible, más fácil de debuggear y que tengamos mayor control sobre los errores. Veamos cómo funcionan las promises.

---
---

# :star:  ¿Qué es una Promesa?

Una promesa representa el resultado eventual (en un futuro incierto) de una operación asincrónica, como, por ejemplo: un registro de una db, una página que pedimos por http, un objeto JSON que es respuesta de un request a un API. Es decir, que representa un placeholder (un lugar reservado) donde vamos a guardar la respuesta del método asincrónico (o un posible error en caso que no sea exitosa).
Como nos podemos imaginar, una promesa puede ser exitosa o no, y una misma promesa no se puede ejecutar dos veces, una vez que termina se convierte en inmutable (no puede cambiar). Además, si a una promesa le agregamos un callback (lo podemos agregar en cualquier momento), este será ejecutará cuando esta termine. Esto es genial, porque ya no nos interesa en qué momento se producen las cosas, si no en reaccionar al resultado de esas cosas.

 

### Terminología de promises:

Una promesa puede estar:

• Pendiente (pending): El estado inicial de un promise.

• Completada (fullfilled): Representa que se completó de manera exitosa.

• Rechazada (rejected): La operación terminó, pero de manera fallida.

• Terminada (settled): La operación terminó, de cualquiera de las dos maneras anteriores.

 

### Promises en JavaScript

Antes de ES6 (EcmaScript 6) javascript no soportaba nativamente las Promises, pero como el concepto ya estaba dando vuelta en la cabeza de algunos desarrolladores aparecieron varias librerías que lo implementaban.
Si bien el concepto es el mismo, y de hecho se creó un standard para las promises, no todas las implementaciones son iguales ni respetan el standard. Ustedes se preguntarán porque no usamos directamente las promises que definieron los científicos de EcmaScript, pero resulta que hay un serio debate online por las perfomances de las mismas en términos de tiempo y memoria, la gente de Bluebird hizo algunos benchmarks, y si los examinamos vemos que las promesas nativas de ES6 están todavía muy abajo en la lista.




---
---

# :star: Creando una promesa

Una Promise es una clase en JavaScript, así que para instanciar una nueva vamos a el keyword `new`. Una Promise recibe un sólo argumento: una función con dos parámetros: `reject` y `resolve`. Dentro de esta función vamos a hacer lo que necesitemos y, si todo salió bien, llamamos `resolve` y si no, (algo salió mal), llamamos `reject`..

```JavaScript
var promise = new Promise(function(resolve, reject) {
  if(/* todo funciono como esperabamos*/) {
    resolve("Joya!");
  } else {
    reject(Error("Algo de rompio"));
  }
});
```

-> En el método `reject` podemos pasar cualquier cosa, pero se recomienda devolver un objeto de tipo `Error` ya que estos tienen el `stack trace` y es más fácil de debugear.

###  Haciendo algo cuando una promesa se ‘cumple’

En el statement anterior hemos _definido_ una promesa y la hemos guardado en la variable `promise`. Ahora, para usar esa promesa, debemos de alguna forma poder decirle qué hacer cuando se resuelva o se rechace la promesa. Para eso vamos a usar el método `then`:

```JavaScript
promise.then(function(data) {
  // ejecuto codigo sabiendo que todo salio bien
  // siguiendo el ejemplo de arriba, data tendria adentro el string 'Joya'
  }, function(error) {
     // la promesa fue rechazada, aca ejecutamos codigo para ese caso
     // sigueindo el ejemplo de arriba, error tendria adentro el string 'Algo salio mal'
  }
})
```


La función `then` de las promises recibe dos argumentos, un callback de `sucess` y un callback de `failure`, que van a ser llamadas según si el promise terminó en un `resolve` o un `reject` respectivamente. Los parámetros que le llegan a esta funcion (en el ejemplo `data` y `error`) son los mismos parámetros con los que llamamos a las funciones `resolve` y `reject`.
Podemos escribir los mismo que arriba, pero en vez de pasar dos callbacks a `then`, vamos a usar otro método similar llamado `catch`. Básicamente, al separarlos de este modo, con el `then` vamos a llamar un callback cuando el Promise termina en éxito, y con `catch` vamos a llamar un callback cuando termina en error:


```JavaScript
promise.then(function(data) {
  // ejecuto codigo sabiendo que todo salio bien
  // siguiendo el ejemplo de arriba, data tendria adentro el string 'Joya'
}). catch(function(error) {
     // la promesa fue rechazada, aca ejecutamos codigo para ese caso
     // sigueindo el ejemplo de arriba, error tendria adentro el string 'Algo salio mal'
});
```

-> Este último pedazo de código con `then-catch` es equivalente (hace lo mismo) que el anterior donde `then` recibe dos callbacks. Es simplemente una forma más simple de escribir código

---
---

# :star:  Encadenando Promesas

## Encadenando Promesas

Algo muy potente de las Promises es que vamos a poder encadenarlas (chaining), ya que podemos hacer que un Promise retorne otro Promise, y de esa forma ir encadenando métodos. Por ejemplo:

```JavaScript
var primerMetodo = function() {
  var promise = new promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Termino el primer metodo');
      resolve({num: '123'}); // pasamos unos datos para ver como los manejamos
      }, 2000); // para simular algo asincronico hacemos un setTimeout de 2 seg
    })
  })
}

var segundoMetodo = function(datos) {
  var promise = new Promise(function(resolve, reject){
     setTimeout(function() {
       console.log('Termino el segundo metodo');
       resolve({nuevosDatos: datos.num + 'concatenamos texto y lo pasamos'});
     }, 2000);
  })
}

primerMetodo()
  .then(segundoMetodo) {};
```

En el ejemplo hemos creado tres métodos donde simulamos algo asincrónico, o sea que no sabemos cuándo se va a terminar de ejecutar y como vemos, todos crean una Promise nueva dentro de ellos y la retornan. Para llamarlos, invocamos al primer método y le decimos con
`then` que si termina exitosamente ejecute la función `segundoMetodo`, esta también devuelve una Promise, por lo tanto, también podemos llamar a `then` sobre ella, con esto invocamos tercerMetodo (que también retorna una Promise) y a este última le pasamos una función anónima pidiendo que imprima por consola los datos que recibió como argumento en `resolve`. Si lo ejecutan en su browser verán cómo es el flujo de datos y en qué orden se imprimen los `console.log`s.


---
---

# :star: Async/Await

En ES2017 se introducen las palabras clave async/await, que no son más que una forma de azúcar sintáctico para gestionar las promesas de una forma más sencilla. Con async/await seguimos utilizando promesas, pero abandonamos el modelo de encadenamiento de .then() para utilizar uno en el que trabajamos de forma más tradicional.


En primer lugar, tenemos la palabra clave async. Esta palabra clave se colocará previamente a function, para definirla, así como una función asíncrona, el resto de la función no cambia:


```JavaScript
async function funcion_asincrona() {
  return 42;
}
```

En el caso de que utilicemos arrow function, se definiría como vemos a continuación, colocando el async justo antes de los parámetros de la arrow function:

```JavaScript
const funcion_asincrona = async() => 42;
```

Al ejecutar la función veremos que ya nos devuelve una promise que ha sido cumplida, con el valor devuelto en la función (en este caso, 42). De hecho, podríamos utilizar un .then() para manejar la promesa:

```JavaScript
function_asincrona().then(value => {
  console.log('El resultado devuelto es: ', value);
});
```

Sin embargo, veremos que lo que se suele hacer junto a async es utilizar la palabra clave await, que es donde reside lo interesante de utilizar este enfoque.


## La palabra clave Await
 

Cualquier función definida con async, o lo que es lo mismo, cualquier promise puede utilizarse junto a la palabra clave await para manejarla. Lo que hace await es esperar a que se resuelva la promesa, mientras permite continuar ejecutando otras tareas que puedan realizarse:


Observa que en el caso de value, que se ejecuta sin await, lo que obtenemos es el valor devuelto por la función, pero «envuelto» en una promesa que deberá utilizarse con .then() para manejarse. Sin embargo, en asyncValue estamos obteniendo un tipo de dato Number, guardando el valor directamente ya procesado, ya que await espera a que se resuelva la promesa de forma asíncrona y guarda el valor.

```JavaScript

const funcion_asincrono = async () => 42;

const value = funcion_asincronica();
const asyncValue = await funcion_asincronica();
``` 

Esto hace que la forma de trabajar con async/await, aunque se sigue trabajando exactamente igual con promesas, sea mucho más fácil y trivial para usuarios que no estén acostumbrados a las promesas y a la asincronía en general, ya que el código «parece» síncrono. 


---
---
