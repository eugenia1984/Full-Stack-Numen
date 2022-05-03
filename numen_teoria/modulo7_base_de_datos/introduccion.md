# :book:  Módulo 7 | Base de datos

---
---

## :star: Introduccion

---
---

## Dato, Información y Conocimiento

Las organizaciones en general y las empresas en particular necesitan organización para que el negocio sea exitoso para ello es de vital importancia contar con información confiable, suficiente y en el momento correcto. Pero antes de seguir hablando de esto es necesario tener claro estos conceptos básicos: dato, información y conocimiento. 

- **Datos**: Son hechos aislados y en bruto, los cuales situados en un contexto significativo y mediante una o varias operaciones de procesamiento, permiten obtener resultados que son objeto de dicho procesamiento. La finalidad básica al recopilar y procesar datos es reproducir información. Una empresa recibe una cantidad ilimitada de datos provenientes de fuente internas y externas, los que, si fueran procesados sin una finalidad informativa su abundancia seria excesiva. En consecuencia, solo podrá obtenerse la cantidad apropiada de datos mediante un sistema adecuado de información. 


- **Información**: Es el conjunto de datos organizados, procesados y contextualizados que se transforman en un mensaje con un sentido para un receptor. La información es un acontecimiento o una serie de ellos que llevan un mensaje y que, al ser percibido por el receptor mediante alguno de sus sentidos, amplía sus conocimientos. Solo el destinatario puede evaluar la significación y la utilidad de la información recibida. La función primordial de la información, y por lo tanto, la de un Sistema de Información, consisten en aumentar el conocimiento del usuario, o en reducir su incertidumbre, para la toma de decisiones dentro de una organización 


- **Conocimiento** (Davenport & Prusak, 1998) es una mezcla de experiencia, valores, información y know-how que sirve como marco para la incorporación de nuevas experiencias e información, y es útil para la acción. Se origina y aplica en la mente de los conocedores. En las organizaciones con frecuencia no sólo se encuentra dentro de documentos o almacenes de datos, sino que también está en rutinas organizativas, procesos, prácticas, y normas.

El conocimiento se deriva de la información, así como la información se deriva de los datos. Para que la información se convierta en conocimiento es necesario realizar acciones como: 

-Comparación con otros elementos. 

-Predicción de consecuencias.

-Comparación con otros elementos. 

-Predicción de consecuencias. 

```                     -
     Conocimiento        |
   ----------------      |--Inteligencia de Negocio
      Informacion       -
  -------------------    |
        Datos            |--Operaciones de Negocio
----------------------  -

DATOS   INFO   CONOCIMIENTO


```

De forma general, los datos son la materia prima bruta. En el momento que el usuario les atribuye algún significado especial pasan a convertirse en información. Cuando los especialistas elaboran o encuentran un modelo, haciendo que la interpretación que surge entre la información y ese modelo represente un valor agregado, entonces nos referimos al conocimiento. 

Veamos unos ejemplos para poder entender mejor la diferencia entre estos conceptos:

Diagrama, Texto

Descripción generada automáticamente



---
---

##  Sistemas de Información



Entonces el proceso de transformar un conjunto de datos en información es realizado por un Sistema de Información. Antes de continuar sería interesante aclarar cuestiones que hacen a la definición de Sistemas. 

Un sistema es un conjunto de elementos que se interrelacionan entre sí y con su ambiente (sistema abierto) con un objetivo en común. Esta definición se desprende de la Teoría General de los Sistemas (TGS) impulsada a mediados del siglo XX en gran medida por los aportes del biólogo austríaco Ludwig von Bertalanffi quien en su búsqueda por responder a la pregunta de qué es la vida, transformó la visión que hasta entonces se tenía del mundo enunciando, entre otras cosas que el todo es más que la suma de las partes. Luego llegó a inspirar desarrollos en distintas disciplinas constituyendo el amplio campo de la sistémica o de las ciencias de los sistemas, incluyendo especialidades como la cibernética, la teoría de la información, la teoría de juegos, la teoría del caos o la teoría de las catástrofes, etc. 

