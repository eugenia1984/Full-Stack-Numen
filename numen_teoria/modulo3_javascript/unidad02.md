# :book: Modulo 3 : JavaScript

---

## :star: Unidad 2: Programación avanzada con funciones

Temas:

Funciones

Parámetros

Variables globales y locales

Objetos

Función constructora y new

Métodos vs funciones

Uso del This para el público y privado

---
---

## :star: Funciones 

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una  función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que  realiza una tarea o calcula un valor, pero para que un procedimiento califique como  función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia  entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del  ámbito desde el que deseas llamarla. 

Programar, usando un símil, podemos verlo como realizar un viaje por carretera. Cuando  realizamos un viaje, aparte de la necesidad de definir el objetivo y estudiar la ruta del viaje  (estructura del programa) podemos decir que: “En general, pero sobre todo para viajes  complicados, conviene dividir el problema en subapartados”. 

El concepto de función aplicado a la programación JavaScript es muy similar al aplicable a  distintas facetas de la vida: un escritor divide su curso en capítulos y apéndices. Un  profesor divide el contenido de la asignatura en temas. Un ingeniero divide el proyecto en  partes como Memoria, Anejos, Pliego de Condiciones, Presupuesto y Planos. En una  fábrica, organizan el trabajo dividiendo las áreas funcionales en recepción de materias  primas, área de pre-proceso, área de proceso, área de post-proceso y área de carga y  despacho de producto terminado. 

De cara a la programación JavaScript, usaremos la división del código en funciones por ser  una estrategia efectiva para resolver problemas complejos. Cada función será llamada  para realizar su cometido en un orden establecido. 

Además una función se puede llamar tantas veces como se desee, lo cual evita tener que  repetir código y por otro lado permite que cuando haya que realizar una corrección  únicamente tengamos que hacerla en la función concreta que se ve afectada. 

Las funciones pueden recibir información para realizar su cometido, por ejemplo function  suma (a, b) recibe dos elementos de información: a y b, o no recibirla por realizar un  proceso que no necesita recibir información, por ejemplo function dibujarCirculo(). 

Otra característica interesante de las funciones es que permite abstraer los problemas.  Supongamos que necesitamos una función que devuelva para un importe de una compra  sin impuestos el importe con impuestos, y que a su vez el porcentaje de impuestos a  aplicar depende del tipo de producto. Si un compañero nos facilita la función function  obtenerImporteConImpuestos (importeSinImpuestos) no tenemos que preocuparnos del  código de la función. Unicamente sabemos que invocando a la función obtendremos el  importe con impuestos. De esta forma, podemos utilizar funciones que han creado otros  programadores o funciones disponibles en librerías sin necesidad de conocer el código de  las mismas. Decimos que las funciones son “cajas negras” que facilitan la abstracción  porque no necesitamos ver en su interior, sólo nos interesan sus resultados.

De hecho, es posible que un programador use un código para una función function  obtenerImporteConImpuestos (importeSinImpuestos) y otro programador use otro código  para esa misma función sin que esto suponga ningún problema. Lo importante es que la  función realice su cometido, no cómo lo realice ya que es frecuente que haya distintas  maneras de hacer algo (aunque ciertamente hacer las cosas de diferente manera no debe  significar que unas veces se hagan bien y otras mal: siempre deberían hacerse las cosas  bien). 

Una función en general debe tener un nombre descriptivo de cuál es su cometido y tener  un cometido claro y único. No deben mezclarse tareas que no tengan relación entre sí  dentro de una función. 


---

### Funciones con Parámetros y sin Parámetros 

Una función JavaScript puede requerir ser llamada pasándole cierta información o no  requerir información. 

Definición de una función sin parámetros (no requiere información): // Comentario descriptivo de qué hace la función 


```
function nombreDeLaFunción () {  
   // Código de la función 
} 
```

Definición de una función con parámetros (requiere información): 


```
// Comentario descriptivo de qué hace la función 

function nombreDeLaFunción (param1, param2, …, paramN) {  
   // Código de la función 
} 
```


Una función puede recibir tantos parámetros como se deseen, aunque no sería demasiado  razonable que una función reciba más de cuatro o cinco parámetros. Los parámetros que se le pasan a la función pueden ser: 

- a) Valores simples a los que se denomina literales: por ejemplo 554, true ó ‘aldea’. 

- b) Variables que contienen un número, un texto o un valor booleano. 

- c) Objetos de naturaleza compleja, como arrays y otros tipos de objetos que veremos más  adelante.

Cuando una función recibe un parámetro dicho parámetro funciona como si se tratara de  una variable disponible para la función inicializada con el valor que se le pasa a la función. 

Veamos un ejemplo: 

```JavaScript
function mostrarImporteConImpuestos(importeSinImpuestos) { 
    var importeConImpuestos; 
    importeConImpuestos = importeSinImpuestos * 1.21;  
    msg = ‘Importe antes de impuestos: ‘+ importeSinImpuestos + ‘\n\n’;  
    alert(msg + ‘Importe con impuestos: ‘+ importeConImpuestos + ‘\n\n’); 
}
``` 

