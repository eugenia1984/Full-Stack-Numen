# 📖 Módulo 3 | Javascript

---

##  Unidad 1: Fundamentos

Temas:

Orígenes de la programación

Lenguajes de programación

Herramientas de desarrollo

Debugging

Sintaxis general

Variables y tipos de valores

Condicionales

Operadores de comparación y lógicos

Estructura de control

Propiedades de JavaScript

Sentencia break/continue y otras estructuras de control

Bucles

---
---

## :star:  Estructuras de Control

### Sintaxis general 

La sintaxis de un lenguaje de programación se define como el conjunto de reglas que  deben seguirse al escribir el código fuente de los programas para considerarse como  correctos para ese lenguaje de programación. 

La sintaxis de JavaScript es muy similar a la de otros lenguajes de programación como Java  y C. Las normas básicas que definen la sintaxis de JavaScript son las siguientes: 

- **No se tienen en cuenta los espacios en blanco y las nuevas líneas**: como sucede  con XHTML, el intérprete de JavaScript ignora cualquier espacio en blanco  sobrante, por lo que el código se puede ordenar de forma adecuada para  entenderlo mejor (tabulando las líneas, añadiendo espacios, creando nuevas  líneas, etc.) 


- **Se distinguen las mayúsculas y minúsculas**: al igual que sucede con la sintaxis de  las etiquetas y elementos XHTML. Sin embargo, si en una página XHTML se utilizan  indistintamente mayúsculas y minúsculas, la página se visualiza correctamente,  siendo el único problema la no validación de la página. En cambio, si en JavaScript  se intercambian mayúsculas y minúsculas el script no funciona. 


- **No se define el tipo de las variables**: al crear una variable, no es necesario indicar  el tipo de dato que almacenará. De esta forma, una misma variable puede  almacenar diferentes tipos de datos durante la ejecución del script. 


- **No es necesario terminar cada sentencia con el carácter de punto y coma (;)**: en  la mayoría de lenguajes de programación, es obligatorio terminar cada sentencia  con el carácter ;. Aunque JavaScript no obliga a hacerlo, es conveniente seguir la  tradición de terminar cada sentencia con el carácter del punto y coma (;). 


- **Se pueden incluir comentarios**: los comentarios se utilizan para añadir  información en el código fuente del programa. Aunque el contenido de los  comentarios no se visualiza por pantalla, si que se envía al navegador del usuario  junto con el resto del script, por lo que es necesario extremar las precauciones  sobre la información incluida en los comentarios.



### Variables 

Las variables en los lenguajes de programación siguen una lógica similar a las variables  utilizadas en otros ámbitos como las matemáticas. Una variable es un elemento que se  emplea para almacenar y hacer referencia a otro valor. Gracias a las variables es posible  crear “programas genéricos”, es decir, programas que funcionan siempre igual  independientemente de los valores concretos utilizados. 

De la misma forma que si en Matemáticas no existieran las variables no se podrían definir  las ecuaciones y fórmulas, en programación no se podrían hacer programas realmente  útiles sin las variables. 

Si no existieran variables, un programa que suma dos números podría escribirse como: resultado = 3 + 1 

El programa anterior es tan poco útil que sólo sirve para el caso en el que el primer  número de la suma sea el 3 y el segundo número sea el 1. En cualquier otro caso,  el programa obtiene un resultado incorrecto. 

Sin embargo, el programa se puede rehacer de la siguiente manera utilizando variables  para almacenar y referirse a cada número: 

```JavaScript
numero_1 = 3 
numero_2 = 1 
resultado = numero_1 + numero_2 
```

Los elementos **numero_1** y **numero_2** son variables que almacenan los valores que utiliza  el programa. 

El resultado se calcula siempre en función del valor almacenado por las  variables, por lo que este programa funciona correctamente para cualquier par de  números indicado. 

Si se modifica el valor de las variables numero_1 y numero_2, el  programa sigue funcionando correctamente.

Las variables en JavaScript se crean mediante la palabra reservada var. De esta forma, el  ejemplo anterior se puede realizar en JavaScript de la siguiente manera: 

```JavaScript
var numero_1 = 3; 
var numero_2 = 1; 
var resultado = numero_1 + numero_2; 
```

La palabra reservada **var** solamente se debe indicar al definir por primera vez la variable,  lo que se denomina declarar una variable. Cuando se utilizan las variables en el resto de  instrucciones del script, solamente es necesario indicar su nombre. En otras palabras, en  el ejemplo anterior sería un error indicar lo siguiente: 

var numero_1 = 3; 

var numero_2 = 1; 

var resultado = var numero_1 + var numero_2; 

Si cuando se declara una variable se le asigna también un valor, se dice que la variable ha  sido inicializada. En JavaScript no es obligatorio inicializar las variables, ya que se pueden  declarar por una parte y asignarles un valor posteriormente. Por tanto, el ejemplo anterior  se puede rehacer de la siguiente manera: 


```JavaScript
var numero_1; 
var numero_2; 
numero_1 = 3; 
numero_2 = 1; 
var resultado = numero_1 + numero_2;
```



Una de las características más sorprendentes de JavaSript para los programadores  habituados a otros lenguajes de programación es que tampoco es necesario declarar las  variables. En otras palabras, se pueden utilizar variables que no se han definido  anteriormente mediante la palabra reservada var. El ejemplo anterior también es correcto  en JavaScript de la siguiente forma: 


```JavaScript
var numero_1 = 3; 
var numero_2 = 1; 
resultado = numero_1 + numero_2; 
```


La variable resultado no está declarada, por lo que JavaScript crea una variable global  (más adelante se verán las diferencias entre variables locales y globales) y le asigna el  valor correspondiente. De la misma forma, también sería correcto el siguiente código: 


```JavaScript
numero_1 = 3; 
numero_2 = 1; 
resultado = numero_1 + numero_2; 
```

En cualquier caso, se recomienda declarar todas las variables que se vayan a utilizar.

El nombre de una variable también se conoce como identificador y debe cumplir las  siguientes normas: 

- Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo). 

- El primer carácter no puede ser un número. 


Por tanto, las siguientes variables tienen nombres correctos: 

```JavaScript
var $numero1; 
var _$letra; 
var $$$otroNumero; 
var $_a__$4; 
```

Sin embargo, las siguientes variables tienen identificadores incorrectos: 

```JavaScript
var 1numero; // Empieza por un número 
var numero;1_123; // Contiene un carácter “;”
```


### Tipos de Valores 

Aunque todas las variables de JavaScript se crean de la misma forma (mediante la palabra  reservada var), la forma en la que se les asigna un valor depende del tipo de valor que se  quiere almacenar (números, textos, etc.) 

#### Numéricos (Integers) 

Se utilizan para almacenar valores numéricos enteros (llamados **integer** en inglés) o  decimales (llamados **float** en inglés). 

En este caso, el valor se asigna indicando  directamente el número entero o decimal. 

Los números decimales utilizan el  carácter . (punto) en vez de , (coma) para separar la parte entera y la parte decimal: 


```JavaScript
var iva = 16; // variable tipo entero 
var total = 234.65; // variable tipo decimal 
```


#### Cadenas de texto (Strings) 

Se utilizan para almacenar caracteres, palabras y/o frases de texto. Para asignar el valor a  la variable, se encierra el valor entre comillas dobles o simples, para delimitar su comienzo  y su final: 


```JavaScript
var mensaje = “Bienvenido a Academia Numen”; 
var nombreCurso = ‘Desarrollo Web Full Stack’; 
var letraSeleccionada = ‘A’;
```


En ocasiones, el texto que se almacena en las variables no es tan sencillo. Si por ejemplo el  propio texto contiene comillas simples o dobles, la estrategia que se sigue es la de  encerrar el texto con las comillas (simples o dobles) que no utilice el texto: 


```JavaScript
// El contenido de texto1 tiene comillas simples, por lo que se encierra con comillas dobles  
var texto1 = “Una frase con ‘comillas simples’ dentro”; 

// El contenido de texto2 tiene comillas dobles, por lo que se encierra con comillas simples  
var texto2 = ‘Una frase con “comillas dobles” dentro’; 
```


No obstante, a veces las cadenas de texto contienen tanto comillas simples como dobles.  

Además, existen otros caracteres que son difíciles de incluir en una variable de texto  (tabulador, ENTER, etc.) Para resolver estos problemas, JavaScript define un mecanismo  para incluir de forma sencilla caracteres especiales y problemáticos dentro de una cadena  de texto. 

El mecanismo consiste en sustituir el carácter problemático por una combinación simple  de caracteres. A continuación se muestra la tabla de conversión que se debe utilizar:


| Si se quiere incluir… | Se debe incluir… |
| --------------------- | ---------------- |
| Una nueva línea | 	```\n``` |
| Un tabulador 	| ```\t``` |
| Una comilla simple |	```\’``` |
| Una comilla doble  |	```\”``` |
|Una barra inclinada 	| ```\\``` |
 

De esta forma, el ejemplo anterior que contenía comillas simples y dobles dentro del texto  se puede rehacer de la siguiente forma: 


```JavaScript
var texto1 = ‘Una frase con \’comillas simples\’ dentro’; 
var texto2 = “Una frase con \”comillas dobles\” dentro”; 
```


Este mecanismo de JavaScript se denomina “mecanismo de escape” de los caracteres  problemáticos, y es habitual referirse a que los caracteres han sido “escapados”. 


#### Arrays 

En ocasiones, a los arrays se les llama vectores, matrices e incluso arreglos. No obstante,  el término array es el más utilizado y es una palabra comúnmente aceptada en el entorno  de la programación. 

Un array es una colección de variables, que pueden ser todas del mismo tipo o cada una  de un tipo diferente. Su utilidad se comprende mejor con un ejemplo sencillo: si una  aplicación necesita manejar los días de la semana, se podrían crear siete variables de tipo  texto: 


```JavaScripr
var dia1 = “Lunes”; 
var dia2 = “Martes”; 
var dia7 = “Domingo”; 
```


Aunque el código anterior no es incorrecto, sí que es poco eficiente y complica en exceso  la programación. Si en vez de los días de la semana se tuviera que guardar el nombre de  los meses del año, el nombre de todos los países del mundo o las mediciones diarias de  temperatura de los últimos 100 años, se tendrían que crear decenas o cientos de  variables.

En este tipo de casos, se pueden agrupar todas las variables relacionadas en una colección  de variables o array. El ejemplo anterior se puede rehacer de la siguiente forma: 

```var dias = [“Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”, “Sábado”, “Domingo”]; ```

Ahora, una única variable llamada dias almacena todos los valores relacionados entre sí,  en este caso los días de la semana. Para definir un array, se utilizan los caracteres [ y ] para  delimitar su comienzo y su final y se utiliza el carácter , (coma) para separar sus  elementos: 

```var nombre_array = [valor1, valor2, …, valorN]; ```

Una vez definido un array, es muy sencillo acceder a cada uno de sus elementos. Cada  elemento se accede indicando su posición dentro del array. La única complicación, que es  responsable de muchos errores cuando se empieza a programar, es que las posiciones de  los elementos empiezan a contarse en el 0 y no en el 1: 

```var diaSeleccionado = dias[0]; // diaSeleccionado = “Lunes” ```

```var otroDia = dias[5]; // otroDia = “Sábado” ```

En el ejemplo anterior, la primera instrucción quiere obtener el primer elemento del  array. Para ello, se indica el nombre del array y entre corchetes la posición del elemento  dentro del array. Como se ha comentado, las posiciones se empiezan a contar en el 0, por  lo que el primer elemento ocupa la posición 0 y se accede a el mediante dias[0]. 

El valor dias[5] hace referencia al elemento que ocupa la sexta posición dentro del  array dias. Como las posiciones empiezan a contarse en 0, la posición 5 hace referencia al  sexto elemento, en este caso, el valor Sábado.


### Booleanos 

Las variables de tipo boolean o booleano también se conocen con el nombre de variables  de tipo lógico. Su funcionamiento básico es muy sencillo. 

Una variable de tipo boolean almacena un tipo especial de valor que solamente puede  tomar dos valores: true (verdadero) o false (falso). No se puede utilizar para almacenar  números y tampoco permite guardar cadenas de texto. 

Los únicos valores que pueden almacenar estas variables son true y false, por lo que no  pueden utilizarse los valores verdadero y falso. A continuación se muestra un par de  variables de tipo booleano: 


```JavaScript
var clienteRegistrado = false; 
var ivaIncluido = true;
```


#### Operadores 

Las variables por sí solas son de poca utilidad. Hasta ahora, sólo se ha visto cómo crear  variables de diferentes tipos y cómo mostrar su valor mediante la función alert(). Para  hacer programas realmente útiles, son necesarias otro tipo de herramientas. 

Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables. De esta forma, los  operadores permiten a los programas realizar cálculos complejos y tomar decisiones  lógicas en función de comparaciones y otros tipos de condiciones. 