Basado en lo anterior, podemos decir que un Sistema de Información es un conjunto de componentes que interaccionan entre sí para alcanzar un fin determinado, el cual es satisfacer las necesidades de información de una organización para la toma de decisiones en todos sus niveles, reduciendo la incertidumbre. Estos componentes pueden ser personas, datos, actividades o recursos materiales en general, los cuales procesan la información y la distribuyen de manera adecuada.

Interfaz de usuario gráfica, Aplicación

Descripción generada automáticamente



Un Sistema de Información realiza cuatro actividades básicas: 


- **Entrada de datos**, los cuales deben ser pertinentes para la organización y habrá que tener especial cuidado en ello de tal forma que sean los estrictamente necesarios para no cometer errores de en cuanto a la excesiva abundancia ni la escasez de los mismos dado que genera altos costos, pérdida de tiempo e incertidumbre. 

- **Almacenamiento de datos**, de tal forma que luego pueda ser recuperada en forma consistente y confiable. Los datos en este almacenamiento son datos persistentes es decir los que están guardados en un almacenamiento no volátil, en concreto guardados en una base de datos. 

- **Procesamiento de datos**, tanto de los datos convenientemente seleccionados y almacenados en los dos procesos anteriores. 

- **Salida de información**, que es en definitiva el objetivo principal del sistema. Para que esta salida del sistema sea de utilidad a los administradores y personas involucradas en la toma de decisiones, la información debe tener determinadas características las que se muestran en el cuadro siguiente (Stair & Reynolds,2010). 


En la figura anterior, podemos observar, como un sistema está compuesto de otros sistemas menores es decir de subsistemas y puede que la salida de un sistema de información (que es información) sea la entrada (dato) de otro sistema de información. 

Aquí lo importante es centrarnos en el almacenamiento de datos persistentes sin, por supuesto, olvidarnos del todo ya que estamos siempre trabajando con sistemas. 

Un ejemplo de sistema de información es el sistema de procesamiento de transacciones (TPS: Transaction Processing System) que realiza y registra las transacciones rutinarias diarias necesarias para el funcionamiento de una empresa, están en el nivel más bajo en la jerarquía organizacional. Por ejemplo, el sistema que funciona en la línea de cajas de un supermercado.


---
---

## Base de datos

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. Actualmente con el avance informática las bases de datos están almacenadas en medios digitales. 

Podríamos decir entonces, que una Base de Datos es una colección de datos relacionados con un tema particular, que está constituida por cierto conjunto de datos persistentes y que son utilizados por los sistemas de aplicaciones de una empresa (o cualquier organización) determinada. 

Cada unidad de dato indivisible de dicha base de datos, está almacenado en un campo. Un conjunto de campos que se refiere a una misma y única persona, cosa o transacción en particular forman lo que se llama un registro. Un conjunto de registros y campos relacionados con el mismo tema (mismo conjunto de personas, cosas o transacciones) de una organización se agrupan en una misma tabla de datos.


### Modelo de Datos 

El Modelo de Datos es una colección de herramientas conceptuales para describir los datos, las relaciones, la semántica y las restricciones de consistencia. Definir y diseñar el modelo de datos es generar una representación gráfica de la estructura que va a tener el almacenamiento de datos a un nivel lógico (ver niveles de abstracción en el apartado anterior). El trabajo de un especialista en sistemas de información en este punto es como el del arquitecto que dibuja un plano con todas 

las especificaciones y requerimientos de las necesidades de un usuario antes de la construcción de una casa. 

Podemos mencionar básicamente, algunos ejemplos de Modelos de Datos: 


- **Modelo Entidad-Relación**: basado en una percepción del mundo real que consta de una colección de objetos básicos, llamados entidades, y de relaciones entre estos objetos. Las entidades (tablas) son cualquier objeto, persona o transacción de la cual se necesitan guardar sus datos descriptivos o atributos representados en elipses. Estas entidades se representan en el modelo a través de un rectángulo con el nombre en su interior. Y la relaciones entre estas entidades se representan a través de rombos. 

- **Modelo de datos orientado a objetos**: es una extensión del paradigma de programación orientado a objetos donde se representa el mundo real y sus problemas a través de objetos; cada uno de ellos posee un nombre, atributos y operaciones, y poseen las propiedades de polimorfismo, herencia y encapsulamiento. A diferencia de los lenguajes de programación, las bases de datos son persistententes. 


- **Modelos de Datos Semiestructurados**: permiten la especificación de datos donde los elementos de datos individuales del mismo tipo pueden tener diferentes conjuntos de atributos. Esto es diferente de los modelos de datos mencionados anteriormente, en los que cada elemento de datos de un tipo particular debe tener el mismo conjunto de atributos. El lenguaje de marcas extensible (XML, eXtensible Markup Language) se usa ampliamente para representar datos semiestructurados. 


Históricamente, otros dos modelos de datos, el Modelo de Datos de Red y el Modelo de Datos Jerárquico, precedieron al modelo de datos relacional. Estos modelos estuvieron ligados fuertemente a la implementación subyacente y complicaban la tarea del modelado de datos. Como resultado se usan muy poco actualmente, excepto en el código de bases de datos antiguo que aún está en servicio en algunos lugares. 


- **Modelo Relacional**: que vamos a describir en el apartado siguiente y es el que vamos a utilizar en esta unidad.


---
---

## Modelo Relacional


El modelo relacional es una metodología que se utiliza para modelar una realidad en particular. Esta metodología emplea una colección de herramientas conceptuales para describir datos, relaciones entre ellos, y restricciones de consistencia. Este término está referido a la forma en que se organiza la información de las distintas tablas que componen la **Base de Datos**. 

“Una **base de datos relacional** consiste en un conjunto de tablas, a cada una de las cuales se le asigna un nombre exclusivo. Cada fila de la tabla representa una relación entre un conjunto de valores. Dado que cada tabla es un conjunto de dichas relaciones, hay una fuerte correspondencia entre el concepto de tabla y el concepto matemático de relación, del que toma su nombre el modelo de datos relacional”. 

El Modelo Relacional es un ejemplo de un modelo basado en registros. Los modelos basados en registros se denominan así porque la base de datos se estructura en registros de formato fijo de varios tipos. Cada tabla contiene registros de un tipo particular. Cada tipo de registro define un número fijo de campos, o atributos. Las columnas de la tabla corresponden a los atributos del tipo de registro.


Entonces, en un sistema relacional: 


- 1. El usuario percibe los datos en forma de tablas relacionales, las cuales se relacionan entre sí a través de identificadores llamados clave. 

- 2. Las operaciones al alcance del usuario (por ejemplo, para recuperación de datos) generan tablas nuevas a partir de las existentes. Así existirá un operador para extraer un subconjunto de las filas de una tabla determinada, y otro para extraer un subconjunto de las columnas (nivel de vistas, ver en niveles de abstracción desarrollado en párrafos anteriores) 


**Una base de datos relacional, finalmente, es un sistema específicamente diseñado para el manejo de información, que ha sido previamente organizada en forma de una o varias tablas relacionadas entre sí mediante campos comunes.**


### Elementos de una Base de Datos Relacional

- **Campo** es el espacio de almacenamiento de un dato en particular, la pieza más pequeña de información de la que se compone una base de datos, que es la parte indivisible, contiene un único dato. 

- **Registro** es un conjunto de campos que describen un mismo objeto o entidad. Un registro es, en medios electrónicos de almacenamiento, el equivalente a una ficha. cada registro está compuesto por los mismos campos, y en la misma disposición; sólo cambia el contenido, pero permanece invariable la longitud y la ubicación de cada uno de los datos en todos los registros. Esto siempre y cuando se esté hablando de base de datos relacionales las cuales conservan una estructura determinada. 

- **Tabla** es una colección de registros idénticos en cuanto a su formato, que se agrupan. La denominación de Tabla se debe a su organización en forma de filas y columnas que presentan los datos. Cada fila o renglón contiene los datos de un único registro, dispuestos uno al lado de otro, por lo que, siguiendo hacia abajo, en cada columna encontraremos un determinado campo de cada uno de los registros de la tabla. 

Veamos estos conceptos con un ejemplo: si queremos guardar artículos que están a la venta en un supermercado: fideos secos tallarín Masolio de 500g a $50,00.- se deberá guardar “fideos secos tallarín” en un campo al cual le podemos llamar descripcion, “Masolio” en un campo llamado marca, “50,00” en un campo precio, “500” en tamaño, “gramos” en unidad de medida, etc. Así mismo si se quiere guardar otro artículo, por ejemplo: arvejas en lata Arcos por 250 g $45,00.- cada dato se almacenaría en su campo respectivo. 

Entonces para guardar los datos de cada artículo tendremos los Campos: 


- descripción 

- marca 

- tamaño 

- unidad medida 

- precio 


Un registro sería el conjunto de todos los datos de un artículo en particular.


| Campos | Registro 1 |
| ------ | ---------- |
| Descripcion | Fideos secos tallarin |
| Marca | Masolio |
| Tamaño | 500 |
| Unidad Medida | Gramos |
| Precio | $ 50,00 |


| Campos | Registro 2 |
| ------ | ---------- |
| Descripcion | Lata arvejas |
| Marca | Arcos |
| Tamaño | 250 |
| Unidad Medida | Gramos |
| Precio | $ 45,00 |




La colección de esos registros (unidos a otros que podemos ir agregando) nos formaría una tabla que vista de esta forma podemos distinguir perfectamente cada fila como registro y cada columna como campo:


| Descripcion | Marca | Tamaño | Unidad Medida | Precio |
| ----------- | ----- | ------ | ------------- | ------ |
| Fideos secos tallarin | Masolio | 500 | Gramos | $ 50,00 |
| Lata arvejas | Arcos | 250 | Gramos | $ 45,00 |


Los nombres de los campos aparecen al tope de la tabla, describen la información que contendrá cada uno de ellos, y nos sirven como medio de referencia al dato contenido en el campo. 

A las tablas también se las llama entidades porque representan una cosa, persona o transacción y a cada campo se lo llama atributo ya que describen a esa entidad. Por lo cual dada la definición tendríamos con nuestro ejemplo la tabla o Entidad Artículos y sus atributos (descripción, marca, tamaño, unidad medida, precio)

```
ARTICULOS
-------
descripcion
marca
tamaño
unidad medida
precio
```

Cuando se diseña una tabla para una base de datos en el modelo relacional se dejan de lado los registros y se grafica la tabla teniendo en cuenta su nombre, el nombre de los campos y los campos claves (de los que hablaremos más adelante). Además, es importante tener en cuenta, al momento de diseño y construcción de la base de datos en un SGBD el tipo de datos que guardará cada campo; como esto va a ser propio del software que se utilice (lo que se verá en la unidad 3) genéricamente se va a trabajar con los siguientes tipos de datos:


- **Alfanumérico**: si el campo va a guardar textos, número y/o símbolos. 

- **Numérico**: si va a guardar números que luego puedan ser utilizados para cálculos matemáticos y distinguiremos si serán enteros o decimales (reales); 

- **Fecha/hora**: para aguardar fechas. (día-mes-año y/o Hora:minuto:segundo) 

- **Booleano**: si contenido del campo va a asumir solo dos valores. (True o false) 


Entonces, la tabla anterior en el momento del diseño o en su nivel lógico de abstracción se vería de esta forma:

```
ARTICULOS
---------
PK | codigo
   | descripcion
   | marca
   | tamaño
   | unidad medida
   | precio
```



---
---