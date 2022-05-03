# :book: Modulo 4 - React

---

## :star: Unidad 1 - configuracion de entorno

---
---


##  :star: Create React App

¿Cómo iniciar un nuevo proyecto de React? 

Iniciar un nuevo proyecto de React solía ser un proceso complicado de varios pasos que implicaba la configuración de un sistema de compilación, un transpilador de código para convertir la sintaxis moderna en código que todos los navegadores pudieran leer y una estructura de directorios básica. Pero, ahora, Create React App incluye todos los paquetes de JavaScript que necesita para ejecutar un proyecto de React, como transpilación de código, linting básico, pruebas y sistemas de compilación. También incluye un servidor con recarga directa que actualiza su página a medida que realiza cambios de código. Por último, creará una estructura para sus directorios y componentes para poder comenzar a codificar en minutos. 

La aplicación npm también incluye una herramienta denominada npx que ejecuta los paquetes ejecutables. Esto significa que ejecutará el código de Create React App sin descargar el proyecto primero. 

El paquete ejecutará la instalación de create-react-app en el directorio que especifique. No es necesario que este directorio exista de antemano; el paquete ejecutable lo creará. La secuencia de comandos también ejecutará npm install dentro del directorio del proyecto, que descargará cualquier dependencia adicional. 

Para instalar el proyecto de base, podemos hacerlo de 2 maneras: 

1 - Creando una carpeta con el nombre del proyecto y escribir npx create-react-app ./ en la terminal (Ésto significa que lo instalará sin crear una carpeta adicional) 


```
$ npx create-react-app ./
```

2 - Podemos instalar el proyecto directamente en una nueva carpeta, simplemente escribiendo npx-create-react-app nombre-carpeta

```
$ npx create-react-app nombre-carpeta
```

Este comando iniciará un proceso de compilación que descargará el código básico junto con varias dependencias. Cuando la secuencia de comandos finalice, verán que se han instalado las carpetas necesarias para que pueda ejecutarse el proyecto nuevo de React. 

```
> node_modules
> public
> src
.gitignore
package-lock.json
package.json
README.md

```


● node_modules/ contiene todas las bibliotecas de JavaScript externas que utiliza la aplicación. 

● El directorio public/ contiene algunos archivos de imagen, HTML y JSON. También contiene un archivo llamado index.html en el cual podemos, por ejemplo, cambiar el título de la página como también sus metadatos. 

● El directorio src/ contiene el código JavaScript React de su proyecto. La mayor parte del trabajo que se haga en React se encontrará en éste directorio. 

● El archivo .gitignore contiene algunos directorios y archivos predeterminados que git, su control de código fuente, ignorará, como el directorio node_modules. Los elementos ignorados suelen ser directorios o archivos de registro de mayor tamaño que no necesitará en el control de código fuente. También incluirá algunos directorios que creará con ciertas secuencias de comandos de React. 

● README.md es un archivo que contiene mucha información útil sobre Create React App, como por ejemplo, un resumen de los comandos y enlaces a la configuración avanzada 

Cuando ejecutó el comando inicial npx, no solo creó el proyecto de base, también instaló las dependencias adicionales. Al instalar las dependencias, se creó un archivo package-lock.json. El administrador de paquetes npm utiliza este archivo para garantizar que los paquetes coincidan con versiones exactas. De ésta manera, si otra persona instala su proyecto, puede asegurarse de que tendrá dependencias idénticas. Lo único que tiene que hacer la otra persona para correr su proyecto de React es utilizar el comando npm install.

Iniciando el nuevo proyecto de React 

Ahora vamos a iniciar el proyecto con otra secuencia de comandos npm. Al ejecutar la secuencia de comandos, iniciará un servidor local, ejecutará el código del proyecto, iniciará un observador que detectará los cambios en el código y abrirá el proyecto en un navegador web. 

En la terminal debemos escribir npm start (siempre posicionados en la carpeta donde instalamos el proyecto) 

```
$ npm start
```

Si ejecuta la secuencia de comandos de forma local, se abrirá el proyecto en la ventana de su navegador y cambiará el enfoque de la terminal al navegador. 