#### Incremento y Decremento 

Estos dos operadores solamente son válidos para las variables numéricas y se utilizan para  incrementar o decrementar en una unidad el valor de una variable. 

Ejemplo: 

```JavaScript
var numero = 5; 
++numero; 
alert(numero); // numero = 6 
```


El operador de incremento se indica mediante el prefijo ++ en el nombre de la variable. El  resultado es que el valor de esa variable se incrementa en una unidad. Por tanto, el  anterior ejemplo es equivalente a: 


```JavaScript
var numero = 5; 
numero = numero + 1; 
alert(numero); // numero = 6
```


De forma equivalente, el operador decremento (indicado como un prefijo — en el nombre  de la variable) se utiliza para decrementar el valor de la variable: 


```JavaScript
var numero = 5; 
—numero; 
alert(numero); // numero = 4 
```


El anterior ejemplo es equivalente a: 

```JavaScript
var numero = 5; 
numero = numero – 1; 
alert(numero); // numero = 4 
```


Los operadores de incremento y decremento no solamente se pueden indicar como  prefijo del nombre de la variable, sino que también es posible utilizarlos como sufijo. En  este caso, su comportamiento es similar pero muy diferente. En el siguiente ejemplo: 


```JavaScript
var numero = 5; 
numero++; 
alert(numero); // numero = 6 
```


El resultado de ejecutar el script anterior es el mismo que cuando se utiliza el  operador ++numero, por lo que puede parecer que es equivalente indicar el  operador ++ delante o detrás del identificador de la variable. 

Sin embargo, el siguiente ejemplo muestra sus diferencias: 


```JavaScript
var numero1 = 5; 
var numero2 = 2; 
numero3 = numero1++ + numero2; 
// numero3 = 7, numero1 = 6 
var numero1 = 5; 
var numero2 = 2; 
numero3 = ++numero1 + numero2; 
// numero3 = 8, numero1 = 6 
```



Si el operador ++ se indica como prefijo del identificador de la variable, su valor se  incrementa antes de realizar cualquier otra operación. Si el operador ++ se indica como  sufijo del identificador de la variable, su valor se incrementa después de ejecutar la  sentencia en la que aparece. 

Por tanto, en la instrucción numero3 = numero1++ + numero2;, el valor de numero1 se  incrementa después de realizar la operación (primero se suma y numero3 vale 7, después  se incrementa el valor de numero1 y vale 6). Sin embargo, en la instrucción numero3 =  ++numero1 + numero2;, en primer lugar se incrementa el valor de numero1 y después se  realiza la suma (primero se incrementa numero1 y vale 6, después se realiza la suma  y numero3 vale 8).


#### Negación (!) 

Uno de los operadores lógicos más utilizados es el de la negación. Se utiliza para obtener  el valor contrario al valor de la variable: 


```JavaScript
var visible = true; 
alert(!visible); // Muestra “false” y no “true” 
```


La negación lógica se obtiene prefijando el símbolo ! al identificador de la variable. El  funcionamiento de este operador se resume en la siguiente tabla: 

| variable |	!variable |
| -------- | ------------ |
| true |	false |
| false 	| true |
 

Si la variable original es de tipo booleano, es muy sencillo obtener su negación. Sin  embargo, ¿qué sucede cuando la variable es un número o una cadena de texto? Para  obtener la negación en este tipo de variables, se realiza en primer lugar su conversión a un  valor booleano: 

- Si la variable contiene un número, se transforma en false si vale 0 y en true para  cualquier otro número (positivo o negativo, decimal o entero). 

- Si la variable contiene una cadena de texto, se transforma en false si la cadena es  vacía (“”) y en true en cualquier otro caso. 


```JavaScript
var cantidad = 0; 
vacio = !cantidad; // vacio = true 
cantidad = 2; 
vacio = !cantidad; // vacio = false
var mensaje = “”; 
mensajeVacio = !mensaje; // mensajeVacio = true 
mensaje = “Bienvenido”; 
mensajeVacio = !mensaje; // mensajeVacio = false 
```


# ### AND (&&) 

La operación lógica AND obtiene su resultado combinando dos valores booleanos. El  operador se indica mediante el símbolo && y su resultado solamente es true si los dos  operandos son true: 


```
variable1    variable2 	variable1 && variable2
true 	       true 	  true
true 	       false 	  false
false 	       true 	  false
false 	       false 	  false
``` 

```JavaScript
var valor1 = true; 
var valor2 = false; 
resultado = valor1 && valor2; // resultado = false 
valor1 = true; 
valor2 = true; 
resultado = valor1 && valor2; // resultado = true
```


#### OR (||) 

La operación lógica OR también combina dos valores booleanos. El operador se indica  mediante el símbolo || y su resultado es true si alguno de los dos operandos es true: 


```
variable1  variable2 	variable1 || variable2
true 	   true 	 true
true 	   false 	 true
false 	   true 	 true
false 	   false 	 false
```


```JavaScript 
var valor1 = true; 
var valor2 = false; 
resultado = valor1 || valor2; // resultado = true 
valor1 = false; 
valor2 = false; 
resultado = valor1 || valor2; // resultado = false
```


#### Matemáticos 

JavaScript permite realizar manipulaciones matemáticas sobre el valor de las variables  numéricas. Los operadores definidos son: suma (```+```), resta (```–```), multiplicación (```*```) y división  (```/```). Ejemplo: 


```JavaScript
var numero1 = 10; 
var numero2 = 5; 
resultado = numero1 / numero2; // resultado = 2 
resultado = 3 + numero1; // resultado = 13 
resultado = numero2 – 4; // resultado = 1 
resultado = numero1 * numero 2; // resultado = 50 
```


Además de los cuatro operadores básicos, JavaScript define otro operador matemático  que no es sencillo de entender cuando se estudia por primera vez, pero que es muy útil en  algunas ocasiones. 

Se trata del operador “módulo”, que calcula el resto de la división entera de dos números.  Si se divide por ejemplo 10 y 5, la división es exacta y da un resultado de 2. El resto de esa  división es 0, por lo que módulo de 10 y 5 es igual a 0. 

Sin embargo, si se divide 9 y 5, la división no es exacta, el resultado es 1 y el resto 4, por lo  que módulo de 9 y 5 es igual a 4. 

El operador módulo en JavaScript se indica mediante el símbolo %, que no debe  confundirse con el cálculo del porcentaje: 


