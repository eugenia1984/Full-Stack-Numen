# :book: Módulo 1 | Introducción al Desarrollo Web

Temas:

- Intro al desarrollo web (Antes de iniciar): Orígenes de la programación : ¿Qué es la programación? , ¿Qué es un lenguaje de Programación?

- Debugging: ¿De dónde surgieron los términos bug y debug? , ¿Para qué sirve el debug?, ¿Cuál es la importancia del Debug? 

- Glosario desarrollo web

- ¿Cuál es la importancia del Debug?

- Unidad 1 : Intro al desarrollo web: Entorno, Internet, Web y Cliente - Servidor, Front-end, Sitios web estáticos y dinámicos, Aplicaciones web, 
Desarrollo, Programación, Lenguajes de la web, Programación lógica, Maquetado, Estilado, Herramientas de desarrollo


- Unidad 2: Metodologías de desarrollo:  Repositorios,  Cloud,  Uso de Github,  Metodologías de trabajo ágiles,  Metodología Scrum,  Plataformas de planificación y seguimiento


-  Unidad 3: Conceptos de desarrollo Web: Prototipados y conceptos de HTML, Box modeling (posicionamiento y visualización), FlexBox, Grids y Mobile First, Animaciones, Primeros pasos al HTML, CSS (Multimedia, bases del scc y atributos), Sintaxis CSS, Integración CSS con HTML, Intro a Pre-procesadores (SASS), Subida de sitios al servidor, Dominios, Hosting

---
---

# :book: Intro al desarrollo web (Antes de iniciar)

## :star: Orígenes de la programación

### ¿Qué es la programación? 

La programación informática, a menudo acortada como programación, es **el proceso de  diseñar, codificar, depurar y mantener el código fuente de programas computacionales**. El  **código fuente** es escrito en un **lenguaje de programación**.  

El propósito de la programación es **crear programas que exhiban un comportamiento  deseado**. El proceso de escribir código requiere frecuentemente conocimientos en varias  áreas distintas, además del *dominio del lenguaje* a utilizar, *algoritmos especializados* y  *lógica formal*. Programar no involucra necesariamente otras tareas tales como el análisis y  diseño de la aplicación (pero sí el diseño del código), aunque sí suelen estar fusionadas en  el desarrollo de pequeñas aplicaciones. 

A pesar de que muchos usuarios pueden creer que la programación y el desarrollo son  ciencias nuevas, lo cierto es que no es así. De hecho, el algoritmo considerado primer  programa fue creado entre **1842 y 1843** por **Ada Lovelace**.  

Años después, el departamento de defensa estadounidense nombró un lenguaje de  programación, Ada, en su honor. Pero quien realmente influyó en el diseño de los  primeros computadores fue **Charles Babbage (1793-1871)**. Con la colaboración de la hija  de Lord Byron, **Lady Ada Countess of Lovelace (1815-1852)**, a la que debe su nombre el  lenguaje ADA creado por el **DoD (Departamento de defensa de Estados Unidos) en los  años 70**. Babbage diseñó y construyó la **“máquina diferencial” para el cálculo de  polinomios**. Más tarde diseñó la **“máquina analítica” de propósito general**, capaz de  resolver cualquier operación matemática. Murió sin poder terminarla, debido al  escepticismo de sus patrocinadores y a que la tecnología de la época no era lo  suficientemente avanzada.  

Un equipo del Museo de las Ciencias de Londres, en 1991, consiguió construir la máquina  analítica de Babbage, totalmente funcional, siguiendo sus dibujos y especificaciones.


###  ¿Qué es un lenguaje de Programación? 

Un lenguaje de programación es **un lenguaje formal diseñado para expresar procesos que  pueden ser llevados a cabo por máquinas como las computadoras**.  

Pueden usarse **para crear programas** que controlen el comportamiento físico y lógico de  una máquina, para **expresar algoritmos** con precisión, o como **modo de comunicación  humana**. 