Aquí vemos dos cosas de interés: el parámetro que recibe la función no tiene un tipo de  datos explícito. El tipo de datos es “inferido” por el intérprete JavaScript. Por otro lado, el parámetro está disponible dentro de la función con el valor con el que  haya sido invocado. Por ejemplo ```onclick=”mostrarImporteConImpuestos(100)”``` hará que  importeSinImpuestos valga 100 porque ese es el valor con el que se invoca. Cuando una función tiene varios parámetros, se debe invocar escribiendo su nombre  seguido de los parámetros en el orden adecuado. 


---

### Funciones que devuelven un resultado (return) 

Una función JavaScript puede devolver un resultado si se introduce la sentencia return  resultado; donde resultado es aquello que queremos devolver (normalmente una variable  que contiene un valor numérico, de texto o booleano, pero también podrían ser objetos  con mayor complejidad como un array). 

Una vez se llega a la sentencia return se produce la devolución del resultado y se  interrumpe la ejecución de la función. Por ello la sentencia return será normalmente la  última instrucción dentro de una función. 

Definición de una función sin parámetros que devuelve un resultado: 

```JavaScript
// Comentario descriptivo de qué hace la función 

function nombreDeLaFunción () {  
   // Código de la función 
   return resultado; 
}
```

Definición de una función con parámetros que devuelve un resultado: 



```JavaScript
// Comentario descriptivo de qué hace la función 

function nombreDeLaFunción (param1, param2, …, paramN) {  
   // Código de la función 
   return resultado; 
} 
```

Una función sólo devolverá un resultado y normalmente sólo tendrá una sentencia return,  aunque si hay sentencias condicionales como if, puede haber varias sentencias return: una  sentencia return para cada sentencia condicional. 

Si además del resultado la función incluye código que implique acciones como mostrar un  mensaje por pantalla, se ejecutará el código a la vez que se devuelve el resultado. 

Veamos un ejemplo: 


```JavaSCript
function obtenerImporteConImpuestos(importeSinImpuestos) { 
      var importeConImpuestos; 
      importeConImpuestos = importeSinImpuestos * 1.21; 
      return importeConImpuestos; 
} 
```


Un ejemplo de uso de esta función sería: 


```
onclick=”alert(‘Calculado para producto de precio 100: importe con impuestos vale ‘ +  obtenerImporteConImpuestos(100));”```


---


### Llamadas a Funciones desde otras funciones 

Una función puede llamar a otra función simplemente escribiendo su nombre y los  parámetros que sean necesarios. Ejemplo: 


```javaScript
function mostrarImporteConImpuestos2(importeSinImpuestos) { 
       var msg; msg = ‘Ejemplo. Importe antes de impuestos: ‘+ importeSinImpuestos + ‘\n\n’; 
       alert(msg + ‘Importe con impuestos: ‘+  
       obtenerImporteConImpuestos(importeSinImpuestos) + ‘\n\n’); 
} 
```


En esta función en vez de realizarse el cálculo del importe con impuestos, se invoca otra  función que es la que se encarga de realizar el cálculo y devolver el valor correspondiente. 


---

### Parámetros 

Los parámetros son variables locales a los que se les asigna un valor antes de comenzar la  ejecución del cuerpo de una función. Su ámbito de validez, por tanto, es el propio cuerpo  de la función. El mecanismo de paso de parámetros a las funciones es fundamental para  comprender el comportamiento de los programas 


#### Paso de parámetros a Funciones 

Hay dos formas comunes de pasar parámetros a funciones en programación: por valor,  que implica que si se pasa una variable sus cambios sólo son conocidos dentro de la  función, o por variable, que implica que si se pasa una variable ésta puede ser modificada  por la función y sus cambios ser conocidos fuera de la función. JavaScript trabaja con paso  de parámetros por valor, lo que implica que la variable pasada como parámetro funciona  como una variable local a la función: si el parámetro sufre cambios, estos cambios sólo  son conocidos dentro de la función. La variable “verdadera” no puede ser modificada. 


#### Paso de un número de parámetros incorrectos 

Si se pasan más parámetros de los necesarios, JavaScript ignorará los parámetros  sobrantes. Si se pasan menos parámetros de los necesarios, JavaScript asignará valor  undefined a los parámetros de los que no se recibe información y se ejecutará sin que  surja ningún mensaje de error (aparte de los posibles resultados extraños que esto  pudiera ocasionar).


---


#### Variables globales y locales 

El ámbito de una variable (llamado “scope” en inglés) es la zona del programa en la que se  define la variable. JavaScript define dos ámbitos para las variables: global y local. El siguiente ejemplo ilustra el comportamiento de los ámbitos: 


```JavaScript
function creaMensaje() { 
 var mensaje = “Mensaje de prueba”; 
} 

creaMensaje(); 

alert(mensaje); 
```


El ejemplo anterior define en primer lugar una función llamada creaMensaje que crea una  variable llamada mensaje. A continuación, se ejecuta la función mediante la llamada  creaMensaje(); y seguidamente, se muestra mediante la función ```alert()``` el valor de una  variable llamada mensaje. 

Sin embargo, al ejecutar el código anterior no se muestra ningún mensaje por pantalla. La  razón es que la variable mensaje se ha definido dentro de la función ```creaMensaje()``` y por  tanto, es una variable local que solamente está definida dentro de la función. 

Cualquier instrucción que se encuentre dentro de la función puede hacer uso de esa  variable, pero todas las instrucciones que se encuentren en otras funciones o fuera de  cualquier función no tendrán definida la variable mensaje.  