```JavaScript
var numero1 = 10; 
var numero2 = 5; 
resultado = numero1 % numero2; // resultado = 0
numero1 = 9; 
numero2 = 5; 
resultado = numero1 % numero2; // resultado = 4 
```


Los operadores matemáticos también se pueden combinar con el operador de asignación  para abreviar su notación: 


```JavaScript
var numero1 = 5; 
numero1 += 3; // numero1 = numero1 + 3 = 8 
numero1 -= 1; // numero1 = numero1 – 1 = 4 
numero1 *= 2; // numero1 = numero1 * 2 = 10 
numero1 /= 5; // numero1 = numero1 / 5 = 1 
numero1 %= 4; // numero1 = numero1 % 4 = 1
```


#### Relacionales 

Los operadores relacionales definidos por JavaScript son idénticos a los que definen las  matemáticas: mayor que (```>```), menor que (```<```), mayor o igual (```>=```), menor o igual (```<=```), igual  que (```==```) y distinto de (```!=```). 

Los operadores que relacionan variables son imprescindibles para realizar cualquier  aplicación compleja, como se verá en el siguiente capítulo de programación avanzada. El  resultado de todos estos operadores siempre es un valor booleano: 


```JavaScript
var numero1 = 3; 
var numero2 = 5; 
resultado = numero1 > numero2; // resultado = false 
resultado = numero1 < numero2; // resultado = true 
numero1 = 5; 
numero2 = 5; 
resultado = numero1 >= numero2; // resultado = true 
resultado = numero1 <= numero2; // resultado = true 
resultado = numero1 == numero2; // resultado = true 
resultado = numero1 != numero2; // resultado = false
```

Se debe tener especial cuidado con el operador de igualdad (==), ya que es el origen de la  mayoría de errores de programación, incluso para los usuarios que ya tienen cierta  experiencia desarrollando scripts. El operador == se utiliza para comparar el valor de dos  variables, por lo que es muy diferente del operador =, que se utiliza para asignar un valor a  una variable: 

```// El operador “=” asigna valores ```

```JavaScript
var numero1 = 5; 
resultado = numero1 = 3; // numero1 = 3 y resultado = 3 
```


```// El operador “==” compara variables ```


```JavaScript
var numero1 = 5; 
resultado = numero1 == 3; // numero1 = 5 y resultado = false 
```


Los operadores relacionales también se pueden utilizar con variables de tipo cadena de  texto: 

```JavaScript
var texto1 = “hola”; 
var texto2 = “hola”; 
var texto3 = “adios”;
resultado = texto1 == texto3; // resultado = false 
resultado = texto1 != texto2; // resultado = false 
resultado = texto3 >= texto2; // resultado = false 
```

Cuando se utilizan cadenas de texto, los operadores “mayor que” (```>```) y “menor que” (```<```)  siguen un razonamiento no intuitivo: se compara letra a letra comenzando desde la  izquierda hasta que se encuentre una diferencia entre las dos cadenas de texto. Para  determinar si una letra es mayor o menor que otra, las mayúsculas se consideran menores  que las minúsculas y las primeras letras del alfabeto son menores que las últimas (a es  menor que b, b es menor que c, A es menor que a, etc.)


#### Condicionales y Estructuras de Control 

Los programas que se pueden realizar utilizando solamente variables y operadores son  una simple sucesión lineal de instrucciones básicas. 

Sin embargo, no se pueden realizar programas que muestren un mensaje si el valor de una  variable es igual a un valor determinado y no muestren el mensaje en el resto de casos.  Tampoco se puede repetir de forma eficiente una misma instrucción, como por ejemplo  sumar un determinado valor a todos los elementos de un array. 

Para realizar este tipo de programas son necesarias las estructuras de control de flujo,  que son instrucciones del tipo “si se cumple esta condición, hazlo; si no se cumple, haz esto  otro”. También existen instrucciones del tipo “repite esto mientras se cumpla esta  condición”. 

Si se utilizan estructuras de control de flujo, los programas dejan de ser una sucesión  lineal de instrucciones para convertirse en programas inteligentes que pueden tomar  decisiones en función del valor de las variables. 

Estructura If 

La estructura más utilizada en JavaScript y en la mayoría de lenguajes de programación es  la estructura if. Se emplea para tomar decisiones en función de una condición. Su  definición formal es: 

```
if(condicion) { 
 … 
} 
```

Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones  que se encuentran dentro de {…}. Si la condición no se cumple (es decir, si su valor  es false) no se ejecuta ninguna instrucción contenida en {…} y el programa continúa  ejecutando el resto de instrucciones del script. 

Ejemplo: 


```JavaScript
var mostrarMensaje = true;

if(mostrarMensaje) { 
 alert(“Hola Mundo”); 
} 
```

En el ejemplo anterior, el mensaje sí que se muestra al usuario ya que la  variable mostrarMensaje tiene un valor de true y por tanto, el programa entra dentro del  bloque de instrucciones del if. 

El ejemplo se podría reescribir también como: 


```JavaScript
var mostrarMensaje = true; 

if(mostrarMensaje == true) { 
 alert(“Hola Mundo”); 
} 
```

En este caso, la condición es una comparación entre el valor de la  

variable mostrarMensaje y el valor true. Como los dos valores coinciden, la igualdad se  cumple y por tanto la condición es cierta, su valor es true y se ejecutan las instrucciones  contenidas en ese bloque del if.

La comparación del ejemplo anterior suele ser el origen de muchos errores de  programación, al confundir los operadores == y =. Las comparaciones siempre se realizan  con el operador ==, ya que el operador = solamente asigna valores: 


```
var mostrarMensaje = true; 

// Se comparan los dos valores 

if(mostrarMensaje == false) { 
 … 
} 
```


```
// Error – Se asigna el valor “false” a la variable 

if(mostrarMensaje = false) { 
 … 
} 
```

La condición que controla el if() puede combinar los diferentes operadores lógicos y  relacionales mostrados anteriormente: 

```
var mostrado = false;

if(!mostrado) { 
 alert(“Es la primera vez que se muestra el mensaje”); 
} 
```

Los operadores AND y OR permiten encadenar varias condiciones simples para construir  condiciones complejas: 


```JavaScript
var mostrado = false; 

var usuarioPermiteMensajes = true; 

if(!mostrado && usuarioPermiteMensajes) { 
 alert(“Es la primera vez que se muestra el mensaje”); 
} 
```

