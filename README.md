# Introducción a React

Este es un pequeño proyecto que sirve para explicar los conceptos básicos de React, una de las librerías más utilizadas para desarrollar interfaces de usuario en JavaScript

### ¿Qué ventajas tiene React sobre otras librerías y frameworks?

React hace uso del Virtual DOM, una representación en memoria del DOM de una página. React controla el Virtual DOM y evalúa qué cambios deben hacerse en el Virtual DOM, minimazando lo máximo posible el núemro de elementos que van a modificarse. Esto es una gran ventaja respecto a otras librerías y frameworks, ya que no es necesario modificar todo el DOM cada vez que se realice un cambio en un elemento.

Otra ventaja es la simpleza y reutilidad del código.

### Componentes 

React es una librería orientada a componentes, es decir, programaremos elementos del DOM que podrán ser reutilizados tanto como queramos. En este ejemplo de catálogo online tenemos, por ejemplo, el componente Producto.

Un componente puede o no tener un estado. Un estado es un conjunto de variables asociado a un componente en un momento determinado, de modo que un componente tendrá un estado inicial que irá cambiando a lo largo del tiempo. 

#### Componentes sin estado

Un componente sin estado es aquel que no tiene ningún estado almacenado. Cuando queremos crear un componente sin estado, lo más habitual es crear un componente de tipo función. Un componente de tipo funcoón es uno que se declara como una función de javascript que devolverá elementos JSX.

#### Componentes con estado: Clases VS Funciones con Hooks

Un componente con estado es aquel que que tiene un estado asociado que puede variar con el tiempo. En nuestro ejemplo del catálogo tenemos el componente Producto cuyo estado está compuesto por una única variable: la cantidad a añadir al carrito. Antiguamente, para crear un componente con estado era necesario crear un componente de tipo clase (ejemplo en src/components/ProductoClase.js), pero a partir de React 16.8 se pueden crear componentes de tipo función con estado gracias a los Hooks (ejemplo en src/components/Producto.js).

##### Componentes de tipo clase

Para crear un componente de tipo clase basta con crear una clase en JS que herede de la clase React.Component. La clase que creamos deberá tener un constructor que recibirá un objeto llamado props. Este objeto almacena las propiedades que pasa el componete padre a este componente. Si la clase tiene un estado asociado debe ser inicializado en el constrctor. También debe tener una función render() que devuelve el código JSX. También puede sobrescribir los métodos shouldComponetUpdate, componentDidMount... Para obtener más información sobre estos métodos, consulta la documentación de React.

#### Componentes de tipo función 

Para alamcenar un estado en un componente de tipo función debes utilizar los denomindados Hooks de React. El Hook useState nos permite almacenar una variable del estado. Por ejemplo el componente producto inicializa su estado al llamar a la función useState(1), donde 1 es el valor por defecto del estado cantidad. useState nos devolverá un array de 2 elementos. El primero será la variable que almacena el estado, y el segundo elemento una fución que nos permite actualizar ese estado. 

## Props y contexto

Las props, o propiedades, permiten pasar información de un componente padre a un componente hijo. Por ejemplo, el componente App pasa información sobre el priducto a mostrar por el componente Producto a través de la prop "producto". Son muy útiles para pasar información a desdendientes directos, pero en el caso de necesitar pasar información de un componente padre a un componente más lejano, es recomendable el uso de contextos. En este proyecto el contexto almacena el carrito de la compra. Si bien el componente App puede pasar el estado del carrito al componente Producto, puede que en un futuro sea necesario acceder a ese carrito en componentes que no son descendencia cercana del componente App. Por explicarlo de otra manera, el contexto almacena variables que son accesibles desde todos los componentes (algo así como almacenar variables globales).

## Redux

Es habitual utilizar Redux junto a React para tener en todo momento un mayo control de los estados de los distintos componentes. Redux nos permite definir Reducers, que no dejan de ser funciones que reciben una accion y un estado y, dependiendo de la acción, se modificará el estado de una manera u otra. En este proyecto no se utiliza Redux, pero poderíamos definir un Reducer para el carrito con las acciones AgregarProducto y EliminarProducto. El Reducer recibiría una de esas dos acciones y el carrito. 

## Probar el proyecto

Para probar el proyecto simplemente ejecuta los siguientes comandos en el directorio raíz del proyecto:

### `npm install`
para instalar todas las dependencias en la carpeta node_modules

### `npm start`
para lanzar el servidor.

Abre [http://localhost:3000](http://localhost:3000) para ver la página en el navegador