De esta forma, para mostrar el mensaje en el código anterior, la función ```alert()``` debe  llamarse desde dentro de la función ```creaMensaje()```: 


```javaScript
function creaMensaje() { 
   var mensaje = “Mensaje de prueba”; 
   alert(mensaje); 
} 

creaMensaje();
```


Además de variables locales, también existe el concepto de variable global, que está  definida en cualquier punto del programa (incluso dentro de cualquier función). 

```JavaScript
var mensaje = “Mensaje de prueba”; 
```


```JavaScript
function muestraMensaje() { 
 alert(mensaje); 
} 
```

El código anterior es el ejemplo inverso al mostrado anteriormente. Dentro de la función  ```muestraMensaje()``` se quiere hacer uso de una variable llamada mensaje y que no ha sido  definida dentro de la propia función.  

Sin embargo, si se ejecuta el código anterior, sí que se muestra el mensaje definido por la  variable mensaje. 

El motivo es que en el código JavaScript anterior, la variable mensaje se ha definido fuera  de cualquier función. Este tipo de variables automáticamente se transforman en variables  globales y están disponibles en cualquier punto del programa (incluso dentro de cualquier  función). 

De esta forma, aunque en el interior de la función no se ha definido ninguna variable  llamada mensaje, la variable global creada anteriormente permite que la instrucción  ```alert()``` dentro de la función muestre el mensaje correctamente. 

Si una variable se declara fuera de cualquier función, automáticamente se transforma en  variable global independientemente de si se define utilizando la palabra reservada var o  no. Sin embargo, las variables definidas dentro de una función pueden ser globales o  locales. 

Si en el interior de una función, las variables se declaran mediante var se consideran  locales y las variables que no se han declarado mediante var, se transforman  automáticamente en variables globales. 

Por lo tanto, se puede rehacer el código del primer ejemplo para que muestre el mensaje  correctamente. Para ello, simplemente se debe definir la variable dentro de la función sin  la palabra reservada var, para que se transforme en una variable global: 


```JavaScript
function creaMensaje() { 
   mensaje = “Mensaje de prueba”; 
} 

creaMensaje(); 

alert(mensaje);
```


### ¿Qué sucede si una función define una variable local con el mismo nombre que una  variable global que ya existe? 

En este caso, las variables locales prevalecen sobre las  globales, pero sólo dentro de la función: 


```JavaScript
var mensaje = “gana la de fuera”; 

function muestraMensaje() { 
   var mensaje = “gana la de dentro”; 
   alert(mensaje); 
} 

alert(mensaje); 

muestraMensaje(); 

alert(mensaje); 
```


El código anterior muestra por pantalla los siguientes mensajes: 


```
gana la de fuera 
gana la de dentro 
gana la de fuera 
```


Dentro de la función, la variable local llamada mensaje tiene más prioridad que la variable  global del mismo nombre, pero solamente dentro de la función. 



### ¿Qué sucede si dentro de una función se define una variable global con el mismo nombre  que otra variable global que ya existe? 

En este otro caso, la variable global definida dentro  de la función simplemente modifica el valor de la variable global definida anteriormente: 


```JavaScript
var mensaje = “gana la de fuera”; 

function muestraMensaje() { 
   mensaje = “gana la de dentro”; 
   alert(mensaje); 
} 

alert(mensaje); 

muestraMensaje(); 

alert(mensaje); 
```


En este caso, los mensajes mostrados son: 


```
gana la de fuera 
gana la de dentro 
gana la de dentro
```



---


### :star: Objetos 

Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente  consta de algunas variables y funciones, que se denominan propiedades y métodos  cuando están dentro de objetos). Vamos a trabajar a través de un ejemplo para mostrarte  cómo son. 

Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza  con la definición e iniciación de una variable. 

```var persona = {}; ```

Si ingresas persona en tu entrada de texto y presionas el botón, debes obtener el  siguiente resultado: 

```[objeto Objeto] ```

¡Felicidades!, acabas de crear tu primer objeto. ¡Trabajo realizado! Pero este es un objeto  vacío, por lo que realmente no podemos hacer mucho con él. Actualicemos nuestro  objeto para que se vea así: 


```JavaScript
var persona = { 
  nombre: [‘Bob’, ‘Smith’], 
  edad: 32, 
  genero: ‘masculino’, 
  intereses: [‘música’, ‘esquí’], 

 bio: function () { 
      alert(this.nombre[0] + ” + this.nombre[1] + ‘ tiene ‘ + this.edad + ‘ años. Le gusta ‘ +  this.intereses[0] + ‘ y ‘ + this.intereses[1] + ‘.’); 
 }, 

 saludo: function() { 
    alert(‘Hola, Soy ‘+ this.nombre[0] + ‘. ‘); 
 } 
}; 
```



Después de guardar y actualizar, intenta ingresar algunos de los siguientes en tu entrada  de texto: 


```
persona.nombre 
persona.nombre[0] 
persona.edad 
persona.intereses[1] 
persona.bio() 
persona.saludo()
```


¡Ahora tienes algunos datos y funcionalidades dentro de tu objeto, y ahora puedes  acceder a ellos con una sintaxis simple y agradable! 

Un objeto se compone de varios miembros, cada uno de los cuales tiene un nombre (por  ejemplo, nombre y edad) y un valor (por ejemplo, [‘Bob’, ‘Smith’] y 32). Cada par  nombre/valor debe estar separado por una coma, y el nombre y el valor en cada caso  están separados por dos puntos. La sintaxis siempre sigue este patrón: 


```JavaScript
var nombreObjeto = { 
 miembro1Nombre: miembro1Valor, 
 miembro2Nombre: miembro2Valor, 
 miembro3Nombre: miembro3Valor 
} 
```



El valor de un miembro de un objeto puede ser prácticamente cualquier cosa: en nuestro  objeto persona tenemos una cadena de texto, un número, dos arreglos y dos funciones.  Los primeros cuatro elementos son elementos de datos y se denominan propiedades del  objeto. Los dos últimos elementos son funciones que le permiten al objeto hacer algo con  esos datos, y se les denomina métodos del objeto. 

Un objeto como este se conoce como un objeto literal — literalmente hemos escrito el  contenido del objeto tal como lo fuimos creando. Esto está en contraste con los objetos  instanciados de las clases, que veremos más adelante. 

Es muy común crear un objeto utilizando un objeto literal cuando deseas transferir una  serie de elementos de datos relacionados y estructurados de alguna manera, por ejemplo,  enviando una solicitud al servidor para ponerla en una base de datos. Enviar un solo  objeto es mucho más eficiente que enviar varios elementos individualmente, y es más  fácil de procesar que con un arreglo, cuando deseas identificar elementos individuales por  nombre.


---

#### Notación de punto 

Arriba, accediste a las propiedades y métodos del objeto usando notación de punto (dot  notation). El nombre del objeto (persona) actúa como el espacio de nombre (namespace);  al cual se debe ingresar primero para acceder a cualquier elemento encapsulado dentro  del objeto. A continuación, escribe un punto y luego el elemento al que deseas acceder:  puede ser el nombre de una simple propiedad, un elemento de una propiedad de arreglo  o una llamada a uno de los métodos del objeto, por ejemplo: 


```
persona.edad 
persona.intereses[1] 
persona.bio() 
```


### Espacios de nombres secundarios 

Incluso es posible hacer que el valor de un miembro del objeto sea otro objeto. Por  ejemplo, intenta cambiar el miembro nombre de 

```JavaScript
nombre: [‘Bob’, ‘Smith’], 
``` 

a 

```JavaScript
nombre : { 
 pila: ‘Bob’, 
 apellido: ‘Smith’ 
}, 
```

Aquí estamos creando efectivamente un espacio de nombre secundario (sub-namespace).  Esto suena complejo, pero en realidad no es así: para acceder a estos elementos solo  necesitas un paso adicional que es encadenar con otro punto al final. Prueba estos: 


```
persona.nombre.pila 
persona.nombre.apellido 
```

Importante: en este punto, también deberás revisar tu código y cambiar cualquier  instancia de 


```
nombre[0] 
nombre[1] 
```

a 

```
nombre.pila 
nombre.apellido 
```


De lo contrario, sus métodos ya no funcionarán.


---

### Notación de corchetes 

Hay otra manera de acceder a las propiedades del objeto, usando la notación de  corchetes. En lugar de usar estos: 


```
persona.edad 
persona.nombre.pila 
```


Puedes usar 

```
persona[‘edad’] 
persona[‘nombre’][‘pila’] 
```

Esto se ve muy similar a cómo se accede a los elementos en un arreglo, y básicamente es  lo mismo: en lugar de usar un número de índice para seleccionar un elemento, se esta  utilizando el nombre asociado con el valor de cada miembro. No es de extrañar que los  objetos a veces se denominen arreglos asociativos: asocian cadenas de texto a valores de  la misma manera que las arreglos asocian números a valores. 



### Establecer miembros de objetos 

Hasta ahora solo hemos buscado recuperar (u obtener) miembros del objeto: también  puede establecer (actualizar) el valor de los miembros del objeto simplemente declarando  el miembro que deseas establecer (usando la notación de puntos o corchetes), de esta  manera: 


```JavaScript
persona.edad = 45; 
persona[‘nombre’][‘apellido’] = ‘Cratchit’; 
```

Intenta ingresar estas líneas y luego vuelve a ver a los miembros para ver cómo han  cambiado: 


```JavaScript
persona.edad 
persona[‘nombre’][‘apellido’] 
```


Establecer miembros no solo es actualizar los valores de las propiedades y métodos  existentes; también puedes crear miembros completamente nuevos. Prueba estos: 


```JavaScript
persona[‘ojos’] = ‘avellana’; 
persona.despedida = function() { alert(“¡Adiós a todos!”); } 
```


Ahora puedes probar a los nuevos miembros: 

```JavaScript
persona[‘ojos’] 
person.despedida()
```


Un aspecto útil de la notación de corchetes es que se puede usar para establecer  dinámicamente no solo los valores de los miembros, sino también los nombres de los  miembros. Digamos que queremos que los usuarios puedan almacenar tipos de valores  personalizados en sus datos personales, escribiendo el nombre y el valor del miembro en  dos entradas de texto. Podríamos obtener esos valores de esta manera: 


```JavaScript
var nombrePerzonalizado = entradaNombre.value; 
var valorPerzonalizado = entradaValor.value; 
```


Entonces podríamos agregar este nuevo miembro nombre y valor al objeto persona de  esta manera: 