La condición anterior está formada por una operación AND sobre dos variables. A su vez, a  la primera variable se le aplica el operador de negación antes de realizar la  operación AND. De esta forma, como el valor de mostrado es false, el  valor !mostrado sería true. Como la variable usuarioPermiteMensajes vale true, el  resultado de !mostrado && usuarioPermiteMensajes sería igual a true && true, por lo que  el resultado final de la condición del if() sería true y por tanto, se ejecutan las  instrucciones que se encuentran dentro del bloque del if().

#### Estructura If … else 

En ocasiones, las decisiones que se deben realizar no son del tipo “si se cumple la  condición, hazlo; si no se cumple, no hagas nada”. Normalmente las condiciones suelen  ser del tipo “si se cumple esta condición, hazlo; si no se cumple, haz esto otro”. 

Para este segundo tipo de decisiones, existe una variante de la  

estructura if llamada if…else. Su definición formal es la siguiente: 


```
if(condicion) { 
 … 
} else { 
 … 
} 
```


Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones  que se encuentran dentro del if(). Si la condición no se cumple (es decir, si su valor  es false) se ejecutan todas las instrucciones contenidas en else { }. 

Ejemplo: 


```JavaScript
var edad = 18;

if(edad >= 18) { 
 alert(“Eres mayor de edad”); 
} else { 
 alert(“Todavía eres menor de edad”); 
} 
```

Si el valor de la variable edad es mayor o igual que el valor numérico 18, la condición del if() se cumple y por tanto, se ejecutan sus instrucciones y se muestra el mensaje “Eres  mayor de edad”. Sin embargo, cuando el valor de la variable edad no es igual o mayor  que 18, la condición del if() no se cumple, por lo que automáticamente se ejecutan todas  las instrucciones del bloque else { }. En este caso, se mostraría el mensaje “Todavía eres  menor de edad”. 

El siguiente ejemplo compara variables de tipo cadena de texto: 


```JavaScript
var nombre = “”; 

if(nombre == “”) { 
 alert(“Aún no nos has dicho tu nombre”); 
} else { 
 alert(“Hemos guardado tu nombre”); 
}
```



La condición del if() anterior se construye mediante el operador ==, que es el que se  emplea para comparar dos valores (no confundir con el operador = que se utiliza para  asignar valores). En el ejemplo anterior, si la cadena de texto almacenada en la  variable nombre es vacía (es decir, es igual a “”) se muestra el mensaje definido en el if().  En otro caso, se muestra el mensaje definido en el bloque else { }. 

La estructura if…else se puede encadenar para realizar varias comprobaciones seguidas: 

```
if(edad < 12) { 
 alert(“Todavía eres muy pequeño”); 
}  else if(edad < 19) { 
 alert(“Eres un adolescente”); 
} else if(edad < 35) { 
 alert(“Aun sigues siendo joven”); 
} else { 
 alert(“Piensa en cuidarte un poco más”); 
} 
```

No es obligatorio que la combinación de estructuras if…else acabe con la instrucción else,  ya que puede terminar con una instrucción de tipo else if().

#### Estructura for 

Las estructuras if y if…else no son muy eficientes cuando se desea ejecutar de forma  repetitiva una instrucción. Por ejemplo, si se quiere mostrar un mensaje cinco veces, se  podría pensar en utilizar el siguiente if: 


```JavaScript
var veces = 0; 

if(veces < 4) { 
 alert(“Mensaje”); 
 veces++; 
} 
```

Se comprueba si la variable veces es menor que 4. Si se cumple, se entra dentro del if(), se  muestra el mensaje y se incrementa el valor de la variable veces. Así se debería seguir  ejecutando hasta mostrar el mensaje las cinco veces deseadas. 

Sin embargo, el funcionamiento real del script anterior es muy diferente al deseado, ya  que solamente se muestra una vez el mensaje por pantalla. La razón es que la ejecución  de la estructura if() no se repite y la comprobación de la condición sólo se realiza una vez,  independientemente de que dentro del if() se modifique el valor de la variable utilizada en  la condición. 

La estructura for permite realizar este tipo de repeticiones (también llamadas bucles) de  una forma muy sencilla. No obstante, su definición formal no es tan sencilla como la  de if(): 

```
for(inicializacion; condicion; actualizacion) { 
 … 
}
```

La idea del funcionamiento de un bucle for es la siguiente: “mientras la condición indicada  se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for.  Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la  condición”. 


- La “inicialización” es la zona en la que se establece los valores iniciales de las  variables que controlan la repetición. 

- La “condición” es el único elemento que decide si continua o se detiene la  repetición. 

- La “actualización” es el nuevo valor que se asigna después de cada repetición a las  variables que controlan la repetición. 


```JavaScript
var mensaje = “Hola, estoy dentro de un bucle”; 

for(var i = 0; i < 5; i++) { 
 alert(mensaje); 
} 
```

La parte de la inicialización del bucle consiste en: 

```var i = 0;``` 

Por tanto, en primer lugar se crea la variable i y se le asigna el valor de 0. Esta zona de  inicialización solamente se tiene en consideración justo antes de comenzar a ejecutar el  bucle. Las siguientes repeticiones no tienen en cuenta esta parte de inicialización. 

La zona de condición del bucle es: 

```i < 5``` 

Los bucles se siguen ejecutando mientras se cumplan las condiciones y se dejan de  ejecutar justo después de comprobar que la condición no se cumple. En este caso,  mientras la variable i valga menos de 5 el bucle se ejecuta indefinidamente.

Como la variable i se ha inicializado a un valor de 0 y la condición para salir del bucle es  que i sea menor que 5, si no se modifica el valor de i de alguna forma, el bucle se repetiría  indefinidamente. 

Por ese motivo, es imprescindible indicar la zona de actualización, en la que se modifica el  valor de las variables que controlan el bucle: 

```i++ ```

En este caso, el valor de la variable i se incrementa en una unidad después de cada  repetición. La zona de actualización se ejecuta después de la ejecución de las instrucciones  que incluye el for. 

Así, durante la ejecución de la quinta repetición el valor de i será 4. Después de la quinta  ejecución, se actualiza el valor de i, que ahora valdrá 5. Como la condición es que i sea  menor que 5, la condición ya no se cumple y las instrucciones del for no se ejecutan una  sexta vez. 

Normalmente, la variable que controla los bucles for se llama i, ya que recuerda a la  palabra índice y su nombre tan corto ahorra mucho tiempo y espacio. 

El ejemplo anterior que mostraba los días de la semana contenidos en un array se puede  rehacer de forma más sencilla utilizando la estructura for: 


