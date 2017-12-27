import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


/*
The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.
check input ref below

ref callbacks are invoked before componentDidMount or componentDidUpdate lifecycle hooks.
*/
let AddTodo = ({ dispatch }) => {

  //ref attribute callback populates this input
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo