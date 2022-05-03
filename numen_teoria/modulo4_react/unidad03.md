# :book: Modulo 4 - React

---

## :star: Unidad 3 - JSX

---
---

##  JSX


JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React y transforma el código a JavaScript común. 

React, al basarse en un desarrollo de aplicaciones separadas por componentes, necesitamos crear elementos HTML que definan nuestro componente, como por ejemplo: ```<div>```,``` <p>```, ```<img>```, etc. Y también debemos indicar cuando se trata de componentes creados por nosotros en React, como por ejemplo: ```<Image/>```,``` <Table/>```, etc. 

Todo ésto podemos hacerlo en JavaScript con los métodos que nos ofrece React como React.createElement. 

Imagina que quieres crear un componente ```<Icon/>``` que está definido por un div, un img y algunas clases de CSS. Con JavaScript sería algo así:

```JavaScript
var image = react.createElement("img", {
  src: "react-icon.png",
  className: "icon-image",
});

var container = React.createElement(
  "div",
  {
    className: "icon-container",
  },
  image
);

var icon = React.createElement(
  "Icon",
  {
      className: "avatarContainer",
  },
  container
);

ReactDOM.render(icon, document.getElementById("app"));
```

Con ésto tendríamos con componente ```<Icon />``` que se refleja en el siguiente código HTML: 

``` html
<div class="icon-container">
  <img src="icon-react.png" class="icon-image" alt="icon" />
</div>
```


Con su respectivo código CSS: 


```CSS
.icon-image {
  width: 100px;
}

.icon-container {
  background-color: #222;
  width: 100px;
}
```





Empleando Sintaxis JSX 

```JavaScript
var Icon = (
   <div className="icon-container">
     <img src="icon-react.png" className="icon-image" alt="icon" />
   </div>
);

ReactDOM.render(Icon, document.getElementById("app"));
```

Como pueden observar, es mucho más práctica y legible esta sintaxis. Es muy parecido a escribir HTML, pero con JavaScript. 

Algunas cosas a tener en cuenta es que existen algunas palabras reservadas en JavaScript y JSX te obliga a nombrar algunos atributos de otra manera, como es el caso de las class para definir clases de CSS que con JSX debemos escribir className.


---

## Eventos 

Con React se construyen interfaces de usuario para la web y por supuesto, una de las partes fundamentales de éstas es la interacción con el visitante. Para poder responder a acciones realizadas sobre los componentes por parte de nuestros usuarios usamos los eventos. 

Algunas aclaraciones a tener en cuenta cuando manipulamos eventos en React 

● Los **eventos** de React se nombran usando camelCase, en vez de minúsculas. 

● Con JSX pasas una función como el manejador del evento, en vez de una string. 

Por ejemplo, en HTML: 

```HTML
<button onclick="activarEvento()">
  Activar el elemento
</button>
```


En React la sintaxis correcta sería: 

```
<button onClick={activarEvento}>
  Activar el evento
</button>
```


Otra diferencia en React es que no se puede retornar false para prevenir el comportamiento por defecto. Se debe invocar a preventDefault. Por ejemplo, en un HTML común, para prevenir el comportamiento por defecto de enviar un formulario, se puede escribir: 

```html
<form onsubmit="console.log('Se ha enviado el formulario'); return false">
  <button type="submit">Enviar</button>
</form>
```

En React, ésto podría ser:

```JavaScript
function Form() {
  function handleSubmir(e) {
    e.preventDefault();
    console.log('Se ha enviado el formulario');
  }
  return (
    <form onSubmit={handleSubmit}>
       <button type="submit">Enviar</button>
     </form>
  )
}
```

---

### Añadiendo lógica a nuestros componentes 

Ahora que ya hemos visto cómo asignar eventos y ejemplos de sintaxis, vamos a agregarle algo de lógica a la siguiente lista: 


```JavaScript
const Lista = () => {
  return (
    <div>
       <ul> 
          <li>Arroz</li>
          <li>Queso</li>
          <li>Huevo</li>
          <li>Leche</li>
          <li>Yogurt</li>
       </ul>
       <button>Ocultar Lista</button>
    </div>
  );
}
```


En primer lugar vamos a agregarle un evento al botón para que se oculte toda nuestra lista. Antes que nada deberíamos crear una función y un estado que nos permita saber cuando debería mostrarse (o no) dicha lista. Para ello vamos a importar el hook useState y crear una función que pueda manipularlo.

```JavaScript
import { useState } from "react";

cont Lista = () => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
     setvisible(false);
  };

  return (
    <div>
      {visible && (
        <ul>
          <li>Arroz</li>
          <li>Queso</li>
          <li>Huevo</li>
          <li>Leche</li>
          <li>Yogurt</li>
        </ul>
      )}
      <button onClick={handleClick}>
        Ocultar Lista
      </button>
    </div>
  );
};
```


Explicación del código: 

● Línea 1 se ha importado el hook useState para que pueda ser utilizado posteriormente en nuestro código. 

● Línea 4 hacemos uso de nuestro useState para que su valor inicial siempre sea true y la función que puede modificar ese valor vamos a utilizarlo luego en nuestro botón.

● Línea 12 especificamos que la lista solo se va a mostrar si nuestro estado “visible” está en true, en el caso de que sea cambiado a false dejará de aparecer en el DOM. 

● Línea 21 a nuestro botón le hemos agregado al evento onClick la función handleClick, que lo único que hace es cambiar nuestro estado “visible” de true a false. 


Ahora hemos aplicado la lógica de un render condicional en nuestro componente Lista.

¿Pero qué pasaría si nuestra lista empieza a crecer y cada uno de nuestros``` <li>``` también necesita recibir un onClick o un className? 

Seguramente el código se parecería a algo como ésto: 

```
<ul>
  <li onClick={nombreFuncion} className="nombre-clase">Arroz</li>
  <li onClick={nombreFuncion} className="nombre-clase">Queso</li>
  <li onClick={nombreFuncion} className="nombre-clase">Huevo</li>
  <li onClick={nombreFuncion} className="nombre-clase">Leche</li>
  <li onClick={nombreFuncion} className="nombre-clase">Yogourt</li>
  <li onClick={nombreFuncion} className="nombre-clase">A</li>
  <li onClick={nombreFuncion} className="nombre-clase">B</li>
  <li onClick={nombreFuncion} className="nombre-clase">C</li>
  <li onClick={nombreFuncion} className="nombre-clase">D</li>
  <li onClick={nombreFuncion} className="nombre-clase">E</li>
</ul>
```

Nuestra lista empezaría a ser ilegible y con escalabilidad nula. 

### ¿Cómo resolvemos este problema? 

La forma más adecuada sería crear un array de objetos con cada uno de sus valores para que se rendericen de forma automática en el DOM. Vamos a verlo de forma detallada a continuación:

```JavaScript
const lista = [
  {
     cantidad: 1,
     nombre: "Arroz"
  },
  {
     cantidad: 100,
     nombre: "Queso"
  },
  {
     cantidad: 12,
     nombre: "Huevo"
  },
  {
     cantidad: 4,
     nombre: "Leche"
  },
  {
     cantidad: 2,
     nombre: "Yogourt!
  },
]
```

Noten que ahora a nuestra lista le agregamos información adicional que sería la cantidad de cada uno de nuestros items. 

Ahora lo que se debe hacer con esa lista es una iteración con un método de array llamado map.


```JavaScript
  {visible && (
    <ul>
        {lista.map((item) => (
          <li>
            {item.cantidad} {item.nombre}
          </li>
        ))}
    </ul>
  )}

```


Noten como se han reducido la cantidad de líneas de código simplemente utilizando una iteración. 

Explicación del código: 

● Línea 37 y 41, todo debe ir encerrado por corchetes ya que estamos especificando que en el DOM vamos a ejecutar algo de código JavaScript. A continuación seleccionamos la información de nuestra variable lista que hemos declarado arriba y le aplicamos el método map. Cuando especificamos el parámetro item (puede ser cualquier nombre) significa que por cada iteración va a tomar de cada una de nuestras posiciones de nuestro array a la vez. Por ejemplo: La primera vez sería: {cantidad: 1, nombre: “Arroz”} 

● Línea 38 a 40, ya que ahora tenemos un patrón que se repite debemos devolver un elemento (en éste caso los <li> que ya teníamos anteriormente) pero en su contenido podemos especificar la información de nuestro arreglo de objetos, en éste caso nos interesa que nos muestre la cantidad y el nombre de nuestros objetos de la lista. Siempre que queramos mostrar un valor iterado en un map, debemos encerrarlo en corchetes para especificar que estamos ejecutando una parte de código JavaScript.

---

### Listas y Key 

Antes de seguir aplicando lógica debemos aprender que cuando se utiliza una iteración sobre elementos se necesita una prop llamada key. 

La prop key es utilizada por React para mantener un registro de los elementos que han cambiado, es decir, son utilizadas para dar una "identidad" a los elementos de la lista. 

Las claves en las listas ayudan a React a identificar los elementos que van cambiando a medida que la lista se va renderizando. De este modo, puede identificar los nuevos elementos, aquellos que se han eliminado y los que han sido reordenados. 

Nuestro código corregido debería quedar así: 

```JavaScript
{visible && (
  <ul>
     {lista.map((item, index) => (
        <li key={index}>
           {item.cantidad} {item.nombre}
         </li>
     ))}
  </ul>
)}
```

En resumen, React no tiene forma de conocer de antemano los detalles de implementación del código y los cambios ejercidos sobre los datos dentro de una colección. Este desconocimiento es el que crea el requerimiento de tener una prop que le de información a React para saber qué hacer cuando una colección de elementos cambia.

Ahora vamos a modificar nuestra lista para agregarle más lógica, el objetivo de ésta parte es poder modificar su clase de css al hacer click en cualquier item. (Quedaría el item tachado) 

Primero deberíamos crear otro estado para guardar aquellos items que fueron clickeados:

```JavaScript
const [items, setItems] = useState([]);
```

En segundo lugar, declarar una función que nos permita guardar valores pero sin modificar aquellos que ya fueron guardados, ésto lo podemos lograr con “setItems” y “...” el spread operator. La función del spread operator es simplemente guardar exactamente una copia actual de nuestro array, y a continuación concatenamos el item siguiente que nos proporcionaremos como parámetro en nuestra función, debería quedar así: 

```JavaScript
const handleItemClick = (item) => {
  setItems([...items, item]);
};
```

Ahora en tercer lugar vamos a combinar lo que hemos creado y asignarle a nuestros <li> un evento onClick y una className dinámica. 

```JavaScript
{visible && (
   <ul>
     {lista.map((item, index) => (
        <li 
           key={index}
           onClick={() => handleItemClick(index)}
           className={items.includes(index) ? "item-done" : null}
        >
           {item.cantidad} {item.nombre}
         </li>
     ))}
  </ul>

)}

```

Recuerden que un método map, su segundo parámetro (index) siempre es la posición actual en la cual se encuentra iterando, podemos usar ese mismo índice para identificar a nuestros <li> y poder asignarles una clase dinámica.

Cada vez que nuestro evento onClick se ejecute, guardará la información actual que contiene y concatenará el siguiente item al que hemos hecho click. 



Al tener esta información podemos usar otro método de array llamado includes. Ésto significa que si el identificador de nuestro <li> (index) se encuentra incluído en nuestro estado items, se cumplirá la condición de nuestro operador ternario y su className pasará a llamarse “items-done”, caso contrario no se asignará ninguna clase. 

El código CSS de ésta última parte es el siguiente:

```CSS
li {
  cursor: pinter;
}

.item-done {
  text-decoration: line-throught;
}
```

Recuerden que pueden crear un archivo css y para que éste funcione correctamente deben importarlo en el archivo donde se encuentre nuestro componente.

``` import "./styles.css";

El código completo de nuestra lista empezando desde arriba hacia abajo:


```javaScript
import { useState } from "react";
import "./styles.css";

const lista = [
  {
    cantidad: 1.
    nombre: "Arroz",
  },
  {
    cantidad: 100,
    nombre: "Queso",
  },
  {
    cantidad: 12,
    nombre: "Huevo",
  },
  {
    cantidad: 4,
    nombre: "Leche",
  },
  {
    cantidad: 2,
    nombre: "Yogourt",
  },
]

```

---
---