```JavaScript
var dias = [“Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”, “Sábado”, “Domingo”]; 

for(var i=0; i<7; i++) { 
 alert(dias[i]); 
}
```


#### Estructura for … in 

Una estructura de control derivada de for es la estructura for…in. Su definición exacta  implica el uso de objetos, que es un elemento de programación avanzada que no se va a  estudiar. Por tanto, solamente se va a presentar la estructura for…in adaptada a su uso en  arrays. Su definición formal adaptada a los arrays es: 


```
for(indice in array) { 
 … 
} 
```

Si se quieren recorrer todos los elementos que forman un array, la estructura for…in es la  forma más eficiente de hacerlo, como se muestra en el siguiente ejemplo: 


```JavaScript
var dias = [“Lunes”, “Martes”, “Miércoles”, “Jueves”, “Viernes”, “Sábado”, “Domingo”]; 

for(i in dias) { 
 alert(dias[i]); 
} 
```

La variable que se indica como indice es la que se puede utilizar dentro del  bucle for…in para acceder a los elementos del array. De esta forma, en la primera  repetición del bucle la variable i vale 0 y en la última vale 6. 

Esta estructura de control es la más adecuada para recorrer arrays (y objetos), ya que  evita tener que indicar la inicialización y las condiciones del bucle for simple y funciona  correctamente cualquiera que sea la longitud del array. De hecho, sigue funcionando igual  aunque varíe el número de elementos del array.

#### Propiedades de JavaScript 

- JavaScript incorpora una serie de herramientas y utilidades para el manejo de las  variables. De esta forma, muchas de las operaciones básicas con las variables, se pueden  realizar directamente con las utilidades que ofrece JavaScript. 

- Funciones útiles para cadenas de Texto 

A continuación se muestran algunas de las funciones más útiles para el manejo de  cadenas de texto: 

- **length**, calcula la longitud de una cadena de texto (el número de caracteres que la forman) 

```JavaScript
var mensaje = “Hola Mundo”; 
var numeroLetras = mensaje.length; // numeroLetras = 10 
```

- **+**, se emplea para concatenar varias cadenas de texto :

```JavaScript
var mensaje1 = “Hola”; 
var mensaje2 = ” Mundo”; 
var mensaje = mensaje1 + mensaje2; // mensaje = “Hola Mundo” 
```

Además del operador +, también se puede utilizar la función **concat()**:

```JavaScript
var mensaje1 = “Hola”; 
var mensaje2 = mensaje1.concat(” Mundo”); // mensaje2 = “Hola Mundo”
```

- Las cadenas de texto también se pueden unir con variables numéricas: 

```JavaScript
var variable1 = “Hola “; 
var variable2 = 3; 
var mensaje = variable1 + variable2; // mensaje = “Hola 3” 
```

- Cuando se unen varias cadenas de texto es habitual olvidar añadir un espacio de  separación entre las palabras: 

```JavaScript
var mensaje1 = “Hola”; 
var mensaje2 = “Mundo”; 
var mensaje = mensaje1 + mensaje2; // mensaje = “HolaMundo” 
```

- Los espacios en blanco se pueden añadir al final o al principio de las cadenas y también se  pueden indicar forma explícita: 

```JavaScript
var mensaje1 = “Hola”; 
var mensaje2 = “Mundo”; 
var mensaje = mensaje1 + ” ” + mensaje2; // mensaje = “Hola Mundo” 
```

- **toUpperCase()**, transforma todos los caracteres de la cadena a sus correspondientes  caracteres en mayúsculas: 


```JavaScript
var mensaje1 = “Hola”; 
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = “HOLA”
```

- **toLowerCase()**, transforma todos los caracteres de la cadena a sus correspondientes  caracteres en minúsculas: 

```JavaScript
var mensaje1 = “HolA”; 
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = “hola” 
```

- **charAt(posicion)**, obtiene el carácter que se encuentra en la posición indicada: var mensaje = “Hola”; 

```JavaScript
var letra = mensaje.charAt(0); // letra = H 
letra = mensaje.charAt(2); // letra = l 
```

- **indexOf(caracter)**, calcula la posición en la que se encuentra el carácter indicado dentro de  la cadena de texto. Si el carácter se incluye varias veces dentro de la cadena de texto, se  devuelve su primera posición empezando a buscar desde la izquierda. Si la cadena no  contiene el carácter, la función devuelve el valor -1: 

```JavaScript
var mensaje = “Hola”; 
var posicion = mensaje.indexOf(‘a’); // posicion = 3 
posicion = mensaje.indexOf(‘b’); // posicion = -1 
```

Su función análoga es **lastIndexOf()**: 

- **lastIndexOf(caracter)**, calcula la última posición en la que se encuentra el carácter  indicado dentro de la cadena de texto. Si la cadena no contiene el carácter, la función  devuelve el valor -1: 


```JavaScript
var mensaje = “Hola”; 
var posicion = mensaje.lastIndexOf(‘a’); // posicion = 3 
posicion = mensaje.lastIndexOf(‘b’); // posicion = -1
```

La función lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el  principio, aunque la posición devuelta es la correcta empezando a contar desde el  principio de la palabra. 

- **substring(inicio, final)**, extrae una porción de una cadena de texto. El segundo parámetro  es opcional. Si sólo se indica el parámetro inicio, la función devuelve la parte de la cadena  original correspondiente desde esa posición hasta el final: 


```JavaScript
var mensaje = “Hola Mundo”; 
var porcion = mensaje.substring(2); // porcion = “la Mundo” 
porcion = mensaje.substring(5); // porcion = “Mundo” 
porcion = mensaje.substring(7); // porcion = “ndo” 
```

Si se indica un inicio negativo, se devuelve la misma cadena original: 

```JavaScript
var mensaje = “Hola Mundo”; 
var porcion = mensaje.substring(-2); // porcion = “Hola Mundo” 
```

Cuando se indica el inicio y el final, se devuelve la parte de la cadena original comprendida  entre la posición inicial y la inmediatamente anterior a la posición final (es decir, la  posición inicio está incluida y la posición final no): 


```JavaScript
var mensaje = “Hola Mundo”; 
var porcion = mensaje.substring(1, 8); // porcion = “ola Mun” 
porcion = mensaje.substring(3, 4); // porcion = “a”
```

Si se indica un final más pequeño que el inicio, JavaScript los considera de forma inversa,  ya que automáticamente asigna el valor más pequeño al inicio y el más grande al final: 

