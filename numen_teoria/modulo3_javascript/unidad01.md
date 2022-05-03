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

## :star: Variables


### ¿Qué son las variables?

¡Hola! Seguimos profundizando en los aspectos más importantes de JavaScript; en este sentido vamos a destacar la definición y uso de las variables. En programación, las variables son contenedores que nos permiten almacenar valores numéricos, cadenas de caracteres o estructuras de datos como listas, arreglos de valores u objetos. Por el momento, vamos a estudiar las variables que almacenan valores simples como números o cadenas de caracteres. La principal propiedad de las variables, como su nombre lo indica, es almacenar valores que pueden cambiar a lo largo de la ejecución del programa; es por esta razón que reciben el nombre de variables. 

Estos valores almacenados se pueden utilizar o acceder en cualquier momento de la ejecución de nuestro programa. Así como en álgebra utilizamos variables para trabajar con ecuaciones y fórmulas complejas, en programación trabajamos con variables para poder ejecutar los pasos que componen los algoritmos de la aplicación que estamos codificando.

Ya que vimos algunas propiedades de las variables, pasemos a aprender cómo utilizarlas en JavaScript.

Para declarar una variable es necesario tener presente la siguiente estructura:

```JavaScript
var x = 5;
```


### Estructura básica para la declaración de variables

A continuación se describen los componentes de la estructura básica para la declaración de variables en JavaScript:

var es la palabra reservada que le indica a JavaScript que estamos declarando una variable.

```x``` es el nombre que le asignamos a la variable.

```= ```es el operador de asignación que le indica a JavaScript qué valor asignar.

```5``` corresponde al valor inicial que vamos a almacenar en la variable.


### Buenas prácticas

Los nombres de las variables son muy flexibles aunque te recomendamos estas buenas prácticas para nombrar tus variables:

- Los nombres deben expresar el contenido de la variable, así hacemos nuestro código más entendible a otros programadores; por ejemplo, si en la variable almacenamos la edad de un estudiante entonces la variable puede llamarse: edad, edadEstudiante o edadAlumno.

- El nombre de las variables puede contener los caracteres, underscore (``` _ ```), o signo de dólar ( ```$``` ) al inicio, en medio o al final del nombre.

- El nombre de las variables debe iniciar con una letra ASCII sea mayúscula o minúscula, también puede empezar con un guión bajo (```_```) o un signo de dólar (```$```).

- Para separar las palabras que componen el nombre de la variable, JavaScript utiliza la convención camelCase, la cual indica que las variables empiezan en minúscula y cuando cambias de palabra inicias el primer carácter con letra mayúscula. 

Por ejemplo: 

para nombrar la variable color del carro puedes utilizar los siguientes nombres: colorCarro o colorDelCarro.


- No debes usar palabras reservadas de JavaScript para nombrar variables.


- El nombre de las variables no debe empezar con números.

- El nombre de las variables no puede contener caracteres especiales como: &, ~, %, #.

- Las variables en JavaScript nunca pueden iniciar con números, pero sí pueden contener números en la mitad o al final del nombre.


A continuación tienes unos ejemplos de nombres de variables válidos en JavaScript:

Ejemplo

```JavaScript
var pizza2go = "pizza";
var aprendo_JAVASCRIPT = true;
var $_$ = "moneda";
var _saludo = "Hola";
var nombreVariable = "camel case";
```


Aquí puedes ver algunos ejemplos de nombres inválidos para las variables:

Ejemplo

```
>var function = true;
>var total% = 125;
>var class = "variables";
>var 2nombre = "clase de variables";
```
Las variables son sensibles a mayúsculas de manera que miVar, MiVar, mivar son variables completamente diferentes. Es una buena práctica de programación, evitar nombres similares entre las variables, o nombres que no nos den una referencia clara de cuál puede ser su contenido, por ejemplo:

```var x = true;```