```JavaScript
persona[nombrePerzonalizado] = valorPerzonalizado; 
```


Para probar esto, intenta agregar las siguientes líneas en tu código, justo debajo de la llave  de cierre del objeto persona: 

```JavaScript
var nombrePerzonalizado = ‘altura’; 
var valorPerzonalizado = ‘1.75m’; 
persona[nombrePerzonalizado] = valorPerzonalizado; 
```


Ahora intenta guardar y actualizar, e ingresa lo siguiente en tu entrada de texto: ```persona.altura ```

Agregar una propiedad a un objeto no es posible con la notación de puntos, que solo  puede aceptar un nombre de miembro literal, no un valor variable que apunte a un  nombre. 

Has estado usando objetos todo el tiempo 

A medida que has estado repasando estos ejemplos, probablemente hayas pensando que  la notación de puntos que has usando es muy familiar. ¡Eso es porque la has estado  usando a lo largo del curso! Cada vez que hemos estado trabajando en un ejemplo que  utiliza una API de navegador incorporada o un objeto JavaScript, hemos estado usando objetos, porque tales características se crean usando exactamente el mismo tipo de  estructuras de objetos que hemos estado viendo aquí, aunque más complejos que  nuestros propios ejemplos personalizados.

Entonces cuando usaste métodos de cadenas de texto como: 

```myCadena.split(‘,’); ```

Estabas usando un método disponible en una instancia de la clase String. Cada vez que  creas una cadena en tu código, esa cadena se crea automáticamente como una instancia  de String, y por lo tanto tiene varios métodos/propiedades comunes disponibles en ella. 

Cuando accediste al modelo de objetos del documento (document object model) usando  líneas como esta: 


```JavaScript
var miDiv = document.createElement(‘div’); 
var miVideo = document.querySelector(‘video’); 
```


Estaba usando métodos disponibles en una instancia de la clase Document. Para cada  página web cargada, se crea una instancia de Document, llamada document, que  representa la estructura, el contenido y otras características de la página entera, como su  URL. De nuevo, esto significa que tiene varios métodos/propiedades comunes disponibles  en él. 

Lo mismo puede decirse de prácticamente cualquier otro Objeto/API incorporado que  hayad estado utilizando: Array, Math, etc. 

Ten en cuenta que los Objetos/API incorporados no siempre crean instancias de objetos  automáticamente. Como ejemplo, la API de Notificaciones, que permite que los  navegadores modernos activen las notificaciones del sistema, requiere que crees una  instancia de un nuevo objeto para cada notificación que desees disparar. Intenta ingresar  lo siguiente en tu consola de JavaScript: 

```var miNotificacion = new Notification(‘¡Hola!’); ```

Nota: Es útil pensar en la forma en que los objetos se comunican como paso de mensajes  — cuando un objeto necesita otro objeto para realizar algún tipo de acción a menudo  enviará un mensaje a otro objeto a través de uno de sus métodos, y esperará una  respuesta, que conocemos como un valor de retorno.


---


### Función constructura y new 

JavaScript no tiene una notación formal de clase y recurre a las funciones constructoras  para este fin. Mencionar también que JavaScript utiliza los prototipos de los objetos para  propagar la herencia, algo que sin duda cuesta entender al principio y al que dedicaremos  un artículo independiente más adelante. 

#### Función constructora 

Una función constructora es una función normal y corriente de JavaScript que se utiliza  para definir una especie de plantilla para nuestros objetos personalizados. Veamos un  ejemplo: 


```javaScript
function Cliente(nombre, fecha, direccion) { 
   this._nombre = nombre; 
   this._fechaNacimiento = fecha; 
   this._direccion = direccion; 
} 
```


Como podemos observar, se trata de una típica función de JavaScript que admite una  serie de parámetros de entrada aunque estos no son obligatorios en absoluto. La única  particularidad de esta función es que se utiliza la palabra reservada this de JavaScript para  definir una serie de propiedades (también podrán ser métodos) que formarán parte de  nuestros objetos personalizados. 


En la ilustración lateral vemos cómo podemos utilizar esta función constructora para crear  instancias de nuestros objetos personalizados.

El operador new utilizado junto a una función de JavaScript es lo que nos permite obtener  un objeto constructor o función constructora. Lo que sucede por debajo es que new  primeramente crea un objeto sin propiedades y posteriormente llama a la función  pasándole el nuevo objeto como valor de la palabra reservada this. Finalmente, la función  nos devuelve un nuevo objeto con las propiedades y métodos definidos dentro de la  constructora. 

Como se aprecia en el intellisense de la imagen observamos que el nuevo objeto miCliente  tiene todas las propiedades definidas anteriormente dentro del constructor. 

Como hemos comentado, no es necesario que el constructor tome parámetros, podemos  crear una plantilla en blanco e ir rellenando los objetos con datos cuando lo necesitemos: 


```JavaScript
// Constructor vacío 
function Cliente() { 
   this._nombre; 
   this._fechaNacimiento; 
   this._direccion; 
} 


// Creamos el objeto y le asignamos valores 
var cliente = new Cliente(); 
cliente._nombre = “Cristina Rodriguez”; 
cliente._fechaNacimiento = new Date(1987, 3, 25); 
cliente._direccion = “Plaza Bilbao 25”;
```


---


### Comprobar la función constructora de un objeto 