Está formado por un **conjunto de símbolos** y **reglas sintácticas y semánticas** que definen su  estructura y el significado de sus elementos y expresiones. Al proceso por el cual se  *escribe*, se *prueba*, se *depura*, se *compila*(de ser necesario) y se *mantiene* el código fuente  de un programa informático se le llama **programación**.  

También la palabra programación se define como el proceso de **creación de un programa  de computadora**, mediante la aplicación de *procedimientos lógicos*, a través de los  siguientes pasos:  

1- El *desarrollo lógico* del programa para resolver un problema en particular.  

2- *Escritura de la lógica* del programa empleando un lenguaje de programación  específico (codificación del programa).  

3- *Ensamblaje* o *compilación* del programa hasta convertirlo en lenguaje de máquina.  

4- *Prueba* y *depuración* del programa.  

5- Desarrollo de la *documentación*.

---
---

## :star: Debugging 

Si trabajas con programación web, debes saber que los **bugs** son inevitables. Estos pueden  ocurrir debido a *errores de sintaxis*, como un *código incomplet*o o *errores en la lógica*. 

### Pero, ¿cómo es posible identificar los bugs en medio de muchos códigos y líneas para  poder ajustarlos? Es aquí donde comienza el trabajo de debug. 

También llamado como **debugging** (o en español depuración), es el nombre que se le da  al proceso de encontrar y eliminar los errores que pueden cometer softwares y  hardwares.  

### ¿De dónde surgieron los términos bug y debug? 

Muchas personas afirman que el término bug fue creado por **Grace Hopper**, una famosa  desarrolladora de la marina estadounidense que creó el lenguaje de programación  conocido como **Flow-Matic**. Aunque este lenguaje no haya sido muy utilizado, *sirvió como  base para COBOL*. 

Esta versión de la historia cuenta que Grace *estaba intentando encontrar el problema en  su computador*, hasta que descubrió que *era causado por un insecto muerto*. Sería  entonces este el origen del término **bug**, que en inglés, significa insecto. 

La segunda versión es más antigua, y tiene una conexión con **Thomas Edison**, inventor de  la lámpara eléctrica. Ella cuenta que, en el año de *1878*, Edison buscaba el origen de un  problema en la lectura de su fonógrafo, y finalmente encontró que era un *insecto*. 

### ¿Para qué sirve el debug? 

Su objetivo es **encontrar errores que pueden impedir que los códigos funcionen de forma  adecuada**. Con éste, es posible determinar lo que está ocurriendo dentro del código  fuente y obtener sugerencias de acciones para mejoras. 

Cada instrumento de desarrollo web tiene su propia herramienta para debugar un código.  A través de ellas, se puede determinar los puntos de parada, conocidos como break  points, para verificar el estado actual de la aplicación, por ejemplo. 

También puedes acompañar el contenido de una determinada variable. Todo esto sirve  para facilitar el agotador trabajo de encontrar un bug en un sistema.

### ¿Cuál es la importancia del Debug? 

El debug mejora la gestión del tiempo y productividad del profesional. Pues, corregir bugs  manualmente puede llegar a ser una tarea demorada y frustrante. 

Cuando este tipo de actividad es hecho por una herramienta, tienes tiempo.  Principalmente, porque esta no necesita leer el código integralmente para identificar las  fallas, así que va directo al punto crítico. Por lo tanto, los programadores web pueden  dedicar más tiempo a los procesos de mejora e innovación. 

Además de esto, como los errores son detectados en el inicio, es posible evitar que  grandes proyectos tengan que ser ajustados o incluso eliminados para volver a empezar  desde cero. Cuando el estado del trabajo se encuentra en un nivel avanzado, es más difícil  encontrar la causa raíz del problema y solucionarla.

---
---

## :star: GLOSARIO DESARROLLO WEB
 

**Controlador de versiones**: es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, permitiéndote recuperar versiones específicas más adelante.

**Framework**: es una estructura conceptual y tecnológica de asistencia, definida normalmente con artefactos o módulos concretos de software, que puede servir de base para la organización y el desarrollo de software

**Desarrollo web**: consiste en la planificación y el diseño de páginas de internet, con la interacción de medios como textos, imágenes, vídeos, sonido y enlaces a otras páginas web.