```JavaScript
var mensaje = “Hola Mundo”; 
var porcion = mensaje.substring(5, 0); // porcion = “Hola ” 
porcion = mensaje.substring(0, 5); // porcion = “Hola ” 
```

- **split(separador)**, convierte una cadena de texto en un array de cadenas de texto. La  función parte la cadena de texto determinando sus trozos a partir del  carácter separador indicado: 


```JavaScript
var mensaje = “Hola Mundo, soy una cadena de texto!”; 
var palabras = mensaje.split(” “); 
// palabras = [“Hola”, “Mundo,”, “soy”, “una”, “cadena”, “de”, “texto!”]; 
```

Con esta función se pueden extraer fácilmente las letras que forman una palabra: 

```JavaScript
var palabra = “Hola”; 
var letras = palabra.split(“”); // letras = [“H”, “o”, “l”, “a”]
```


#### Funciones útiles para Arrays 

A continuación se muestran algunas de las funciones más útiles para el manejo de arrays: 

- **length**, calcula el número de elementos de un array 


```JavaScript
var vocales = [“a”, “e”, “i”, “o”, “u”]; 
var numeroVocales = vocales.length; // numeroVocales = 5 
```

- **concat()**, se emplea para concatenar los elementos de varios arrays 


```JavaScript
var array1 = [1, 2, 3]; 
array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3, 4, 5, 6] 
array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6] 
```


- **join(separador)**, es la función contraria a split(). Une todos los elementos de un array para  formar una cadena de texto. Para unir los elementos se utiliza el carácter separador indicado 

```JavaScript
var array = [“hola”, “mundo”]; 
var mensaje = array.join(“”); // mensaje = “holamundo” 
mensaje = array.join(” “); // mensaje = “hola mundo”
```


- **pop()**, elimina el último elemento del array y lo devuelve. El array original se modifica y su  longitud disminuye en 1 elemento. 


```JavaScript
var array = [1, 2, 3]; 
var ultimo = array.pop(); 
// ahora array = [1, 2], ultimo = 3 
```

- **push()**, añade un elemento al final del array. El array original se modifica y aumenta su  longitud en 1 elemento. (También es posible añadir más de un elemento a la vez) 


```JavaScript
var array = [1, 2, 3]; 
array.push(4); 
// ahora array = [1, 2, 3, 4] 
```


- **shift()**, elimina el primer elemento del array y lo devuelve. El array original se ve  modificado y su longitud disminuida en 1 elemento. 


```JavaScript
var array = [1, 2, 3]; 
var primero = array.shift(); 
// ahora array = [2, 3], primero = 1
```


- **unshift()**, añade un elemento al principio del array. El array original se modifica y aumenta  su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez) 


```JavaScript
var array = [1, 2, 3]; 
array.unshift(0); 
// ahora array = [0, 1, 2, 3] 
```


- **reverse()**, modifica un array colocando sus elementos en el orden inverso a su posición  original: 


```JavaScript
var array = [1, 2, 3]; 
array.reverse(); 
// ahora array = [3, 2, 1]
```


#### Funciones útiles para Números 

A continuación se muestran algunas de las funciones y propiedades más útiles para el  manejo de números. 

- **NaN**, (del inglés, “Not a Number”) JavaScript emplea el valor NaN para indicar un valor  numérico no definido (por ejemplo, la división 0/0). 


```JavaScript
var numero1 = 0; 
var numero2 = 0; 
alert(numero1/numero2); // se muestra el valor NaN 
```


- **isNaN()**, permite proteger a la aplicación de posibles valores numéricos no definidos var numero1 = 0; 

```JavaScript
var numero2 = 0; 

if(isNaN(numero1/numero2)) { 
 alert(“La división no está definida para los números indicados”); 
} else { 
 alert(“La división es igual a => ” + numero1/numero2); 
}
```


- **Infinity**, hace referencia a un valor numérico infinito y positivo (también existe el valor – Infinity para los infinitos negativos) 

```JavaScript
var numero1 = 10; 
var numero2 = 0; 
alert(numero1/numero2); // se muestra el valor Infinity 
```


- **toFixed(digitos)**, devuelve el número original con tantos decimales como los indicados por  el parámetro digitos y realiza los redondeos necesarios. Se trata de una función muy útil  por ejemplo para mostrar precios. 

```JavaScript
var numero1 = 4564.34567; 
numero1.toFixed(2); // 4564.35 
numero1.toFixed(6); // 4564.345670 
numero1.toFixed(); // 4564
```


#### Sentencia break/continue y otras estructuras de control 

La estructura de control for es muy sencilla de utilizar, pero tiene el inconveniente de que  el número de repeticiones que se realizan sólo se pueden controlar mediante las variables  definidas en la zona de actualización del bucle. 

Las sentencias break y continue permiten manipular el comportamiento normal de los  bucles for para detener el bucle o para saltarse algunas repeticiones. Concretamente, la  sentencia break permite terminar de forma abrupta un bucle y la  

sentencia continue permite saltarse algunas repeticiones del bucle. 

El siguiente ejemplo muestra el uso de la sentencia break: 


```JavaScript
var cadena = “En un lugar de la Mancha de cuyo nombre no quiero acordarme…”; 
var letras = cadena.split(“”); 
var resultado = “”; 

for(i in letras) { 
 if(letras[i] == ‘a’) { 
 break; 
}  else { 
 resultado += letras[i]; 
 } 
} 

alert(resultado); // muestra “En un lug”
```


Si el programa llega a una instrucción de tipo break;, sale inmediatamente del bucle y  continúa ejecutando el resto de instrucciones que se encuentran fuera del bucle for. En el  ejemplo anterior, se recorren todas las letras de una cadena de texto y cuando se  encuentra con la primera letra “a”, se detiene la ejecución del bucle for. 

La utilidad de break es terminar la ejecución del bucle cuando una variable toma un  determinado valor o cuando se cumple alguna condición. 

En ocasiones, lo que se desea es saltarse alguna repetición del bucle cuando se dan  algunas condiciones. Siguiendo con el ejemplo anterior, ahora se desea que el texto de  salida elimine todas las letras “a” de la cadena de texto original: 


```JavaScript
var cadena = “En un lugar de la Mancha de cuyo nombre no quiero acordarme…”; 
var letras = cadena.split(“”); 
var resultado = “”; 

for(i in letras) { 
 if(letras[i] == ‘a’) { 
 continue; 
}  else { 
 resultado += letras[i]; 
 } 
} 

alert(resultado); // muestra “En un lugr de l Mnch de cuyo nombre no quiero cordrme…”
```