Después de declarar una variable, es posible hacer referencia a ésta (utilizar u obtener el valor de la variable) por su nombre en cualquier parte de nuestro programa, teniendo en cuenta el scope o ámbito de las variables que estudiaremos más adelante. Así como también podemos hacer diferentes operaciones con las mismas.

Código

```
>var valor1 = 5;
>var valor2 = 7;
>valor1 + valor2;
```
Resultado: 12

En el ejemplo anterior se declararon dos variables (valor1) y (valor2) que luego son utilizadas en una suma; al sumar las dos variables, el resultado es 12.

También es posible hacer uso de variables cuando estamos declarando otras variables:

```var suma = valor1 + 95;```

Después de declarar variables ( var ) podemos re-asignar nuevos valores o datos para que sean almacenados en dichas variables:

Código
```
>var nombre = "carlos";
>nombre = "pedro";
>nombre;```

Resultado

pedro

En JavaScript, otra manera de declarar variables se puede lograr usando los comandos let y const, palabras reservadas para el lenguaje, definidas en el estándar ECMAScript 6. Con el comando let declaramos variables limitando su uso a un bloque de código determinado, mientras que con el comando const definimos constantes o variables que tendrán un valor que no podrá modificarse posteriormente.


---
---

## :star: Funciones de Java Script


#### Funciones 

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una  función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que  realiza una tarea o calcula un valor, pero para que un procedimiento califique como  función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia  entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del  ámbito desde el que deseas llamarla. 

Programar, usando un símil, podemos verlo como realizar un viaje por carretera. Cuando  realizamos un viaje, aparte de la necesidad de definir el objetivo y estudiar la ruta del viaje  (estructura del programa) podemos decir que: “En general, pero sobre todo para viajes  complicados, conviene dividir el problema en subapartados”. 

El concepto de función aplicado a la programación JavaScript es muy similar al aplicable a  distintas facetas de la vida: un escritor divide su curso en capítulos y apéndices. Un  profesor divide el contenido de la asignatura en temas. Un ingeniero divide el proyecto en  partes como Memoria, Anejos, Pliego de Condiciones, Presupuesto y Planos. En una  fábrica, organizan el trabajo dividiendo las áreas funcionales en recepción de materias  primas, área de pre-proceso, área de proceso, área de post-proceso y área de carga y  despacho de producto terminado. 

De cara a la programación JavaScript, usaremos la división del código en funciones por ser  una estrategia efectiva para resolver problemas complejos. Cada función será llamada  para realizar su cometido en un orden establecido. 

Además una función se puede llamar tantas veces como se desee, lo cual evita tener que  repetir código y por otro lado permite que cuando haya que realizar una corrección  únicamente tengamos que hacerla en la función concreta que se ve afectada. 

Las funciones pueden recibir información para realizar su cometido, por ejemplo function  suma (a, b) recibe dos elementos de información: a y b, o no recibirla por realizar un  proceso que no necesita recibir información, por ejemplo function dibujarCirculo(). 

#### Otra característica interesante de las funciones es que permite abstraer los problemas.  

Supongamos que necesitamos una función que devuelva para un importe de una compra  sin impuestos el importe con impuestos, y que a su vez el porcentaje de impuestos a  aplicar depende del tipo de producto. Si un compañero nos facilita la función function  obtenerImporteConImpuestos (importeSinImpuestos) no tenemos que preocuparnos del  código de la función. Unicamente sabemos que invocando a la función obtendremos el  importe con impuestos. De esta forma, podemos utilizar funciones que han creado otros  programadores o funciones disponibles en librerías sin necesidad de conocer el código de  las mismas. Decimos que las funciones son “cajas negras” que facilitan la abstracción  porque no necesitamos ver en su interior, sólo nos interesan sus resultados.

De hecho, es posible que un programador use un código para una función function  obtenerImporteConImpuestos (importeSinImpuestos) y otro programador use otro código  para esa misma función sin que esto suponga ningún problema. Lo importante es que la  función realice su cometido, no cómo lo realice ya que es frecuente que haya distintas  maneras de hacer algo (aunque ciertamente hacer las cosas de diferente manera no debe  significar que unas veces se hagan bien y otras mal: siempre deberían hacerse las cosas  bien). 

Una función en general debe tener un nombre descriptivo de cuál es su cometido y tener  un cometido claro y único. No deben mezclarse tareas que no tengan relación entre sí  dentro de una función. 


#### Funciones con Parámetros y sin Parámetros 

Una función JavaScript puede requerir ser llamada pasándole cierta información o no  requerir información. 

Definición de una función sin parámetros (no requiere información): 

```
// Comentario descriptivo de qué hace la función 

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

- c) Objetos de naturaleza compleja, como arrays y otros tipos de objetos que veremos más
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

Aquí vemos dos cosas de interés: 

el parámetro que recibe la función no tiene un tipo de  datos explícito. El tipo de datos es “inferido” por el intérprete JavaScript. Por otro lado, el parámetro está disponible dentro de la función con el valor con el que  haya sido invocado. Por ejemplo onclick=”mostrarImporteConImpuestos(100)” hará que  importeSinImpuestos valga 100 porque ese es el valor con el que se invoca. Cuando una función tiene varios parámetros, se debe invocar escribiendo su nombre  seguido de los parámetros en el orden adecuado. 



#### Funciones que devuelven un resultado (return) 

Una función JavaScript puede devolver un resultado si se introduce la sentencia return  resultado; donde resultado es aquello que queremos devolver (normalmente una variable  que contiene un valor numérico, de texto o booleano, pero también podrían ser objetos  con mayor complejidad como un array). 

Una vez se llega a la sentencia return se produce la devolución del resultado y se  interrumpe la ejecución de la función. Por ello la sentencia return será normalmente la  última instrucción dentro de una función. 

Definición de una función sin parámetros que devuelve un resultado: // Comentario descriptivo de qué hace la función 

```
function nombreDeLaFunción () {  
  // Código de la función 
  return resultado; 
}
```

Definición de una función con parámetros que devuelve un resultado: // Comentario descriptivo de qué hace la función 

```
function nombreDeLaFunción (param1, param2, …, paramN) {  
 // Código de la función 
 return resultado; 
} 
```

Una función sólo devolverá un resultado y normalmente sólo tendrá una sentencia return,  aunque si hay sentencias condicionales como if, puede haber varias sentencias return: una  sentencia return para cada sentencia condicional. 

Si además del resultado la función incluye código que implique acciones como mostrar un  mensaje por pantalla, se ejecutará el código a la vez que se devuelve el resultado. 

Veamos un ejemplo: 

```JavaScript
function obtenerImporteConImpuestos(importeSinImpuestos) { 
    var importeConImpuestos; 
    importeConImpuestos = importeSinImpuestos * 1.21; 
    return importeConImpuestos; 
} 
```

Un ejemplo de uso de esta función sería: 

```onclick=”alert(‘Calculado para producto de precio 100: importe con impuestos vale ‘ +  obtenerImporteConImpuestos(100));”```


### Llamadas a Funciones desde otras funciones 

Una función puede llamar a otra función simplemente escribiendo su nombre y los  parámetros que sean necesarios. Ejemplo: 


```
function mostrarImporteConImpuestos2(importeSinImpuestos) { 

    var msg; msg = ‘Ejemplo. Importe antes de impuestos: ‘+ importeSinImpuestos + ‘\n\n’;  
    alert(msg + ‘Importe con impuestos: ‘+  obtenerImporteConImpuestos(importeSinImpuestos) + ‘\n\n’); 
} 
```
En esta función en vez de realizarse el cálculo del importe con impuestos, se invoca otra  función que es la que se encarga de realizar el cálculo y devolver el valor correspondiente. 


###5 Parámetros 

Los parámetros son variables locales a los que se les asigna un valor antes de comenzar la  ejecución del cuerpo de una función. Su ámbito de validez, por tanto, es el propio cuerpo  de la función. El mecanismo de paso de parámetros a las funciones es fundamental para  comprender el comportamiento de los programas 

#### Paso de parámetros a Funciones 

Hay dos formas comunes de pasar parámetros a funciones en programación: por valor,  que implica que si se pasa una variable sus cambios sólo son conocidos dentro de la  función, o por variable, que implica que si se pasa una variable ésta puede ser modificada  por la función y sus cambios ser conocidos fuera de la función. JavaScript trabaja con paso  de parámetros por valor, lo que implica que la variable pasada como parámetro funciona  como una variable local a la función: si el parámetro sufre cambios, estos cambios sólo  son conocidos dentro de la función. La variable “verdadera” no puede ser modificada. 


- Paso de un número de parámetros incorrectos 

Si se pasan más parámetros de los necesarios, JavaScript ignorará los parámetros  sobrantes. Si se pasan menos parámetros de los necesarios, JavaScript asignará valor  undefined a los parámetros de los que no se recibe información y se ejecutará sin que  surja ningún mensaje de error (aparte de los posibles resultados extraños que esto  pudiera ocasionar).


### Variables globales y locales 

El ámbito de una variable (llamado “scope” en inglés) es la zona del programa en la que se  define la variable. JavaScript define dos ámbitos para las variables: global y local. El siguiente ejemplo ilustra el comportamiento de los ámbitos: 


```JavaScript
function creaMensaje() { 
 var mensaje = “Mensaje de prueba”; 
} 