**HTML**: es un “lenguaje” de marcado de etiquetas, que permite crear documentos para web.

**CSS**: en español, «hojas de estilo en cascada», es un lenguaje de diseño gráfico, utilizado para definir y crear la presentación de un documento estructurado, escrito en un lenguaje de marcado.

**Internet**: se trata de una red de equipos de cálculo, que se relacionan entre sí a través del uso de un lenguaje universal.

**Navegador**: es el instrumento que permite a los usuarios de internet navegar entre las distintas páginas de sitios webs.

**Buscador**: es un sistema informático que busca todo tipo de información en la web, almacenando la misma en una enorme base de datos, para arrojar la información solicitada.

**Sitio web**: es un espacio virtual en Internet. Se trata de un conjunto de páginas web, accesibles desde un mismo dominio o subdominio de la World Wide Web (WWW).

**Dirección IP**: es un conjunto de números que identifica, de manera lógica y jerárquica, a una interfaz en red.

**Editores de texto**: Son programas que te permiten realizar o escribir código fuente (HTML, CSS, PHP, JavaScript) de tus proyectos.

**Código fuente**: es el conjunto de líneas de textos, las cuales son las directrices que debe seguir la computadora para realizar dicho programa.

**API**: Del inglés Application Programming Interface. Interfaz de Programación de Aplicaciones. Una serie de rutinas usadas por una aplicación para gestionar generalmente servicios de bajo nivel, realizados por el sistema operativo de la
computadora.

**Backup Un** backup es un término para denominar una copia de seguridad. En todos los ámbitos de la tecnología es necesario contar con una o varias copias de seguridad o backups de todos nuestros trabajos.

**Terminal o consola**: es la aplicación que se utiliza para interactuar con el computador a través de comandos.

**Prototipo**: es la representación navegable del producto final.

**Doctype**: cuando escribes tu documento HTML, lo primero que debes hacer es escribir el DOCTYPE, el cual declara el tipo de documento. Es decir, sirve para indicar que tu documento está escrito siguiendo la estructura determinada por un DTD concreto. Un DTD es la definición del tipo de documento.

**Formularios**: son etiquetas donde el usuario ingresará o seleccionará valores, que serán enviados a un archivo encargado de procesar la información.

**Enlaces**: también conocidos como links o anchors, se utilizan para relacionar partes del mismo documento. Por defecto, se visualizan azules y subrayados

---
---


# :book: Unidad 1: Intro al desarrollo

Temas:

- Entorno

- Internet, Web y Cliente - Servidor

- Front-end

-  Sitios web estáticos y dinámicos

-  Aplicaciones web

-  Desarrollo

-  Programación

- Lenguajes de la web

-  Programación lógica

- Maquetado

-  Estilado

- Herramientas de desarrollo.

---
---

## :star: ¿ Como funciona la web ?


### ¿ Qué es una página web (Webpage) ? 

Una página web es una **serie de códigos que los navegadores pueden leer**. En base a la **información que incluye este código**, podrán **mostrar la página** de forma adecuada.

El código le va diciendo al navegador qué partes son *texto*, qué partes son *referencias*, qué partes son *imágenes*. También dónde se debe mostrar cada cosa, los colores, etc. Con esta información, el navegador luego monta lo que vemos realmente cuando entramos en una página web. Lo **renderiza**.

Si tienes curiosidad, puedes pulsar botón derecho en tu navegador y usar la opción de **Inspeccionar** o **Ver código** (según el navegador). Con esto podrás ver y hacerte una idea de cómo son realmente las *tripas* de una página web.


---

## Sitio web: El término adecuado

Realmente, lo que normalmente llamamos en castellano *Página web* debería llamarse un *sitio web* (del inglés Website).

Una página sería en realidad sólo una parte de tu sitio. Igual que un libro tiene distintas páginas, un sitio web también. Pero yo también suelo utilizar el concepto página, porque es como se le suele decir más a menudo. Si te empiezo a hablar de sitios web igual te lío un poco.

---

## ¿ Qué es el código de la página web ?