Todos los objetos de JavaScript, ya sean nativos o de usuario, tienen una propiedad  constructor que heredan del objeto genérico Object, la cual hace referencia a la función  constructora que inicializa el objeto lo que en principio (ahora veremos por qué digo  esto) nos permite determinar la función constructora de un objeto, y casi por extensión, la  clase de éste: 


```JavaScript
function Cliente() { 
 // Definición de miembros de Cliente… 
} 

var unCliente = new Cliente(); 

if (unCliente.constructor == Cliente) { 
 // Hacer algo con el objeto unCliente 
} 
```

Por otro lado, también podríamos utilizar el operador instanceof para determinar la  constructora de un objeto, pero con algunas diferencias. El operador instanceof , a  diferencia del anterior, comprueba la jerarquía del objeto, por lo tanto podríamos  preguntar directamente sobre el objeto padre con idénticos resultados:   

```
unCliente instanceof Cliente // es true 
unCliente instanceof Object // es true 
```


Lamentablemente en JavaScript nada es tan sencillo como parece. Las cosas se complican  cuando hablamos de modificar el prototipo de un objeto y la propiedad constructor parece perder la referencia a la función constructora.


---


## Uso del This para el público y privado 


### ¿Qué es “this” (este)? 

Es posible que hayas notado algo un poco extraño en nuestros métodos.  Mira esto, por ejemplo: 


```JavaScript
saludo: function() { 
 alert(‘¡Hola!, Soy ‘+ this.nombre.pila + ‘.’); 
} 
```


Probablemente te estés preguntando qué es “this”. La palabra clave this se refiere al  objeto actual en el que se está escribiendo el código, por lo que en este caso this es  equivalente a la persona.  

Entonces, ¿por qué no escribir persona en su lugar? Como verás en el artículo JavaScript  orientado a objetos para principiantes cuando comenzaremos a crear constructores, etc.,  this es muy útil: siempre asegurará que se usen los valores correctos cuando cambie el  contexto de un miembro (por ejemplo, dos diferentes instancias de objetos persona)  pueden tener diferentes nombres, pero querráx usar su propio nombre al decir su saludo). 

Vamos a ilustrar lo que queremos decir con un par de objetos persona simplificados: 


```JavaScript
var persona1 = { 
 nombre: ‘Chris’, 
 saludo: function() { 
 alert(‘¡Hola!, Soy ‘+ this.nombre + ‘.’); 
 } 
} 

var persona2 = { 
 nombre: ‘Brian’, 
 saludo: function() { 
 alert(‘¡Hola!, Soy ‘+ this.nombre + ‘.’); 
 } 
} 
```

En este caso, ```persona1.saludo()``` mostrará “¡Hola!, Soy Chris”; ```persona2.saludo()``` por otro  lado mostrará “¡Hola!, Soy Brian”, aunque el código del método es exactamente el mismo  en cada caso. Como dijimos antes, this es igual al objeto en el que está el código; esto no  es muy útil cuando se escriben objetos literales a mano, pero realmente se vuelve útil  cuando se generan objetos dinámicamente (por ejemplo, usando constructores) Todo se  aclarará más adelante.

```this``` es un keyword de JavaScript que tiene un comportamiento muy diferente a otros  lenguajes de programación, así para algunos es considerado uno de los grandes errores de  diseño del lenguaje. 

La clave para entender el comportamiento de this, es tener claro donde se invoca, para  saber qué objeto le asigna. 


### ¿Donde se está invocando this? 

- Asignación implícita 

**Caso 1:** 

En el primer caso this está siendo invocado dentro de un método. 

```JavaScript
let yo = { 
 nombre: ‘yeison’, 
 edad: 22, 

 hablar: function () { 
   console.log(this.nombre); 
 } 

}; 

yo.hablar(); // yeison 
```

this, hace referencia al objeto, que contiene el método donde se invoca.


**Caso 2:** 

En este caso, existe una función que recibe un objeto como parámetro, y le agrega el  método hablar, luego, se ejecuta la función sobre dos objetos. 


```JavaScript
let decirNombre = function(obj) { 
   obj.hablar = function() { 
     console.log(this.nombre); 
   }; 
}; 

const Mateo = { 
   nombre: ‘Mateo’, 
   edad: 22 
}; 

const juan = { 
   nombre: ‘Juan’, 
   edad: 25 
}; 

decirNombre(juan); 
decirNombre(Mateo); 
juan.hablar(); // Juan 
Mateo.hablar(); // Mateo 
```

This en este caso hace referencia al objeto que se añade este método.


**Caso 3:** 

En este caso tenemos una función que retorna un objeto, que contiene un método hablar,  que invoca this. 


```JavaScript
let Persona = function (nombre, edad, madre) { 
 return { 
   nombre: nombre, 
   edad: edad, 
   
   hablar: function() { 
      console.log(this.nombre); 
    }, 

 madre: { 
   nombre: madre, 
   hablar: function() { 
     console.log(this.nombre); 
   } 
 } 

 }; 
}; 

const ana = Persona(‘Ana’, 30, ‘Clara’); 
ana.hablar(); // Ana 
ana.madre.hablar(); // Clara 
```

This en este caso hace referencia al objeto que contiene el método donde se invoca. Como vimos en los 3 casos, cuando this es invocado dentro de un método, implícitamente  este hace referencia al objeto que contiene el método, sin importar si el método es  añadido luego de haber sido creado el objeto, o si es una función que retorna un objeto.


