
import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todo = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todo: todo,
    }
  }

  toggleItem =(id) =>{
    this.setState({
      todo: this.state.todo.map((item) =>{
        if(item.id === id){
          console.log(`selected ${item.completed}`)
          return {...item, completed:!item.completed}
        }
        return item
      })
    })
  }

  addTask = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({todo: [...this.state.todo, newTask]})
  }

  completeTodo =() =>{
    this.setState({
      todo: this.state.todo.filter((item) => !item.completed),
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo ={this.state.todo} toggleItem ={this.toggleItem} />
        <TodoForm addTask = {this.addTask} completeTodo ={this.completeTodo}/>
      </div>
    );
  }
}

export default App;