Las páginas web se componen de una serie de código, como ya te comentaba antes.

El código incluye tanto los contenidos, como la información necesaria para que el navegador sepa cómo deben verse (de qué color, en qué orden, en qué ubicación…).

Puedes observar la imagen que puse más arriba, y verás que hay códigos muy distintos.

---

## Tipos de código que forman una página web

Este código puede ser de varios tipos. En una web de las que se usan hoy día, como una página de wordpress hay al menos 3-4 tipos: **HTML**, **PHP**, **CSS** y en algunos casos, también **Javascript**.

**(1) HTML – Código que llega al navegador** : este código es el que llegará finalmente al navegador. Realmente, se puede hacer una página sólo a base de HTML y así se hacían inicialmente.

El código HTML es el que establece la estructura de la información. Qué apartados hay, qué orden, cómo se organizan, los títulos…

Si manejas una página web o Blog seguro los has visto, en la pestaña de HTML o código.

Con una etiqueta que *abre* la sección tipo ```<algo>``` y la que lleva la barrita delante que la cierra ```< /algo>```. El algo indica a qué corresponde lo que haya entre esas dos etiquetas.

Ejemplos de código HTML de uso común. Para que te hagas una idea…

Por ejemplo para los títulos se usan h1, h2, que viene del inglés heading.

```<h1> Primer titulo </h1>```

O un enlace por ejemplo en código se ve así. Como ves, dentro de las etiquetas de sección se pueden meter *cosas* adicionales.

```<a href=»direccion_enlace»> texto que se verá </a>```

Seguro que has oído también hablar del**alt** de las imágenes. Esto es el **texto alternativo** que se muestra si no se puede cargar la imagen (si no se encuentra, si está estropeado el fichero, o por ejemplo, cuando la persona decide no cargar imágenes con alguna opción del navegador o en los gestores de correo).

En este caso además, verás que no hay etiqueta de cierre, porque la imagen ya es un elemento por sí misma. Por ello tiene la barrita al final, aunque a veces también puede no llevarla.

```<img src=»ruta de la imagen» alt=»Texto que se ve cuando no sale la imagen»/>```

Pues así con todo lo que ves. Los títulos, párrafos, la negrita, la cursiva y un montón de cosas, tienen estas etiquetas. Más luego toda una serie de etiquetas adicionales para añadir información adicional o para estructurar los bloques.

**(2) PHP – Código que se ejecuta en el servidor**: También hay código adicional (php) que se ejecuta en el servidor antes de que la página se envíe al navegador.

Este código se encuentra junto al html y hará que se cargue una u otra información dentro de ese html, o según ciertas condiciones que se cargue una u otra variante del html.

**(3) Javascript – Funcionalidades adicionales**: Adicionalmente, algunas páginas pueden incluir funciones adicionales como Scripts. Estos añadirán funcionalidad adicional, que puede estar contenida dentro del mismo código HTML anterior, o hacer una referencia a un fichero con extensión **.js** donde están estas funciones.

En las páginas de Worpdress se incluyen scripts también en el fichero de **functions.php**

Por ejemplo, muchos de los menús  incluyen scripts. (Para que se abran al hacer click, para que se queden fijos arriba cuando haces scroll por la página, etc.).

**(4) CSS – El código de estilos**: esto es algo relativamente reciente. Inicialmente, estos estilos iban mezclados dentro del código html.

Luego, que lo que hizo fue separar el diseño de la página (colores, fuentes, estilos, ubicación de los bloques, elementos, imágenes, etc.) de lo que es el código de estructura.

De esta forma, se puede crear un fichero adicional que sólo tenga el estilo o diseño de la página.


---
---


## :star: Internet

Gran red de computadores conetados globalmente


### Web 

Solo una de las maneras en que puede fuir la información. La web está contruida sobre internet.  

```
            petición
         -------------->
CLIENTE                  SERVIDOR
         <--------------
            respuesta
```

Los **clientes** son los dispositivos de los usuarios que se conectan a la web (pc, tablet, smartphone).

El **servidor** son los computadores donde se guardan los sitios, las páginas, y 
las aplicaciones webs.

**Arquitectura cliente-servidor**, en el navegador(browser) escribimos que queremos consultar.

``` http://midominio.com```

**http** -> protocolo o reglas. Protocolo de intercambio de Información HiperTextual (información que se estructura, no secuencialmente, sino a través de hipervínculos).

**://midominio.com** -> dominio o dirección IP, nombre o términos alfanumericos, con terminaciones como .com, .org, .net (aclara que tipo de organización es). Pero cada dominio es una máscara que cubre la dirección IP. Hay un DNS (Servidor de nombre de dominio) que encuentra la dirección real del servidor donde se encuentra el sitio web alojado.

**TSP/IP** : mensaje 200 ok, porque se aprobo el envio del paquete, el servidor envia los archivos en pequeños paquetes de datos y el navegador armará el sitio web completo.


---
---


## :star: Funcionamiento de los navegadores

### ¿Qué son los navegadores?

No importa desde qué plataforma nos conectemos. Ya sea usemos computadora de escritorio, tablet o smartphone, para conectarnos a Internet necesitamos un **navegador**. De este modo, utilizamos *Chrome*, *Mozilla Firefox* o *Safari* para visitar **sitios web** o hacer compras online.  Un navegador es un **software**, casi siempre gratuito, para la **representación gráfica de la World Wide Web (WWW)**.

Un navegador *permite visualizar textos, imágenes y vídeos*, pero también *enlaces* y otras funciones de los sitios web. El término navegador proviene del inglés **to browse** y significa algo así como **“explorar”** u **“ojear”**. En su origen, los navegadores estaban diseñados para navegar hacia adelante y hacia atrás dentro de archivos de texto de varias páginas. Con la introducción del **hipertexto**, se añadieron **referencias cruzadas en la navegación**, los llamados **hipervínculos**. Por eso, las funcionalidades de los navegadores han crecido enormemente. Además de imágenes y vídeos, pueden integrar y dotar de funciones a gráficos interactivos, archivos de audio, PDF y otros recursos.

### ¿Cómo funciona un navegador?

Para responder a la pregunta “¿Qué es un navegador?” de manera más precisa, es necesario entender cómo funciona el software. Al escribir un **URL en el navegador**, este solicita la **página** al **servidor de destino**. El servidor responde devolviendo el **contenido en forma de código HTML, imágenes y otros recursos**. Cada recurso tiene una identificación unívoca, el llamado **URI (Uniform Resource Identifier)**. A partir de las especificaciones dadas por los archivos HTML y CSS, el navegador interpreta todo el contenido y lo representa para que podamos ver y utilizar el sitio web como en nuestra pantalla.

```
           solicitud por URL                      petición de recursos
CLIENTE ----------------------------> PAGINA WEB -------------------------->   CODIGO HTML
        <---------------------------             <------------------------
          interpretación de los recursos          retorno de todos los recursos
```

-Funcionalidad de un navegador

El navegador sirve de intermediario o traductor entre el dispositivo final y el contenido del sitio web.
 

Para poder mostrar todos los recursos correctamente, cada componente está a cargo de una tarea: la interfaz de usuario del navegador es lo que vemos. Detrás de esta se encuentra el motor del navegador, que sirve de interfaz entre la interfaz de usuario y el motor de renderizado.

 
## El elemento central del navegador: el motor de renderizado

Este módulo es el elemento central para la **representación del contenido**. De forma predeterminada, el motor puede mostrar archivos e imágenes HTML y XML. Sin embargo, con los plugins adecuados, también es posible obtener recursos adicionales. Por ejemplo, al solicitar un archivo HTML, el motor de renderizado lo lee y analiza los datos HTML y los convierte a un formato procesable para el navegador. El motor de renderizado **crea la estructura DOM**, es decir, la estructura de contenido de las etiquetas, y la estructura de renderizado, que mapea los colores y otros criterios de la maquetación.

