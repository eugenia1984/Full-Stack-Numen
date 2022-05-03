# :book: Modulo 7 - Base de Datos

---

## :star: Unidad 1

---
---

##  Lenguaje SQL

**S.Q.L.** significa lenguaje estructurado de consulta (Structured Query Language). 

Es un lenguaje estándar de cuarta generación que se utiliza para definir, gestionar y manipular la información contenida en una Base de Datos Relacional.

Se trata de un lenguaje definido por el estándar ISO/ANSI SQL que utilizan los principales fabricantes de Sistemas de Gestión de Bases de Datos Relacionales.

En los lenguajes procedimentales de tercera generación se deben especificar todos los pasos que hay que dar para conseguir el resultado. Sin embargo, en SQL tan solo deberemos indicar al SGDB (Sistema Gestor de Base de Datos) qué es lo que queremos obtener, y el sistema decidirá cómo obtenerlo.

Es un lenguaje sencillo y potente que se emplea para la gestión de la base de datos a distintos niveles de utilización: usuarios, programadores y administradores de la base de datos.


### ¿ Qué podemos hacer con SQL?

Todos los principales SGBDR incorporan un motor SQL en el Servidor de Base Datos, así como herramientas de cliente que permiten enviar comandos SQL para que sean procesadas por el motor del servidor. De esta forma, todas las tareas de gestión de la Basede Datos (BD) pueden realizarse utilizando sentencias SQL.

- Consultar datos de la Base de Datos.

- Insertar, modificar y borrar datos.

- Crear, modificar y borrar objetos de la Base de Datos.

- Controlar el acceso a la información.

- Garantizar la consistencia de los datos.


### Tipos de sentencias SQL

Entre los trabajos que se pueden realizar en una base de datos podemos distinguir dos tipos: definición y manipulación de datos. Por ello se distinguen dos tipos de sentenciasSQL:

- Sentencias de manipulación de datos. (Lenguaje de Manipulación de DatosDML).

Se utilizan para:

-> Recuperar información (SELECT)

-> Actualizar la información:

-Añadir filas (INSERT)

-Eliminar filas (DELETE)

-Modificar filas (UPDATE)


### Sentencias de definición de datos. (Lenguaje de Definición de Datos DDL). 

Se utilizan para:

-> Crear objetos de base de datos (CREATE)

-> Eliminar objetos de base de datos (DROP)

-> Modificar objetos de base de datos (ALTER)


### ¿Qué es un SGBD?

Un sistema gestor de base de datos (SGBD), o  también llamado DBMS por sus siglas en inglés, es un software que se utiliza para acceder, extraer y administrar datos almacenados en una fuente o base de datos, los usuarios acceden a esta información usando herramientas específicas de consulta y generalmente se accede a los datos mediante lenguajes de consulta como lo es SQL (Structured Query Language). Es importante saber que un SGBD y una base de datos no son lo mismo, una base de datos está conformada de solo los mismos datos en forma estructurada y el SGBD es una herramienta o elemento para materializar la base de datos y su estructura.

Diariamente las empresas mueven y obtienen grandes cantidades de datos y para ello existen diferentes tipos de almacenamiento y gestión que se pueden adoptar según las necesidades de la empresa y los tipos de datos que se utilizarán en diferentes aplicaciones:

-> Data Warehouse, utilizado para datos estructurados y como estrategia de BI.

-> Data Lake, utilizado para almacenar datos no estructurados.
 
-> Fast Data, referido al análisis de datos a menor escala y en tiempo real.

-> Gestión de datos híbridos, con capacidad para analizar datos de cualquier tipo, fuente y estructura.

---
---

## MySQL


MySQL es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto respaldado por Oracle y basado en el lenguaje de consulta estructurado (SQL). MySQL funciona prácticamente en todas las plataformas, incluyendo Linux, UNIX y Windows. Aunque puede utilizarse en una amplia gama de aplicaciones, MySQL se asocia más a menudo con las aplicaciones web y la publicación en línea.

MySQL es un componente importante de una pila empresarial de código abierto llamada LAMP. LAMP es una plataforma de desarrollo web que utiliza Linux como sistema operativo, Apache como servidor web, MySQL como sistema de gestión de bases de datos relacionales y PHP como lenguaje de scripting orientado a objetos (a veces se utiliza Perl o Python en lugar de PHP).

Originalmente concebido por la empresa sueca MySQL AB, MySQL fue adquirido por Sun Microsystems en 2008 y luego por Oracle cuando compró Sun en 2010. Los desarrolladores pueden utilizar MySQL bajo la licencia pública general GNU (GPL), pero las empresas deben obtener una licencia comercial de Oracle.

Hoy en día, MySQL es el RDBMS que está detrás de muchos de los principales sitios web del mundo y de innumerables aplicaciones corporativas y de consumo basadas en la web, como Facebook, Twitter y YouTube.


### ¿ Cómo funciona MySQL ?


MySQL se basa en un modelo cliente-servidor. El núcleo de MySQL es el servidor MySQL, que maneja todas las instrucciones (o comandos) de la base de datos. El servidor MySQL está disponible como un programa independiente para su uso en un entorno de red cliente-servidor y como una biblioteca que puede ser incrustada (o enlazada) en aplicaciones independientes.

MySQL funciona junto con varios programas de utilidad que soportan la administración de las bases de datos MySQL. Los comandos se envían a MySQLServer a través del cliente MySQL, que se instala en una computadora.

MySQL fue desarrollado originalmente para manejar rápidamente grandes bases de datos. Aunque MySQL se instala normalmente en una sola máquina, es capaz de enviar la base de datos a múltiples lugares, ya que los usuarios pueden acceder a ella a través de diferentes interfaces de cliente MySQL. Estas interfaces envían sentencias SQL al servidor y luego muestran los resultados.

### Características principales de MySQL


MySQL permite almacenar y acceder a los datos a través de múltiples motores de almacenamiento, incluyendo InnoDB, CSV y NDB. MySQL también es capaz de replicar datos y particionar tablas para mejorar el rendimiento y la durabilidad. Los usuarios de MySQL no tienen que aprender nuevos comandos; pueden acceder a sus datos utilizando comandos SQL estándar.

MySQL está escrito en C y C++ y es accesible y está disponible en más de 20 plataformas, como Mac, Windows, Linux y Unix. El RDBMS soporta grandes bases de datos con millones de registros y admite muchos tipos de datos, como enteros con o sin signo de 1, 2, 3, 4 y 8 bytes de longitud; FLOAT; DOUBLE; CHAR; VARCHAR; BINARY; VARBINARY; TEXT; BLOB; DATE; TIME; DATETIME; TIMESTAMP; YEAR; SET; ENUM; y tipos espaciales OpenGIS. También se admiten tipos de cadena de longitud fija y variable.

Para la seguridad, MySQL utiliza un sistema de privilegios de acceso y contraseñas encriptadas que permite la verificación basada en el host. Los clientes de MySQL pueden conectarse a MySQL Server utilizando varios protocolos, incluyendo sockets TCP/IP en cualquier plataforma. MySQL también admite una serie de programas cliente y de utilidad, programas de línea de comandos y herramientas de administración como MySQL Workbench.


### CLIENTES MYSQL

Las herramientas y los clientes de GUI de MySQL facilitan la administración visual de las bases de datos MySQL, sin tener que escribir manualmente los comandos SQL. Estas herramientas GUI de MySQL le permiten diseñar, gestionar y administrar bases de datos MySQL utilizando una interfaz visual.

Aquí, una lista de las 5 mejores herramientas GUI de MySQL para desarrolladores y administradores de bases de datos. 

- 1. MySQL Workbench

MySQL Workbench es una de las herramientas GUI de MySQL más populares disponibles para Windows, Linux y Mac. Está destinado a diseñadores y arquitectos de bases de datos, desarrolladores y administradores. MySQL Workbench está disponible en 3 ediciones: Community, Standard y Enterprise. La edición Community es de uso gratuito, las ediciones Standard y Enterprise son comerciales. 

Workbench le permite monitorear el estado del servidor MySQL a través de paneles intuitivos. También le permite diseñar gráficamente el esquema de la base de datos y ejecutar consultas SQL. Además, se pueden importar/exportar datos a/desde sus bases de datos. 

- 2. dbForge Estudio 

dbForge Studio es uno de los mejores clientes de GUI de MySQL que le permite crear, desarrollar y administrar bases de datos fácilmente. Puede crear y ejecutar consultas SQL, crear y depurar rutinas y procedimientos almacenados. Incluso puede automatizar la gestión de bases de datos y analizar datos. dbForge le permite convertir fácilmente una o más consultas SQL en scripts portátiles. También proporciona una interfaz de código de formato enriquecido que le permite escribir y depurar fácilmente consultas SQL. 

- 3. PHPMyAdmin 

PHPMyAdmin es también una de las herramientas de administración de MySQL basadas en web más populares. Es muy fácil de instalar y usar, y es completamente gratuito. Aunque carece de algunas características avanzadas disponibles en otras herramientas GUI de MySQL, es más que suficiente para bases de datos pequeñas y medianas. Dado que PHPMyAdmin está basado en la web, se puede acceder desde cualquier estación de trabajo o computadora portátil. Además, está disponible en más de 80 idiomas. 

- 4. HeidiSQL 

HeidiSQL es un cliente GUI simple y fácil de usar para bases de datos. Es de uso gratuito y facilita la creación, edición y administración de tablas de bases de datos. HeidiSQL también le permite administrar usuarios, automatizar tareas y conectarse a su base de datos a través de túneles SSH. También admite la inserción por lotes de archivos ASCII y binarios en las tablas de la base de datos. HeidiSQL está disponible para Windows y Linux, y también una versión portátil que no requiere instalación. 

- 5. Toad Edge para MySQL 

Toad Edge es una herramienta de administración de bases de datos que proporciona toneladas de funciones para el desarrollo y la administración de bases de datos. Admite la comparación de esquemas, la sincronización de bases de datos, la importación/exportación de datos, el monitor de consultas SQL, la creación de instantáneas e incluso el editor JSON. Incluso cuenta con un monitor de sesión que permite a los administradores monitorear y finalizar sesiones, o incluso cancelar consultas. Toad Edge está disponible para Windows y Mac OS.



---
---
