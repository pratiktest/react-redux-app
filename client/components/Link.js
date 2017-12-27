import React, {Component} from 'react'

export default class Link extends Component {

    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
    }

    /*
        prevent default will prevent the default behaviour of event , which is opening a link for a href

        https://stackoverflow.com/questions/41398645/cannot-use-arrow-functions-inside-react-component-class
        to enable using arrow functions we need to install babel preset 2 since arrow function is statically scoped
        arrow function is a class property which is defined every time a class is created and bound to it
        however a method (traditional method) is a function whose this value is dynamic and hence has to be bound to the class
        we dont need to bind arrow functions since they are statically bound but to use them we need to install
        either npm install --save-dev babel-plugin-transform-class-properties or npm install --save-dev babel-preset-stage-2
        methods always get added to class prototype but arrow functions are not methods they are anonymous function expressions
        so they can only be added as a property

        lass property syntax (which at the time of writing is an ES7 candidate proposal²) is just sugar for assigning the same properties to every instance
        hence we just use pure function and bind it in the constructor

        arrow functions follow lexical scoping.
    */
    onClick(e){
        e.preventDefault();
        this.props.onClick();
    }

    render() {

         var link = null
         if (this.props.active) {
            link =  <span>{this.props.children}</span>
         } else{
            link = <span><a href="" onClick={this.onClick}>{this.props.children}</a></span>
         }
        return (
            <span>
             {link}
            </span>
        );
    }
}