En los siguientes pasos se combinan las siguientes estructuras. Primero, el **árbol de estructura DOM o los nodos individuales se posicionan según unas coordenadas exactas**. Finalmente, se ejecuta la **estructura de renderizado** con la ayuda del backend de la **UI** ( User Interface o interfaz de usuario, también llamada frontend, es decir, lo que el usuario ve en la pantalla) y se visualiza el sitio web apropiadamente. Este paso también se llama **painting**. 

## Otros módulos del navegador

Además del ya mencionado backend de la interfaz de usuario, que se encarga de mostrar widgets básicos como Windows, hay otro módulo a cargo de las llamadas de red a través de los protocolos comunes, como **HTTP**. Un **intérprete de JavaScript** interpreta y ejecuta el código JavaScript. También hay una **memoria de datos disponible** como componente persistente, que almacena las *cookies*, el *historial del navegador* y la *memoria caché* en el ordenador local, por ejemplo. En HTML5, esta memoria se resuelve como una base de datos web ligera en el navegador.

##  Diferencias de visualización entre navegadores

Debido a que existen diferentes versiones de HTML –HTML, XHTML o HTML5– y los diferentes navegadores no los interpretan exactamente de la misma manera, *un sitio web en Chrome a veces se ve ligeramente diferente que en Firefox*. No obstante, **las funciones básicas siempre son las mismas**, por lo que, salvo por pequeñas diferencias de posicionamiento y visualización, todos los textos, imágenes y enlaces aparecen igual. Estas diferencias también pueden ocurrir cuando el navegador no está actualizado. Por esto, te recomendamos hacer actualizaciones frecuentes.

##  ¿Qué elementos tiene el navegador?

Una vez se ha explicado qué es un navegador, te resumimos los elementos y funciones más importantes. El equipamiento básico de cada navegador incluye los siguientes elementos:

-barra de direcciones para escribir el URL

-botones para navegar hacia adelante y hacia atrás, para actualizar o recargar o para detener la carga

-botón de la página de inicio del navegador

-función para establecer marcadores

-otras funciones varían de un navegador a otro o se pueden añadir según se requiera

## Funciones adicionales útiles del navegador

Además, algunos navegadores, como Firefox o Safari, permiten **organizar los marcadores**, **guardar contraseña**s y **navegar en modo incógnito**, lo que se conoce como “navegación privada”. Así, podrás navegar sin dejar huella en tu propio dispositivo. Por ejemplo, no se guardará el historial de navegación y los datos introducidos en un formulario no se podrán recuperar. Respecto a **seguridad y protección**, los navegadores más populares contienen **funciones de protección contra el phishing y el malware**, así como **bloqueadores de anuncios**, de forma estándar. Sin embargo, estas funciones no pueden reemplazar un **programa antivirus** que todo dispositivo final debería tener.

Consejo: Si a tu navegador le faltan algunas funciones, como la posibilidad de hacer copias de pantalla o de poder visualizar ciertos contenidos, puedes ampliar las funciones de este mediante **extensiones web** y **plugins**.

## ¿Qué navegadores hay y cuál es el mejor?

Como todos los navegadores tienen esencialmente las mismas funciones, no es posible decir que haya uno intrínsecamente mejor que otros. Depende mucho más de tus necesidades y hábitos de uso. Entre los navegadores más populares de España están los siguientes:

**Mozilla Firefox**: uno de los navegadores más populares de Europa.

**Microsoft Internet Explorer & Edge**: una parte integral de los sistemas operativos de Microsoft desde Windows 95.

**Google Chrome**: está en el mercado desde 2008 y es el líder en sincronización a través de varios dispositivos.

**Safari**: el equivalente de Apple al Internet Explorer o Edge de Microsoft.

**Opera**: especialmente popular en los dispositivos móviles.

---
---

## :star: Bases de la Web

La web tiene tres pilares básicos y más relevantes sobre los que se soporta la arquitectura lógica de la Web.



**URI –  Uniform Resource Identifier**, o **Identificador único uniforme** permite referirse (referenciar) y describir todos los objetos. Una versión más elemental de URI es la **URL** (Localizador universal de recursos), que corresponde a una dirección en la Web. La dirección es una de las formas de identificar un objeto, cabe destacar que la noción de identificador es más amplia que la de dirección, por ejemplo para recursos móviles que no tienen dirección fija.