En el caso de que eso no suceda, pueden visitar http://localhost:3000/ para ver el sitio en acción. Si ya tiene otro servidor en ejecución en el puerto 3000, no hay problema. Create React App detectará el siguiente puerto disponible y ejecutará el servidor en él. En otras palabras, si ya tiene un proyecto en ejecución en el puerto 3000, este nuevo proyecto se iniciará en el puerto 3001.

---

### Antes de empezar a hacer modificaciones en nuestro proyecto de React debemos saber que React utiliza un concepto llamado Virtual DOM. 


##  ¿Qué es el DOM? 

Antes de explicar que es el Virtual DOM, vamos a repasar qué es el DOM. 

El DOM (Document Object Model) es esencialmente un modelo o representación gráfica del documento de nuestra aplicación web creado por el navegador, sobre el cual éste aplica los cambios necesarios en cada actualización de estado o evento. 

El DOM posee una estructura de diagrama de árbol, al cambiar algún elemento o nodo, todos sus elementos o nodos hijos serán renderizados nuevamente, hayan sido modificados o no. 

Actualizar el DOM puede ser costoso desde el punto de vista del rendimiento, porque mientras más elementos hijos tenga un elemento a modificar, más elementos hijos serán modificados, esto puede ser un problema para aplicaciones muy complejas, especialmente si son cargadas en equipos con bajo rendimiento.

¿Qué es el el Virtual DOM? 

El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles. 

En resumen, en cada actualización de la aplicación el proceso sigue los siguientes pasos: 

- 1. Cambio de Estado: Se produce un cambio en el estado de algún nodo o elemento, lo que genera un Virtual DOM. 

- 2. Cómputo de Cambios: React compara la diferencia entre el estado del Virtual DOM y el DOM del navegador y detecta los cambios producidos. 

- 3. Re-render: Se definen los cambios en el DOM y la interfaz es actualizada. 

### Ventajas del Virtual DOM 

Todo el proceso de carga, actualización y especialmente de renderizado del DOM puede llegar a consumir muchos recursos de procesamiento del lado del cliente en aplicaciones grandes, ya que en cada actualización el DOM renderizará cualquier elemento sobre el que se hayan aplicado cambios junto con TODOS sus nodos o elementos descendientes, sin importar si estos cambios son relevantes para cada nodo. 

La ventaja principal de utilizar un Virtual DOM como intermediario es que éste nos permite interceptar cambios a la interfaz, calcular qué cambios en el DOM son realmente necesarios, aplicarlos -en lo posible- solamente sobre aquellos nodos donde sean relevantes y, finalmente, enviar los cambios optimizados al DOM para la fase de renderizado, ahorrando recursos de procesamiento y brindando una experiencia de usuario más fluida en nuestras aplicaciones web.

### Renderización 

Ahora sí, vamos a empezar a modificar y crear componentes en nuestro nuevo proyecto de React. En el directorio src/. Realizaremos un cambio menor en el código CSS y JavaScript que se actualizará de forma automática en su navegador con la recarga directa incorporada. 

-> A continuación vamos a abrir el archivo App.js y vamos a hacer algunas modificaciones

-> guarden el archivo y vuelvan al navegador con el servidor iniciado (si no está iniciado escriban npm start en la terminal) y deben entrar en la url http://localhost:3000

-> Si han modificado las líneas indicadas correctamente, los cambios van a verse reflejados automáticamente al guardar el archivo. 

-> Ahora modifiquemos el código CSS que ya viene con la plantilla de React.


Observen que el archivo App.js importa una hoja de estilos CSS en la línea 2. Es decir, todos los estilos y clases que contenga App.css van a utilizarse en el componente App.js siempre y cuando se encuentre importado correctamente. 

Ahora vamos a modificar App.css y guardar los cambios para que puedan ver que efectivamente esa hoja de estilos CSS está enlazada con el archivo App.js 

Abriremos el archivo App.css y modificaremos el background-color de la clase App-header (Ésta clase representa el fondo de la plantilla) y vamos a colocarle, por ejemplo: background-color: black.


