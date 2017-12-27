# redux-react-router

## What does this app do?

* this application is a very basic bare bone setup for getting started with redux and react
* webpack configures this application to serve from index.jsx in production
* webpack configures this application to server from /public/index.html in dev mode using webpack-dev-server
* this application has basic react router setup using browserRouter to route between two pages
* it includes basic redux todo app setup from redux official website. This app just emits actions and listens.
* app does not have any presentational components
* to view output do to developer tools of your browser and view the console output

## how to run
* npm install
* npm run build .. this will run webpack --config webpack.config.js and build bundle.js
* npm run start ..this will start express server -> node /server/index.js
* npm run devstart .. this will start webpack-dev-server and will send back bundle.js. Note webpack-dev-server will create its own internal bundle.js which will not be placed in output folder


## extension
* we will try to understand how to design presentational and container components
### Presentation
* We wull have a root component that renders everything
* Lets call this component App
* Footer component will allow user to change todos
* Link component is a callback
* TodoList and Todo (single todo)

### Container 
* these components connect the presentational components to redux
* VisibleTodoList subscribes to redux store and applies visiblity rules for TodoList
* FilterLink 


### Objects in javascript
* objects in javascript are simply a encapsulation which contains key value pairs
* ```var person = {"name":"Pratik", "bio": function(){alert(this.name)}}```
* When a new object instance is created using a constructor function, its core functionality is not copied over to the new object. Instead it is linked via prototype chain
* 

```

function createNewPerson(name){
    var obj = {}
    obj.name = name
    return obj
}

var person = createNewPerson('pratik')

```
* we can do the above by using contructor functions

```
function Person(name){

    this.name = name

}

var person = new Person('pratik')

we can also do

var person = new Object()
person.name = 'pratik'

OR

var person  = Object.create(person2)

OR

var person = new Pbject({"name":"Pratik"})

```

### Prototype

* javascript is a prototype based language
* each object has a prototype object which acts like a template object  
* so the properties and methods of the object are defined on the prototype property on the Objects contructor functions and not the instances themselves
* when object instances are created all the properties and methods are copied over  to instance in normal OOP but not in javascript
* instead a link is made between object and its prototype
* properties and methods are found by walking up the prototype chain
* prototype properties value is an object which we want to inherit down the chain



### Classes in javascript
* we will see in a lot of places we have extended React.Component and used keyword class
* clasess in javascript are special functions
* classes are just syntactic sugar over prototypical inheritance in javascript