### Asignación explícita 

En el caso de asignación implícita, this hace referencia al objeto, que contenía el método  donde se invoca this, pero si tenemos una función y deseamos explícitamente asignarle a  que va a hacer referencia this, desde ES5 contamos con los métodos ```call()```, ```apply()``` y ```bind()```. Vamos a tener una función, que reciba unos parámetros y muestre en consola, con la  propiedad nombre a la que haga referencia this, y los parámetros que recibe. 


```JavaScript
const hablar = function(l1, l2, l3) { 
 console.log(`Hola mi nombre es ${this.nombre} 
 y se programar en ${l1}, ${l2}, ${l3}.`); 
}; 

const yeison = { 
 nombre: ‘Yeison’, 
 edad: 22 
}; 

const lenguajes = [‘JavaScript’, ‘Python’, ‘C’] 
```


Ahora, nosotros debemos referenciar la variable yeison para que esta sea this. 

### call() 

```hablar.call(yeison, lenguajes[0],lenguajes[1],lenguajes[2]); ```

El método call nos permite definir a que va a hacer referencia this, en su primer  parámetro, los parámetros siguientes son los parámetros que recibe la función. 


### apply() 

```hablar.apply(yeison, lenguajes); ```

El método apply, funciona igual que call, permitiendo referencia this en el primer  parámetro, pero este nos permite pasar un array, como los parámetros de la funcion. 

### bind() 

Este método funciona diferente a los anteriores, este nos devuelve una función, en dónde  this, hace referencia al objeto que pasamos en su parámetro. 
```
const hablaYeison = hablar.bind(yeison, lenguajes[0],lenguajes[1],lenguajes[2]); hablaYeison(); 
```

Estos tres métodos nos permite hacer una referencia explícita, y tener claro el valor de  this, en la ejecución.


---


### Asignación con new 

Otro caso, es cuando invocamos this en un constructor , como el siguiente ejemplo: 


```JavaScript
let Animal = function(color, nombre, tipo) { 
 this.color = color; 
 this.nombre = nombre; 
 this.tipo = tipo; 
} 

const bipa = new Animal(‘gris’, ‘Bipa’, ‘Felino’); 
```


En este caso, this hace referencia al objeto que se instanciando.





---
---


## :star: Conceptos básicos de String y Array – Lectura


### Primero recordemos: ¿Qué es una String? 

Una String es una cadena de texto o un conjunto de caracteres. Y existen distintos  métodos que nos proporciona JavaScript de forma nativa para facilitarnos la manipulación  de éstas. 

A continuación un listado de los métodos más utilizados comúnmente.

| Método	| Descripción |
| ------------- | ----------- |
| charAt()	| Devuelve una String según el índice que le indiquemos. |
| concat()	| Une varias Strings y devuelve una sola cadena de texto. |
| endsWith()	| Devuelve un boolean si la String termina con el valor que le indiquemos. |
| trim()	| Elimina los espacios sobrantes en una String. |
| includes()	| Devuelve un boolean si la String contiene ese valor. |
| indexOf()	| Devuelve el primer índice donde encuentra el valor dentro de la String. |
| toString()	| Convierte un valor (Por ejemplo un número) a String. |
| lastIndexOf()	| Devuelve el último índice donde encuentra el valor dentro de la String. |
| repeat()	| Repite la String la cantidad de veces que le indiquemos y la devuelve concatenada. |
| replace()	| Reemplaza un valor dentro de la String por el segundo valor que le indiquemos. |
| search()	| Busca un valor dentro de la String y devuelve el índice donde se encuentra. |
| slice()	| Nos permite recortar nuestra String usando 2 parámetros, el inicio y el final. |
|split()	| Divide la String en un Array, separando según el parámetro que le indiquemos. |
| startsWith()	| Devuelve un boolean si la String empieza con el valor que le indiquemos. |
| toLowerCase()	| Convierte toda la String a minúscula. |
| toUpperCase()	| Convierte toda la String a mayúscula. |


### ¿Cómo podemos utilizar un método un método sobre una String? 

Primero creamos una variable que contenga nuestra cadena de texto. var nombre = “Academia Numen” 

Ahora para utilizar un método tenemos que utilizar esa variable seguido del nombre del  método y sus parámetros. 

Ejemplos prácticos: 

```JavaScript
nombre.toUpperCase()  // ACADEMIA NUMEN 
nombre.toLowerCase()  // academia numen 
nombre.repeat(2)  // Academia NumenAcademia Numen 
nombre.replace(“Academia”, “Full Stack”)  // Academia Full Stack 
```

---

### Métodos de Array 

Los arreglos (o Array) son utilizados para guardar múltiples valores en una sola variable, se  identifican por índices. 

Ejemplo: 

```javaScript
var array = [“Academia”, “Numen”, “Full Stack”] 
```

La primera posición de nuestro array comienza desde el número 0 

Si quisieramos imprimirlo en la consola deberíamos escribir: 

```
array[0] // Academia 
array[1] // Numen 
array[2] // Full Stack 
```

Primero declaramos el arreglo que vamos a utilizar para los próximos ejemplos 

