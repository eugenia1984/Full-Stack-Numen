# :book: Módulo 3 | Javascript

## :star: Unidad 1: Fundamentos

Temas:

- Orígenes de la programación

- Lenguajes de programación

- Herramientas de desarrollo

- Debugging

- Sintaxis general

- Variables y tipos de valores

- Condicionales

- Operadores de comparación y lógicos

- Estructura de control

- Propiedades de JavaScript

- Sentencia break/continue y otras estructuras de control

- Bucles

---

## :star: Unidad 2: Programación avanzada con funciones

Temas:

- Funciones

- Parámetros

- Variables globales y locales

- Objetos

- Función constructora y new

- Métodos vs funciones

- Uso del This para el público y privado

---

## :star:  Unidad 3: String y arrays

Temas:

- Métodos

- Tipos de datos

- Función typeof

- Métodos para string y arrays

- Funciones

---

## :star: Unidad 4: Storage y Json

Temas:

- sesionStorage y localStorage

- setltem, getltem y removeltem

- Intro a Json

- Usos

- Parseo de string a Json

---

## :star:  Unidad 5: DOM + AJAX

Temas:

- Selección de elementos y grupos

- Obtención de datos del DOM

- Modificación del DOM

- Modificación del CSSOM

- Creación dinámica de elementos ymanejo de eventos 

- Browser API (localStorage, userMedia)

- Asincronismo (async, await)

- Promesas (then, catch)

- Fetch API

- Estructura de paquetes HTTP

- Request methods

- Status codes

- JSON, CORS y Autenticación

---

# Programación en Javascript

Conceptos básicos: (Los vamos a seguir profundizando en la carrera)
 

## Aprender a programar:

Podemos definir un programa como **un conjunto de instrucciones** que ejecuta un **procesador de computadora**. Todo programa tendrá un **conjunto finito de instrucciones**, las cuales se van **ejecutando 1 a 1** en cadena hasta finalizar la ejecución. Para empezar a trabajar con un programa es importante, entender que un programa **es un plan que se va a llevar a cabo**. Nada mejor que planificar cómo será ese programa a través de herramientas.

## Pseudocódigo:

Se base en **convenciones de un lenguaje de programación cualquiera pero lo hace entendible ​para las personas**, y aparte **lo realiza independientemente de cualquier lenguaje específico de programación**. De hecho el​ pseudocódigo​ omite detalles que quizás se vayan a trabajar con el lenguaje de programación elegido, pero porque estas no son esenciales para que comprendamos en sí dequé se trata y cuál es el fin del mismo. Si bien es un elemento que hallaremos en cualquier libro de texto o en internet, pero en definitiva, cada vez que empieces o pienses realizar un programa es ideal que realices un pseudocódigo​ con la intención de planificar correctamente aquello que llevarás a cabo en el lenguaje de programación que decidas implementar.

## Aplicación:

Una aplicación es un **programa específico**, que **resuelve un problema concreto**. A menudo hablamos de aplicaciones contables, aplicaciones de gestión de RR.HH, aplicaciones de liquidación de sueldos, etc.

Una de las características principales de las aplicaciones es la **interacción directa con el usuario**. Un sistema está formado por un conjunto de programas, involucra también herramientas hardware (partes físicas: monitores, teclados, impresoras, etc), redes de comunicación,bases de datos, servidores, etc.Cuando hablamos de sistema informático también involucramos a la parte HUMANA (usuarios finales, personal de soporte, programadores, etc).

## Tipos de aplicaciones:

**Aplicaciones de escritorio**: 

Son aquellas que típicamente corren en un sistema Windows; las cuales pueden ser abiertas yendo a la lista de programas instalados en el sistema operativo. Dichas aplicaciones trabajan con ventanas, tienen un menú en la parte superior (Con opciones tales como:archivos, herramientas, configuración, etc).Estas aplicaciones permiten ingresar datos, obtener reportes de datos, etc. Existe mucha interacción con el teclado y el mouse de la computadora. El botón secundario del mouse nos suele generar el conocido menú contextual, muy útil ya que representa un atajo para la ejecución de una funcionalidad específica.Podemos decir que las aplicaciones de escritorio son las “aplicaciones tradicionales” de interfaz gráfica.

**Aplicaciones de Consola**:

Son aquellas aplicaciones que utilizan una ventana de MS-DOS como salida. Quizás el definirlo de esta manera no te ayude demasiado a entender de qué se trata, pero básicamente Visual Basic.Net y C# quienes utilizan este tipo de consola para poder programar y crear aplicaciones de escritorio.

**Aplicaciones Web**:

Son aquellas que son accedidas desde un browser (Internet Explorer, Firefox, Chrome, etc) a través de alguna dirección web o url. El lenguaje web ha invadido diferentes espacios, y por esa razón no necesariamente esto es o puede ser un sitio web, sino qué empresas pueden requerir aplicaciones web para manejar cuestiones internas por el mero hecho de la facilidad que estas permiten de acceder desde cualquier lugar mientras haya conexión a internet.

**Aplicaciones Mobile**:

Aquellas que funcionan sobre dispositivos mobile (tablets, celulares, etc). Se trata nada más y nada menos de las famosas “apps”. Corren en sistema operativos móviles como Android,iOS, BlackBerry OS, Windows Phone, etc.

Resuelven de forma más simple gestiones y operaciones del usuario. Por ejemplo la app de mercado libre, o la de instagram seguramente son aquellas que más utilices en tu teléfono o dispositivo móvil.

Si bien es importante entender que todos los ejemplo anteriores pueden hacer complejo el mundo de las aplicaciones o entender qué es un programa, la realidad es que no es más que una sucesión de pasos ordenados y planificados que resuelven un problema específico.

## Lenguajes de Programación:

Se trata de un **lenguaje formal**, con **reglas estrictas de escritura**, el cual permite comunicarle a una computadora que es lo que debe hacer con absoluto detalle.

Todo lenguaje de programación se conforma por un **conjunto de símbolos**, **signos de puntuación**, **operadores**, **valores**, **palabras clave** e **identificadores** que permiten escribir las instrucciones a ejecutar. A través de los lenguajes de programación podemos crear nuestros programas. Existen docenas y docenas de lenguajes de programación hoy día, muchos con similitudes entre sí, como también así con sus diferencias, pero lo más importante es entender como Javascript y todo lo que este lenguaje de programación hoy deriva es el centro del universo tecnológico. Es impensado casi en todos los ámbitos que un programador aunque este sea o maneje otro lenguaje específicamente no sepa Javascript, y vamos a contarte por qué.

## Javascript, el centro de todo:

Javascript, es el centro de todo porque **es un lenguaje de programación interpretado por el propio navegador** (Chrome, Firefox, Opera, IE, etc), sin necesidad de absolutamente nada más. La web domina el mundo de la tecnología, desde la creación de interfaces para fábricas de autos, cajeros automáticos, o simplemente aplicaciones para lograr que los empleados puedan desde cualquier lugar donde hay conexión a internet resolver cualquier problema laboral o trabajar sin necesidad de movilizarse, lo cual reduce costos y mejora el rendimiento.

Entre las tantas cosas qué podemos hacer con Javascript están:

- Abrir ventanas

- Mostrar mensajes

- Validar datos en un formulario

- Hacer una galería de imágenes

- Añadir dinámicamente nueva información dentro del cuerpo de la página web.

- Crear juegos

- Crear animaciones

---