En este caso, cuando se encuentra una letra “a” no se termina el bucle, sino que no se  ejecutan las instrucciones de esa repetición y se pasa directamente a la siguiente  repetición del bucle for. 

La utilidad de continue es que permite utilizar el bucle for para filtrar los resultados en  función de algunas condiciones o cuando el valor de alguna variable coincide con un valor  determinado. 



#### Bucles 

Las estructuras de control de flujo que se han visto (if, else, for) y las sentencias que  modifican su comportamiento (break, continue) no son suficientes para realizar algunas  tareas complejas y otro tipo de repeticiones. Por ese motivo, JavaScript proporciona otras  estructuras de control de flujo diferentes y en algunos casos más eficientes. 

#### Estructura While 

La estructura while permite crear bucles que se ejecutan ninguna o más veces,  dependiendo de la condición indicada. Su definición formal es: 


```
while(condicion) { 
 … 
} 
```

El funcionamiento del bucle while se resume en: “mientras se cumpla la condición  indicada, repite indefinidamente las instrucciones incluidas dentro del bucle”. 

Si la condición no se cumple ni siquiera la primera vez, el bucle no se ejecuta. Si la  condición se cumple, se ejecutan las instrucciones una vez y se vuelve a comprobar la  condición. Si se sigue cumpliendo la condición, se vuelve a ejecutar el bucle y así se  continúa hasta que la condición no se cumpla. 

Evidentemente, las variables que controlan la condición deben modificarse dentro del  propio bucle, ya que de otra forma, la condición se cumpliría siempre y el bucle while se  repetiría indefinidamente.

El siguiente ejemplo utiliza el bucle while para sumar todos los números menores o  iguales que otro número: 


```JavaScript
var resultado = 0; 
var numero = 100; 
var i = 0; 

while(i <= numero) { 
 resultado += i; 
 i++; 
} 

alert(resultado); 
```

El programa debe sumar todos los números menores o igual que otro dado. Por ejemplo si  el número es 5, se debe calcular: 1 + 2 + 3 + 4 + 5 = 15 

Este tipo de condiciones “suma números mientras sean menores o iguales que otro  número dado”) se resuelven muy fácilmente con los bucles tipo while, aunque también se  podían resolver con bucles de tipo for. 

En el ejemplo anterior, mientras se cumpla la condición, es decir, mientras que la  variable i sea menor o igual que la variable numero, se ejecutan las instrucciones del  bucle. 

Dentro del bucle se suma el valor de la variable i al resultado total (variable resultado) y se  actualiza el valor de la variable i, que es la que controla la condición del bucle. Si no se  actualiza el valor de la variable i, la ejecución del bucle continua infinitamente o hasta que  el navegador permita al usuario detener el script.



#### Estructura Do…while 

El bucle de tipo do…while es muy similar al bucle while, salvo que en este caso siempre se  ejecutan las instrucciones del bucle al menos la primera vez. Su definición formal es: 

```
do { 
 … 
} while(condicion); 
```


De esta forma, como la condición se comprueba después de cada repetición, la primera  vez siempre se ejecutan las instrucciones del bucle. Es importante no olvidar que después  del while() se debe añadir el carácter ; (al contrario de lo que sucede con el  bucle while simple). 

Utilizando este bucle se puede calcular fácilmente el factorial de un número: 


```JavaScript
var resultado = 1; 
var numero = 5; 

do { 
 resultado *= numero; // resultado = resultado * numero 
 numero–; 
} while(numero > 0); 

alert(resultado);
```


En el código anterior, el resultado se multiplica en cada repetición por el valor de la  variable numero. Además, en cada repetición se decrementa el valor de esta  variable numero. La condición del bucle do…while es que el valor de numero sea mayor  que 0, ya que el factorial de un número multiplica todos los números menores o iguales  que él mismo, pero hasta el número 1 (el factorial de 5 por ejemplo es 5 x 4 x 3 x 2 x 1 =  120). 

Como en cada repetición se decrementa el valor de la variable numero y la condición es  que numero sea mayor que cero, en la repetición en la que numero valga 0, la condición  ya no se cumple y el programa se sale del bucle do…while. 



#### Estructura Switch 

La estructura if…else se puede utilizar para realizar comprobaciones múltiples y tomar  decisiones complejas. Sin embargo, si todas las condiciones dependen siempre de la  misma variable, el código JavaScript resultante es demasiado redundante: 

```
if(numero == 5) { 
 … 
}  else if(numero == 8) { 
 … 
}  else if(numero == 20) { 
 … 
} …
```


En estos casos, la estructura switch es la más eficiente, ya que está especialmente  diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable. Su  definición formal puede parecer compleja, aunque su uso es muy sencillo: 

```
switch(variable) { 
 case valor_1: 
    … 
    break; 

 case valor_2: 
    … 
    break; 
 … 
 case valor_n: 
    … 
    break; 

 default: 
   … 
   break; 
}
```
El anterior ejemplo realizado con if…else se puede rehacer mediante switch: switch(numero) { 


```
 case 5: 
   … 
   break; 
 case 8: 
   … 
   break; 
 case 20: 
   … 
   break; 
 default: 
   … 
   break; 
}
```

La estructura switch se define mediante la palabra reservada switch seguida, entre  paréntesis, del nombre de la variable que se va a utilizar en las comparaciones. Como es  habitual, las instrucciones que forman parte del switch se encierran entre las llaves { y }. 

Dentro del switch se definen todas las comparaciones que se quieren realizar sobre el  valor de la variable. Cada comparación se indica mediante la palabra  reservada case seguida del valor con el que se realiza la comparación. Si el valor de la  variable utilizada por switch coincide con el valor indicado por case, se ejecutan las  instrucciones definidas dentro de ese case. 

Normalmente, después de las instrucciones de cada case se incluye la  sentencia break para terminar la ejecución del switch, aunque no es obligatorio. Las  comparaciones se realizan por orden, desde el primer case hasta el último, por lo que es  muy importante el orden en el que se definen los case. 

¿Qué sucede si ningún valor de la variable del switch coincide con los valores definidos en  los case? En este caso, se utiliza el valor default para indicar las instrucciones que se  ejecutan en el caso en el que ningún case se cumpla para la variable indicada. 

Aunque default es opcional, las estructuras switch suelen incluirlo para definir al menos  un valor por defecto para alguna variable o para mostrar algún mensaje por pantalla.

---
---
