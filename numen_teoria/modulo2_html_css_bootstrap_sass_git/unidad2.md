
## :book: Unidad 2: CSS

Temas:

- Selectores por etiqueta

- Selectores a través de atributos

- Propiedades y valores

- Sistema de cascada

- Estilos por defecto

- Posicionamiento de elementos

- Modelo de cajas

- Relatividad

- Debugging en el explorador

- Responsive web design

- Unidades de medida relativas

- Flexbox

- Media-queries

- Pseudo clases y Pseudo elementos

- Transformaciones

- Recursos externos (Google Fonts, FontAwesome)

- Framework y librerías (Bootstrap)

---
---


## :star: Framework CSS

DEFINICIÓN: Un framework es un marco o esquema de trabajo generalmente utilizado por programadores para realizar el desarrollo de software. Utilizar un framework permite agilizar los procesos de desarrollo ya que evita tener que escribir código de forma repetitiva, asegura unas buenas prácticas y la consistencia del código.

---
---

## :star: CSS


### ¿Qué es CSS?

CSS por sus siglas en inglés (Cascading Style Sheets) “hojas de
estilo en cascada” Es el lenguaje que define el estilo de los
elementos de un documento HTML, por lo tanto es el lenguaje
con la cual controlaremos el diseño, la apariencia de nuestras
páginas web hechas con HTML.



### Un poco de historia

• En 1995, el W3C decidió apostar por el desarrollo y estandarización de CSS y lo añadió a su grupo de trabajo de HTML. A finales de
1996, el W3C publicó la primera recomendación oficial, conocida como "CSS nivel 1".

• A principios de 1997, el W3C decide separar los trabajos del grupo de HTML en tres secciones: el grupo de trabajo de HTML, el grupo
de trabajo de DOM y el grupo de trabajo de CSS.

• El 12 de Mayo de 1998, el grupo de trabajo de CSS publica su segunda recomendación oficial, conocida como "CSS nivel 2". La
versión de CSS que utilizan todos los navegadores de hoy en día es CSS 2.1, una revisión de CSS 2 que aún se está elaborando (la última actualización es del 8 de septiembre de 2009). Al mismo tiempo, la siguiente recomendación de CSS, conocida como "CSS nivel 3", continúa en desarrollo desde 1998 y hasta el momento
sólo se han publicado borradores.

• La adopción de CSS por parte de los navegadores ha requerido un largo periodo de tiempo. El mismo año que se publicó CSS 1, Microsoft lanzaba su navegador Internet Explorer 3.0, que disponía de un soporte bastante reducido de CSS. El primer navegador con soporte completo de CSS 1 fue la versión para Mac de Internet
Explorer 5, que se publicó en el año 2000. Por el momento, ningún navegador tiene soporte completo de CSS 2.1.


### ¿Porque usar CSS?

HTML y CSS tienen una relación muy fuerte entre ellos, ya que el HTML es un lenguaje de marcado (constituye la base de un sitio web) y CSS
define el estilo de la página (toda la parte estética).

A pesar de que las Hojas de Estilo en Cascada no son imprescindibles, son importantes para darle forma y apariencia a tu página web. Si solo
usas HTML tu página se verá desnuda y no destacará entre la competencia.


### Ventajas de usar CSS

1.- Separación del contenido y presentación.Las hojas de estilo generalmente se encuentran en archivos separados del código principal (html, por ejemplo). Esto nos va a permitir que en un equipo de trabajo, programador y diseñador puedan realizar sus tareas de forma independiente aunque paralela, sin correr el riesgo de que haya interferencias entre ambos, y ello no alterará el resultado final.

2.- Flexibilidad.Podríamos comparar las hojas de estilo con la ropa que guardamos en nuestros cajones. Nosotros somos los mismos, pero dependiendo de la temporada variamos nuestra apariencia. En el caso de las hojas de estilo sucede lo mismo: podemos cambiar en cualquier momento alguna parte o la totalidad del diseño de nuestras páginas con sólo modificar nuestra hoja de estilo, sin que ello suponga modificar el contenido.
3.- Unificación del diseño de las páginas del sitio.

Un sitio web, ya sea dinámico o estático, suele estar formado por unas cuantas páginas. Mantener una misma apariencia se puede volver una tarea pesada y tediosa si tenemos que copiar y pegar código cada vez que creemos una página nueva, o que deseemos modificar una misma cosa en todas. Enlazando a cada una de nuestras páginas nuestras hojas de estilo, agilizamos este proceso y minimizamos el trabajo.


4.- Optimización de los tiempos de carga y de tráfico en el servidor. Al haber dividido contenido y apariencia obtenemos archivos más ligeros, y esto nos reporta dos
beneficios: por un lado, reducimos notablemente los tiempos de carga del sitio en el navegador. A esto debemos unir la capacidad de éste para mantener nuestra hoja de estilo en caché. Por otro lado, reducimos el volumen de tráfico de nuestro servidor, que siempre es de agradecer, tanto si disfrutamos de servicios gratuitos en que solemos tener cuotas muy reducidas, como si pagamos por tener alojamiento propio.

5.- Precisión o elasticidad. Desde el momento en que usemos CSS , el tamaño y posicionamiento de los elementos que formen nuestras páginas podrá ser exacto. Podremos indicarle al navegador en qué píxel debe colocar ésta o aquélla imagen, o qué alto y ancho deberá mostrar.
Pero al mismo tiempo, podremos emplear medidas variables o relativas que nos permitan expandir el contenido hasta ocupar la totalidad de la ventana de navegación a nuestro antojo, o contraerla a sólo una parte de la misma, con independencia de la resolución de pantalla del usuario.

6.- Accesibilidad y estructuración. La combinación de CSS y marcadores descriptivos va a posibilitar que nuestra página se vea correctamente con o sin hoja de estilos, puesto que en cualquier caso, la información se mantendrá estructurada y ordenada. Esto supone que podrá ser accesible sin ningún tipo de problemas tanto por navegadores antiguos o sin soporte para CSS, como para personas con algún tipo discapacidad.


7 - Limpieza del código fuente.Si escribimos una hoja de estilo independiente, el código fuente de nuestra web va a resultar menos farragoso y agilizaremos las tareas de localización de las líneas que busquemos.

8.- Compatibilidad y continuidad. Las reglas establecidas por la especificación CSS-1 fijaron los estándares del diseño, y se mantienen y respetan en la CSS-2. Es de prever que en el nivel 3 sucederá lo mismo con respecto a su predecesor. Pero lo realmente interesante es que los navegadores que no soporten CSS-3 no tendrán problemas a la hora de asimilar el contenido CSS puesto que siempre les quedará la compatibilidad de CSS-2, o la CSS-1 en su caso. La compatibilidad de las especificaciones CSS anteriores estará siempre garantizada.

9.- Estandarización frente a especificaciones propietarias. La adopción de estándares por la W3C ofrece la ventaja de la compatibilidad del código entre los diferentes
navegadores web. El uso de “soluciones propietarias”, como es el caso de muchas etiquetas o patrones usadas por Microsoft.
En su interpretación de lo que es y no es CSS, dificulta la creación de páginas web, porque supone tener que escribir dos códigos distintos para obtener un mismo resultado, en función del tipo de navegador que use el visitante.

El uso del estándar CSS de la W3C evitará visualizaciones incorrectas de nuestras páginas en distintos navegadores.

10.- Permite la diferenciación de estilos para imprimir / visualizar en pantalla. El uso de CSS nos va a permitir también maquetar separadamente el contenido de
nuestra web para ser mostrado en pantalla o para ser impreso. Tengamos en cuenta que las necesidades y propiedades de un folio de papel y de un monitor nunca van a ser las mismas, y gracias a CSS podremos determinar cómo queremos que se imprima lo que mostramos en la pantalla, manteniendo siempre una apariencia limpia, ordenada y agradable visualmente. 

Espero que estas pequeñas reflexiones hayan servido para animarte a dar el gran salto y vestir a tu web con un bonito traje CSS hecho a medida. Y si aún no te
animas a usar CSS en tu sitio, te invitamos a conocer CSS Reinicia, una iniciativa que busca que sitios web en nuestro idioma se reinventen gracias a esta tecnología

###

###
---
---


## :star:

---
---

## :star:

---
---