creaMensaje(); 

alert(mensaje); 
```


El ejemplo anterior define en primer lugar una función llamada creaMensaje que crea una  variable llamada mensaje. A continuación, se ejecuta la función mediante la llamada  creaMensaje(); y seguidamente, se muestra mediante la función alert() el valor de una  variable llamada mensaje. 

Sin embargo, al ejecutar el código anterior no se muestra ningún mensaje por pantalla. La  razón es que la variable mensaje se ha definido dentro de la función creaMensaje() y por  tanto, es una variable local que solamente está definida dentro de la función. 

Cualquier instrucción que se encuentre dentro de la función puede hacer uso de esa  variable, pero todas las instrucciones que se encuentren en otras funciones o fuera de  cualquier función no tendrán definida la variable mensaje.  

De esta forma, para mostrar el mensaje en el código anterior, la función alert() debe  llamarse desde dentro de la función creaMensaje(): 


```JavaScript
function creaMensaje() { 
 var mensaje = “Mensaje de prueba”; 
 alert(mensaje); 
} 

creaMensaje();
```


Además de variables locales, también existe el concepto de variable global, que está  definida en cualquier punto del programa (incluso dentro de cualquier función). 

```
var mensaje = “Mensaje de prueba”; 


function muestraMensaje() { 
 alert(mensaje); 
} 
```


El código anterior es el ejemplo inverso al mostrado anteriormente. Dentro de la función  muestraMensaje() se quiere hacer uso de una variable llamada mensaje y que no ha sido  definida dentro de la propia función.  

Sin embargo, si se ejecuta el código anterior, sí que se muestra el mensaje definido por la  variable mensaje. 

El motivo es que en el código JavaScript anterior, la variable mensaje se ha definido fuera  de cualquier función. Este tipo de variables automáticamente se transforman en variables  globales y están disponibles en cualquier punto del programa (incluso dentro de cualquier  función). 

De esta forma, aunque en el interior de la función no se ha definido ninguna variable  llamada mensaje, la variable global creada anteriormente permite que la instrucción  alert() dentro de la función muestre el mensaje correctamente. 

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


### Objetos 

Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente  consta de algunas variables y funciones, que se denominan propiedades y métodos  cuando están dentro de objetos). Vamos a trabajar a través de un ejemplo para mostrarte  cómo son. 

Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza  con la definición e iniciación de una variable. 

```
var persona = {}; 
```

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


```JavaScript
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