Ahora vamos a crear nuestro primer componente de prueba. Supongamos que ahora a nuestro proyecto de React queremos agregarle un encabezado arriba del logo giratorio. Dentro de la carpeta ./src vamos a crear una carpeta llamada Components y dentro de esa carpeta crearemos otra carpeta con el nombre de nuestro componente, en éste caso se va a llamar “Encabezado” y dentro de esa carpeta crearemos un archivo con la extensión .jsx con el nombre de nuestro componente junto con un archivo .css para que podamos agregarle estilos luego.

Luego de realizar los pasos correctamente deberían tener los siguientes archivos:

```
Components\Encabezado
  Encabezado.jsx
  style.css
 App.css
 App.js

```


Ahora dentro del archivo Encabezado.jsx vamos a escribir las siguientes líneas de código y vamos a hacer algunas observaciones. 

```JavaScript
import React from 'react'

const Encabezado = () => {
  return(
    <div>
       <h1>Mi primer componente</h1>
    </div>
  )
}

export default Encabezado;
```

Noten que en la línea 1 debemos importar React para que el proyecto interprete que vamos a utilizar la sintaxis propia de react. 

La sintaxis de un componente (de forma básica) se compone de una función que retorna un conjunto de elementos HTML (Que más adelante podemos agregarle muchas funcionalidades) luego de un return con paréntesis.

Todo lo que esté contenido por los paréntesis del return, es lo que va a mostrar nuestro componente al renderizarse. Eso puede verse reflejado entre las líneas 4 y 8. 

Para ver nuestro primer componente en la página primero debemos exportarlo para que pueda ser utilizado también en otros componentes si así lo quisiera. Nótese en la línea 3 y 11, deben tener el mismo nombre al exportarlo de manera predeterminada. 

Ahora debemos ir de nuevo a nuestro archivo App.js e importar el componente que acabamos de exportar anteriormente. 


En **App.js**:

```JavaScript
import logo from './logo.svg';
import './App.css';
import Encabezado from './Components/Encabezado';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App;

```

Una vez importado en la línea 3 estamos listos para poder utilizar y ver nuestro componente. Para eso podemos modificar de nuevo el código de App.js y arriba del header de la línea 9 podemos invocarlo simplemente como si fuese la sintaxis de un elemento HTML pero con la diferencia de que la etiqueta de cierre se encuentra hacia la derecha. 

---

También podemos agregarle propiedades CSS. 

¿Recuerdan que habíamos creado un archivo llamado styles.css? Ahora vamos a modificar Encabezado.jsx y styles.css, recuerden que se encuentran en la misma carpeta. 

En primer lugar, debemos importar el archivo con las clases y propiedades CSS que queramos aplicarle a nuestro componente. (Línea 2) 

A diferencia de HTML que las clases de CSS se asignan con la etiqueta “class”, en React se utiliza la etiqueta “className”. Crearemos 2 clases de prueba, se llamarán “contenedor” y “título”. Y se van a asignar como si fueran elementos HTML pero con la diferencia que ahora se asignará con className. 

src > Components > Encabezado > Encabezado.jsx
```JavaScript
import React from 'react'
import './styles.css'

const Encabezado = () => {
  return (
    <div className="contenedor">
       <h1 className="titulo">Mi primer componente</h1>
    </div>
  )
}

export default Encabezado
```
Con ésto han aprendido a crear un proyecto nuevo de react, cómo modificarlo y crear nuevos componentes. 

A partir de ahora pueden crear nuevos componentes y modificar el proyecto base de React a su gusto!

---
---

# :star:  ¿Qué es Node.js? 


Node.js es un entorno de ejecución de código abierto que utiliza código JavaScript en un servidor, sin necesidad de utilizar navegadores web. Además, Node.js se integra dentro de la gestión de paquetes utilizando la herramienta NPM (Node Package Manager) que se instala por defecto con Node.js, la cual permite instalar numerosos componentes a través de un repositorio en línea. 

Pasos a seguir para instalarlo: 

1 - Entrar en **https://nodejs.org/es/download/** y descargar el instalador de Node.js para el sistema operativo que tengan instalado. Pueden elegir la versión **LTS**.


2 - Ejecutar el instalador y avanzar de forma predeterminada todos los pasos