**HTML** –  es otro pilar fundamental es **Hyper Text Markup Language**, o **Lenguaje de Marcas de Hipertexto** se caracteriza por simplicidad de uso, y al ser un lenguaje de hipertexto, permite anclar o redirigir al lector desde un punto cualquiera del texto a otro lugar. Estos son los famosos *links* o *enlaces* en la Web. Tim Berners-Lee diseñó este lenguaje.

**HTTP (Hyper Text Transfer Protocol)** es el *protocolo de transmisión de datos que permita enviar y traer información en HTML desde un lugar (sitio) a otro en esta red que es la Web*. Éste protocolo tiene varias características distintivas que lo han hecho muy perdurable. HTTP es un protocolo de transmisión entre **clientes y servidores**. El *cliente*, puede ser un *navegador* y el *servidor* es el que *almacena o crea recursos como archivos HTML, imágenes, videos, pdf, etc*. Mediante instrucciones simples, pero poderosas, el cliente indica al servidor qué acciones realizar para recibir o entregar datos o recursos.

---

## :star: Motores de Renderizado


Los navegadores Web o browsers son programas o aplicaciones complejas encargadas de hacer peticiones a los servidores y de mostrar o renderizar los archivos recibidos. Para llevar a cabo este proceso, los browsers están estructurados a partir de varios componentes, donde el motor de renderización es tal vez el más importante.


Usualmente el término **renderizar** se refiere a un *proceso mediante el cual se genera una imagen a partir de un modelo previo*.

En nuestro caso estamos hablando del proceso de **renderizado de un sitio Web**, es decir, *del proceso a través del cual el navegador genera gráficamente los archivos recibidos*.

Esto naturalmente implica que los archivos que recibe el navegador no podrían verse adecuadamente, sin este proceso de renderizado y que *los archivos Web deben tener una estructura interna apropiada para que un navegador pueda entender e interpretar su contenido correctamente*.

Antes de que estudiemos la estructura de los documentos web y la forma como son interpretados por el navegador, hablaremos brevemente sobre los motores de renderizado.

A lo largo de la historia de Internet han surgido innumerable cantidad de navegadores muchos de los cuales han terminado compartiendo su código y funcionalidades.

El término **motor de renderizado** se volvió más popular a partir del proyecto *Mozilla* que fue el primero en dividir el motor de renderizado del resto del navegador, con el fin de que este componente pudiera ser reutilizado por otros browsers.

Los motores de renderizado han ido evolucionando a la par de las plataformas tecnológicas, buscando siempre que la información del documento se muestre más rápido y más acorde con el modelo.

Dentro de los motores de renderizado más importante en la actualidad encontramos *Blink*,  *EdgeHTML*, *Gecko* y *WebKit*.

**Blink** es un motor de renderizado desarrollado como parte del proyecto Chromium con contribuciones de Google, Opera, ASA, Intel y Samsung entre otras grandes compañías tecnológicas. Blink es una derivación de WebKit y es usado por los navegadores Chrome y Opera.


Por su parte, **EdgeHTML** es un motor de renderizado desarrollado por Microsoft a partir de Trident. Fue introducido por Microsoft como parte del navegador Internet Explorer.


También existe **Gecko**, un motor de renderizado usado por muchas aplicaciones desarrolladas por Mozilla Foundation y Mozilla Corporation. Gecko es un software libre y de código abierto usado como base del navegador Firefox.


**WebKit** también es un motor de renderizado que surge del motor de renderizado KHTML y del motor de JavaScript KDE. Es usado como base del navegador Safari.


Es importante saber que debido a los distintos motores de renderizado, y a pesar de tener un estandar, es posible que un motor interprete un código de una manera diferente a otro, por ello es importante probar tu código en distintos navegadores.

---
---

# :book:  Unidad 2: Metodologías de desarrollo


Temas:

- Repositorios

- Cloud

- Uso de Github

- Metodologías de trabajo ágiles

- Metodología Scrum

- Plataformas de planificación y seguimiento


---
---


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