### Notación de punto 

Arriba, accediste a las propiedades y métodos del objeto usando notación de punto (dot  notation). El nombre del objeto (persona) actúa como el espacio de nombre (namespace);  al cual se debe ingresar primero para acceder a cualquier elemento encapsulado dentro  del objeto. A continuación, escribe un punto y luego el elemento al que deseas acceder:  puede ser el nombre de una simple propiedad, un elemento de una propiedad de arreglo  o una llamada a uno de los métodos del objeto, por ejemplo: 


```
persona.edad 
persona.intereses[1] 
persona.bio() 
```


### Espacios de nombres secundarios 

Incluso es posible hacer que el valor de un miembro del objeto sea otro objeto. Por  ejemplo, intenta cambiar el miembro nombre de 

```nombre: [‘Bob’, ‘Smith’],``` 

a 
```
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


### Notación de corchetes 

Hay otra manera de acceder a las propiedades del objeto, usando la notación de  corchetes. En lugar de usar estos: 
```
persona.edad 

persona.nombre.pila 

Puedes usar 

persona[‘edad’] 

persona[‘nombre’][‘pila’] 
```

Esto se ve muy similar a cómo se accede a los elementos en un arreglo, y básicamente es  lo mismo: en lugar de usar un número de índice para seleccionar un elemento, se esta  utilizando el nombre asociado con el valor de cada miembro. No es de extrañar que los  objetos a veces se denominen arreglos asociativos: asocian cadenas de texto a valores de  la misma manera que las arreglos asocian números a valores. 

Establecer miembros de objetos 

Hasta ahora solo hemos buscado recuperar (u obtener) miembros del objeto: también  puede establecer (actualizar) el valor de los miembros del objeto simplemente declarando  el miembro que deseas establecer (usando la notación de puntos o corchetes), de esta  manera: 
```
persona.edad = 45; 

persona[‘nombre’][‘apellido’] = ‘Cratchit’; 

Intenta ingresar estas líneas y luego vuelve a ver a los miembros para ver cómo han  cambiado: 

persona.edad 

persona[‘nombre’][‘apellido’] 
```

Establecer miembros no solo es actualizar los valores de las propiedades y métodos  existentes; también puedes crear miembros completamente nuevos. Prueba estos: 
```
persona[‘ojos’] = ‘avellana’; 

persona.despedida = function() { alert(“¡Adiós a todos!”); } 

Ahora puedes probar a los nuevos miembros: 

persona[‘ojos’] 

