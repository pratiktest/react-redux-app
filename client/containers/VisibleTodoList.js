/*
Container components are nothing but React Components that use store.subscribe()

They read the redux state tree (i.e the state) and supply props to presentational component it renders

We generate container componets with React redux library connect which provides usefutl optimization to prevent re-renders

To use connect we define two functions

1) mapStateToProps:  how to transform redux stored state to props. takes state as argument and converts it to props
2) mapDispatchToProps: it receives dispatch() method and returns callback props that you want to inject into presentational components
*/


import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList