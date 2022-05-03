# :book: Modulo 4 - React

---

## :star: Unidad 2 - componentes

---
---

## Componentes I

### Definición

Los bloques básicos con los que vamos a construir todo en React se llaman Components. Podemos pensar a un Componente como una colección de HTML, CSS y JS, y un estado o datos específicos para ese componente. Estos componentes están definidos o en JavaScript puro, o usando lo que se conoce como JSX.


###  JSX

Básicamente, JSX es syntactic sugar para una función en particular de React: React.createElement(component, props, ...children). Lo que sucede es que está función recibe un objeto que describe un elemento tipo XML (parecido a HTML, pero con tags que podemos inventar). Es contraintuitivo escribir un elemento XML, con sus propiedades y demás, codificado en un objeto, por eso mismo es que crearon este lenguaje que nos permite escribir directamente código XML embebido en JS y que luego será transformado a JS por algún loader, como babel.

Veamos un ejemplo:

Sin JSX:

```JavaScript
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```


Con JSX:

```JavaScript
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```




Esta es la razón de ser de JSX, podemos leer más en detalle las demás features que nos ofrece acá.

Podemos ir a la página de babel y ver cómo se transforme el código JSX en Javascript plano:


```JavaScript
// codigo en JSX, componente basado en clases
class HelloWorld extends React.component{
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
};

// codigo en JSX, componente de funcion
function HelloWorldFuntion() {
  return(
    <div>
       Hello World!
    </div>
  )
};

// codigo en JavaScript con un componente de clases
"use strict";

var HelloWorld = function (_React$Component) {
  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      return React.createElement(
         "div",
         null,
          "Hello World!"
      );
    }
  }]);

  return HelloWorld;
}(React.Component);
```

```JavaScript
// codigo en JavaScript con un componente de funciones
"use strict";

function HelloWorld() {
  return React.createElement(
    'div',
     null,
    "Hello World!!
  );
}
```

Como podemos ver, la transformación toma los datos y los transforma a código Javascript. Se llamó a React.createElement en la función render, esta función crea un elemento HTML según los parámetros que les pasamos. Como podemos ver, escribir código JavaScript para crear elementos HTML puede ser engorroso. Si bien, podríamos codear todas nuestras apps de react escribiendo JS nativo, lo mejor y más productivo va a ser usar JSX.

 
---

## :star: BABEL

 
 
 
### Creando nuestro primer componente

Usemos el ejemplo de arriba, pero pensemos paso a paso cómo crear ese componente.

Como podemos imaginar, un Componente en react está representado por una clase o un objeto llamado Component. Este tiene incorporado una serie de propiedades y métodos, los cuales logran el comportamiento y le dan el poder de React.

Cuando nosotros creamos un componente nuevo, básicamente heredamos todas esas propiedades y métodos del objeto Component y luego customizamos el nuevo componente según nuestras necesidades. Veamos un ejemplo con un componente de clases:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
};

ReactDOM.render(<HelloWorld />, document.getElementById('app));
```

Del mismo modo podemos ver el ejemplo con un componente de función:


```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld extends React.Component {
  return(
    <div>
        Hello World!
      </div>
  ) 
};

ReactDOM.render(<HrlloWorld />, document.getElementById('app));
```
Primero importamos las librerías donde contienen la definición de los objetos de React. Luego creamos una clase, en este caso llamada 'HelloWorld', y extendemos a React.Component para formar nuestro nuevo Componente (este es el paso donde heredamos toda la funcionalidad de React!). Dentro de este nuevo objeto HelloWorld vamos a definir el método render, que es un método requerido por todos los componentes de React. Este método define el template de nuestro componente, por lo tanto es obligatorio!. Como verán, en este punto hemos incluido JSX, ya que escribimos código XML mezclado con JS, y justamente lo hemos usado para crear un nuevo tag div que contenga el String 'Hello World'.

Bien, ahora ya tenemos nuestro propio componente creado. Para indicarle a React que lo incluya en la página, vamos a llamar al método render de ReactDOM. Este método recibe como parámetro el componente que queremos incluir al DOM, y en qué lugar del mismo. Por lo tanto le pasamos nuestro componente``` (<HelloWorld />)```, y un selector ```document.getElementById('app')``` para indicarle donde agregarlo.

 

--- 
 
## :star: Props

Una de las ventajas de separar todo en Componentes, es que estos pueden ser reutilizables. Para que lo sean, vamos a poder cambiar un poco su comportamiento pasandole algunos datos. En React estos datos se conocen como props (propiedades) de un Componente. Veamos la forma de pasar props a un Componente.

Las props funcionan como los atributos HTML, es decir, que cuando usamos un Componente podemos agregarle props escribiendo su nombre dentro del tag del mismo. Por ejemplo, para agregar la prop name al Componente que habíamos creado antes, cuando lo usamos escribimos ```<HelloWorld name=Guillermo />```. De esta forma, podemos pasar una o varias props al mismo Componente. Ahora, para utilizarlas, dentro del Componente vamos a tener un objeto que se encuentra en this.props que va a contener todas las props que le hayamos dado a ese Componente. En el ejemplo, el name va a estar en this.props.name y va a tomar el valor de Guillermo. Por último, para poder acceder al contenido de this.props.name vamos a tener que escribir una expresión JavaScript dentro de JSX, para hacerlo tenemos que separarla con {}, en el ejemplo también usamos los {} para pasar una variable como prop:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hola, {this.props.name}
      </div>
    )
  }
};

const nombreVariable = 'Guillermo';

ReactDOM.render(<HelloWorld name={nombreVariable} />, document.getElementById('app));
```


En un componente de función:



```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorldFunction(props) {
    return (
      <div>
        Hola, {props.name}
      </div>
    )
  }
};

const nombreVariable = 'Guillermo';

ReactDOM.render(<HelloWorld name={nombreVariable} />, document.getElementById('app));
```


 

Ahora tenemos un Componente que nos sirve para saludar! Sólo tenemos que pasarle una prop con el nombre de a quién va dirigido el saludo. Es un ejemplo simple, pero mostramos la forma de React de pasar props a sus Componentes. Acá vemos una de las diferencias entre un componente de clases y un componente de funciones. El uso de la palabra reservada 'this', esto nos hace más facilita a la hora de hacer un debugging, no pensar a que hace referencia 'this' siempre es un plus. Además, no usar 'this' significa que no es necesario el uso de bindear los eventos para hacer referencia a eventos dentro de una clase.

Una cosa muy importante de las props es que son inmutables, es decir, que cuando las seteamos no las vamos a poder cambiar en el futuro (por lo menos están pensadas para eso). Podemos pensar en las props como una inicialización o una configuración de un Componente antes de agregarlo. Para datos que cambian veremos más adelante los estados de un Componente.

---
---