person.despedida()
```
Un aspecto útil de la notación de corchetes es que se puede usar para establecer  dinámicamente no solo los valores de los miembros, sino también los nombres de los  miembros. Digamos que queremos que los usuarios puedan almacenar tipos de valores  personalizados en sus datos personales, escribiendo el nombre y el valor del miembro en  dos entradas de texto. Podríamos obtener esos valores de esta manera: 

```
var nombrePerzonalizado = entradaNombre.value; 
var valorPerzonalizado = entradaValor.value; 
```

entonces podríamos agregar este nuevo miembro nombre y valor al objeto persona de  esta manera: 
```
persona[nombrePerzonalizado] = valorPerzonalizado; 
```

Para probar esto, intenta agregar las siguientes líneas en tu código, justo debajo de la llave  de cierre del objeto persona: 
```
var nombrePerzonalizado = ‘altura’; 
var valorPerzonalizado = ‘1.75m’; 
persona[nombrePerzonalizado] = valorPerzonalizado; 
```

Ahora intenta guardar y actualizar, e ingresa lo siguiente en tu entrada de texto: persona.altura 

Agregar una propiedad a un objeto no es posible con la notación de puntos, que solo  puede aceptar un nombre de miembro literal, no un valor variable que apunte a un  nombre. 

Has estado usando objetos todo el tiempo 

A medida que has estado repasando estos ejemplos, probablemente hayas pensando que  la notación de puntos que has usando es muy familiar. ¡Eso es porque la has estado  usando a lo largo del curso! Cada vez que hemos estado trabajando en un ejemplo que  utiliza una API de navegador incorporada o un objeto JavaScript, hemos estado usando objetos, porque tales características se crean usando exactamente el mismo tipo de  estructuras de objetos que hemos estado viendo aquí, aunque más complejos que  nuestros propios ejemplos personalizados.

Entonces cuando usaste métodos de cadenas de texto como: 

```myCadena.split(‘,’); ```

Estabas usando un método disponible en una instancia de la clase String. Cada vez que  creas una cadena en tu código, esa cadena se crea automáticamente como una instancia  de String, y por lo tanto tiene varios métodos/propiedades comunes disponibles en ella. 

Cuando accediste al modelo de objetos del documento (document object model) usando  líneas como esta: 
```
var miDiv = document.createElement(‘div’); 
var miVideo = document.querySelector(‘video’); 
```

Estaba usando métodos disponibles en una instancia de la clase Document. Para cada  página web cargada, se crea una instancia de Document, llamada document, que  representa la estructura, el contenido y otras características de la página entera, como su  URL. De nuevo, esto significa que tiene varios métodos/propiedades comunes disponibles  en él. 

Lo mismo puede decirse de prácticamente cualquier otro Objeto/API incorporado que  hayad estado utilizando: Array, Math, etc. 

Ten en cuenta que los Objetos/API incorporados no siempre crean instancias de objetos  automáticamente. Como ejemplo, la API de Notificaciones, que permite que los  navegadores modernos activen las notificaciones del sistema, requiere que crees una  instancia de un nuevo objeto para cada notificación que desees disparar. Intenta ingresar  lo siguiente en tu consola de JavaScript: 
```
var miNotificacion = new Notification(‘¡Hola!’); 
```

Nota: Es útil pensar en la forma en que los objetos se comunican como paso de mensajes  — cuando un objeto necesita otro objeto para realizar algún tipo de acción a menudo  enviará un mensaje a otro objeto a través de uno de sus métodos, y esperará una  respuesta, que conocemos como un valor de retorno.

### Función constructura y new 

JavaScript no tiene una notación formal de clase y recurre a las funciones constructoras  para este fin. Mencionar también que JavaScript utiliza los prototipos de los objetos para  propagar la herencia, algo que sin duda cuesta entender al principio y al que dedicaremos  un artículo independiente más adelante. 

### Función constructora 

Una función constructora es una función normal y corriente de JavaScript que se utiliza  para definir una especie de plantilla para nuestros objetos personalizados. Veamos un  ejemplo: 

```
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

```
// Constructor vacío 
function Cliente() { 
 this._nombre; 
 this._fechaNacimiento; 
 this._direccion; 
} 
```


```

// Creamos el objeto y le asignamos valores 
var cliente = new Cliente(); 
cliente._nombre = “Cristina Rodriguez”; 
cliente._fechaNacimiento = new Date(1987, 3, 25); 
cliente._direccion = “Plaza Bilbao 25”;
```


Comprobar la función constructora de un objeto 

Todos los objetos de JavaScript, ya sean nativos o de usuario, tienen una propiedad  constructor que heredan del objeto genérico Object, la cual hace referencia a la función  constructora que inicializa el objeto lo que en principio (ahora veremos por qué digo  esto) nos permite determinar la función constructora de un objeto, y casi por extensión, la  clase de éste: 