```javaScript
var users = [ 
 { nombre: “Bart”, apellido: “Simpson”, edad: 10 }, 
 { nombre: “Lisa”, apellido: “Simpson”, edad: 8 }, 
 { nombre: “Maggie”, apellido: “Simpson”, edad: 1 }, 
]
```

### Find 

Busca y devuelve aquella posición que cumpla con el parámetro 

```
var resultado = users.find(user => user.edad === 8) 
```

En éste caso queremos encontrar la posición que contenga la edad de 8 

```// { nombre: “Lisa”, apellido: “Simpson”, edad: 8 } ```


### Includes 

Devuelve true o false si en el array existe el valor indicado 


```
resultado = users.some(user => user.apellido === “Flanders”) // false 
```

### Map 

Recorre todo nuestro arreglo y devuelve otro arreglo con lo indicado en el método 

```resultado = users.map(user => user.nombre.toUpperCase()) ```

Resultado: 

```JavaScript
resultado = [ 
 { nombre: “BART”, apellido: “Simpson”, edad: 10 }, 
 { nombre: “LISA”, apellido: “Simpson”, edad: 8 }, 
 { nombre: “MAGGIE”, apellido: “Simpson”, edad: 1 }, 
]
```


### Filter 

Recorre todo nuestro arreglo y devuelve otro arreglo que cumpla la condición 

```resultado = users.filter(user => user.edad !== 1) ```

Resultado: 


```JavaScript
resultado = [ 
 { nombre: “BART”, apellido: “Simpson”, edad: 10 }, 
 { nombre: “LISA”, apellido: “Simpson”, edad: 8 }, 
]
```


### Función typeof 

Typeof es un operador JavaScript que al ser llamado sobre una variable, devuelve el tipo  de dato que dicha variable contiene. Entre otras cosas, podemos utilizarlo para validar de  parámetros de una función o para comprobar si una variable ha sido definida. 

El operador typeof es muy útil porque nos permite consultar fácilmente el tipo de datos  que una variable contiene. Esto es importante en JavaScript porque se trata de  un lenguaje escrito dinámicamente. Esto significa que no necesitamos asignar un tipo de  datos fijo a una variable cuando la creamos. Al no restringir las variables de esta manera,  el tipo de datos que contienen puede cambiar durante la ejecución de un programa. 

Por ejemplo: 


```JavaScript
var x = 12345; // number 
x = ‘string’; // string 
x = { key: ‘value’ }; // object 
```


Como podemos ver en el ejemplo anterior, una variable puede cambiar de tipo durante la  ejecución de un programa. En nuestro trabajo diario puede ser complejo llevar un registro  de estos cambios y es en esos casos donde el operador typeof será útil. 

El operador typeof devuelve una cadena de texto que representa el tipo de dato  actualmente contenido en una variable. Para usarlo podemos  

escribir typeof(variable) o typeof variable. Volviendo al ejemplo anterior, podemos  utilizarlo para comprobar el tipo de dato de la variable x en cada paso: 

```JavaScript
var x = 12345; 
console.log(typeof x) // number 
x = ‘string’; 
console.log(typeof x) // string 
x = { key: ‘value’ }; 
console.log(typeof x) // object
```


De esta manera, por ejemplo, podemos comprobar el tipo de dato de una variable dentro  de una función y continuar en caso de obtener el resultado esperado. 

Aquí tenemos una función de ejemplo que puede tomar una variable y anunciar si es una  cadena de texto o un número: 


```JavaScript
function verificar(x) { 
 if(typeof(x) === ‘string’) { 
    alert(‘x es una string) 
 } else if(typeof(x) === ‘number’) { 
    alert(‘x es un number) 
 } 
} 
```



También podemos utilizar el operador typeof para asegurarnos de que una variable ha  sido definida antes de utilizarla en nuestro código. Esto puede ser útil para prevenir un  error muy común, intentar acceder a una variable cuyo valor aún no ha sido definido. 


```javaScript
function(x){ 
 if (typeof(x) === ‘undefined’) { 
   console.log(‘la variable x no está definida’); 
   return; 
 } 
 // aquí continuamos con la función… 
}
```

Cuando trabajamos con números, el valor que devuelve el operador typeof puede no ser  lo que estamos esperando. 

Los números pueden convertirse en NAN (No es un número) por distintos motivos. console.log(typeof NaN); // “number” 

Quizás estamos intentando multiplicar un número con un objeto, porque olvidamos  acceder al número que ese objeto contiene: 


```JavaSript
var x = 1; 
var y = { number: 2 }; 
console.log(x * y); // NaN 
console.log(typeof (x * y)); // number 
```


En este caso, no será suficiente utilizar typeof para comprobar que el resultado es un  número, ya que NaN también cumple con esta condición. 

En la siguiente función, vamos a comprobar que el valor es un número pero excluyendo  a NaN de la condición: 


```JavaScript
function esNumero(data) { 
   return (typeof data === ‘number’ && !isNan(data)); 
} 
```

Si bien este es un método muy útil para validar tipos de datos, también debemos tener  cuidado porque JavaScript tiene algunas rarezas y entre ellas encontramos el resultado  de typeof en algunas situaciones particulares. En JavaScript muchas cosas son  inesperadamente objetos, como por ejemplo los arreglos (arrays) y los valores null 


```JavaSCript
var x = [1,2,3,4]; 
console.log(typeof x) // object 
console.log(typeof null) // object
```


---
---