3 - Una vez finalizada la instalación, podemos corroborar fácilmente si Node.js se ha instalado correctamente en nuestra computadora. Para eso tenemos que ir a la terminal de comandos de nuestra computadora (en Windows, por ejemplo, escribir “cmd” en la barra de búsqueda y abrir la aplicación de “Símbolo del sistema”).


4 - Para verificar Node.js, en la ventana de comandos debemos escribir: node -v Y presionar la tecla Enter. 

Ahora debería aparecer la versión que tenemos instalada de NodeJS. 



Adicionalmente, podemos corroborar si también se nos ha instalado correctamente NPM escribiendo: 

```npm -v ``` Y presionar de nuevo Enter. 

---

Nos debería aparecer también en este caso la versión del Node Package Manager.


### :star:  Node Package Manager (NPM) 

Node Package Manager o simplemente npm es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla. Cuando instalamos nuevos paquetes lo que hace npm es instalarlo de manera local en nuestro proyecto dentro de la carpeta node_modules, pero nosotros podemos decirle que lo instale de manera global de ser necesario. 

Además, existen módulos que ya vienen instalados por defecto en Node.js por lo que no será necesario usar npm para traerlas, a estos módulos se les conoce como “módulos nativos”. 

###  ¿Cómo funciona el Node Package Manager? 

Esta herramienta funciona de dos formas: 

● Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto. Lo que significa que es una plataforma en línea donde cualquiera puede publicar y compartir herramientas escritas en JavaScript. 

● Como una herramienta de línea de comandos que ayuda a interactuar con plataformas en línea, como navegadores y servidores. Esto ayuda a instalar y desinstalar paquetes, gestión de versiones y gestión de dependencias necesarias para ejecutar un proyecto. 

Para usar paquetes, tu proyecto debe contener un archivo llamado package.json. Dentro de ese archivo, encontrarás metadatos específicos para los proyectos. 

Los metadatos muestran algunos aspectos del proyecto en el siguiente orden:

● El nombre del proyecto 

● La versión inicial 

● Descripción 

● El punto de entrada 

● Comandos de prueba 

● El repositorio git 

● Palabras clave 

● Licencia 

● Dependencias 

● Dependencias de desarrollo 

Los metadatos ayudan a identificar el proyecto y actúan como una línea de base para que los usuarios obtengan información al respecto


---

## Iniciando un proyecto con npm 

Si ya tienes Node y npm, y deseas comenzar a construir tu proyecto, ejecuta el comando npm init, ésto activará la inicialización de tu proyecto. 

Por ejemplo, crearemos un directorio llamado test-npm y cd en él. Ahora ejecutemos nuestro primer comando npm: 

```$ npm init``` 

Este comando funciona como una herramienta para crear el archivo package.json de un proyecto. Una vez que ejecutes los pasos de npm init, se generará un archivo package.json y se guardará en el directorio actual. 


Ahora te pedirá la información que contendrá el nuevo package.json, tienes que responder a cada una de las líneas. En el caso de que quieras cancelar la operación puedes presionar Ctrl+C o en el caso de que te equivoques, no te preocupes. Puedes volver a editarlo directamente en tu archivo package.json ya creado.

### Instalación de módulos npm 

Un paquete en node.js contiene todos los archivos que necesitas para instalar un módulo. Los módulos son bibliotecas de JavaScript que puedes incluir en tu proyecto. Instalar módulos es una de las cosas más básicas que debes aprender a hacer al comenzar con el administrador de paquetes Node. Este es el comando para instalar un módulo en el directorio actual:
 
```
$ npm install <modulo> 
$ npm i <modulo> 
```

Recuerda que debes estar en la misma carpeta donde se encuentra el package.json. 

Por ejemplo, si deseas instalar Express, el framework web node.js más utilizado y conocido, puedes ejecutar el siguiente comando: 

```$ npm install express ```

El comando anterior instalará el módulo express en /node_modules en el directorio actual y actualizará el package.json con la nueva dependencia. 

```
"dependencies": {
   "express": "4.16.4"
}
```

Nota: La carpeta node_modules se creará automáticamente en el caso de que no exista y en ella se encuentran los archivos y código necesario para que pueda funcionar correctamente el módulo que hayas instalado. 

Cada vez que instales una dependencia nueva se actualizará automáticamente tu package.json y la carpeta /node _modules.
---
---