```
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

## Uso del This para el público y privado 

### ¿Qué es “this” (este)? 

Es posible que hayas notado algo un poco extraño en nuestros métodos.  Mira esto, por ejemplo: 

saludo: function() { 

 alert(‘¡Hola!, Soy ‘+ this.nombre.pila + ‘.’); 

} 

Probablemente te estés preguntando qué es “this”. La palabra clave this se refiere al  objeto actual en el que se está escribiendo el código, por lo que en este caso this es  equivalente a la persona.  

Entonces, ¿por qué no escribir persona en su lugar? Como verás en el artículo JavaScript  orientado a objetos para principiantes cuando comenzaremos a crear constructores, etc.,  this es muy útil: siempre asegurará que se usen los valores correctos cuando cambie el  contexto de un miembro (por ejemplo, dos diferentes instancias de objetos persona)  pueden tener diferentes nombres, pero querráx usar su propio nombre al decir su saludo). 

Vamos a ilustrar lo que queremos decir con un par de objetos persona simplificados: 

```
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

En este caso, persona1.saludo() mostrará “¡Hola!, Soy Chris”; persona2.saludo() por otro  lado mostrará “¡Hola!, Soy Brian”, aunque el código del método es exactamente el mismo  en cada caso. Como dijimos antes, this es igual al objeto en el que está el código; esto no  es muy útil cuando se escriben objetos literales a mano, pero realmente se vuelve útil  cuando se generan objetos dinámicamente (por ejemplo, usando constructores) Todo se  aclarará más adelante.

this es un keyword de JavaScript que tiene un comportamiento muy diferente a otros  lenguajes de programación, así para algunos es considerado uno de los grandes errores de  diseño del lenguaje. 

La clave para entender el comportamiento de this, es tener claro donde se invoca, para  saber qué objeto le asigna. 

¿Donde se está invocando this? 

Asignación implícita 

Caso 1 

En el primer caso this está siendo invocado dentro de un método. 
```
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

Caso 2 

En este caso, existe una función que recibe un objeto como parámetro, y le agrega el  método hablar, luego, se ejecuta la función sobre dos objetos. 

```
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

Mateo.hablar(); // Mateo ```


This en este caso hace referencia al objeto que se añade este método.

Caso 3 

En este caso tenemos una función que retorna un objeto, que contiene un método hablar,  que invoca this. 

```
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

En el caso de asignación implícita, this hace referencia al objeto, que contenía el método  donde se invoca this, pero si tenemos una función y deseamos explícitamente asignarle a  que va a hacer referencia this, desde ES5 contamos con los métodos call(), apply() y bind(). Vamos a tener una función, que reciba unos parámetros y muestre en consola, con la  propiedad nombre a la que haga referencia this, y los parámetros que recibe. 

```
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

```call() ```


```hablar.call(yeison, lenguajes[0],lenguajes[1],lenguajes[2]); ```


El método call nos permite definir a que va a hacer referencia this, en su primer  parámetro, los parámetros siguientes son los parámetros que recibe la función. 

```apply()``` 


```hablar.apply(yeison, lenguajes); ```

El método apply, funciona igual que call, permitiendo referencia this en el primer  parámetro, pero este nos permite pasar un array, como los parámetros de la funcion. 

```bind()``` 

Este método funciona diferente a los anteriores, este nos devuelve una función, en dónde  this, hace referencia al objeto que pasamos en su parámetro. 

const hablaYeison = hablar.bind(yeison, lenguajes[0],lenguajes[1],lenguajes[2]); hablaYeison(); 

Estos tres métodos nos permite hacer una referencia explícita, y tener claro el valor de  this, en la ejecución.


### Asignación con new 

Otro caso, es cuando invocamos this en un constructor , como el siguiente ejemplo: 

```
let Animal = function(color, nombre, tipo) { 

 this.color = color; 

 this.nombre = nombre; 

 this.tipo = tipo; 

} 
```


```
const bipa = new Animal(‘gris’, ‘Bipa’, ‘Felino’); 
```

En este caso, this hace referencia al objeto que se instanciando



---
---
