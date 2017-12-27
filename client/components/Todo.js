//React is imported below  for render and return functions. These are defined in React

import React, {Component} from 'react'


export default class Todo extends Component{

  constructor(props){
    super(props)
  }

  render() {

    return(
        <li onClick={this.props.onClick} style={{textDecoration: this.props.completed ? 'line-through': 'none'}}>
            {this.props.text}
        </li>
    );
  }

}