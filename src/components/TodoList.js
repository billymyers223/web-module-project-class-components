// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
const TodoList = props => {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
  
     
      return (
        <div>
            {props.todo.map(item =>(
                <Todo key = {item.id} toggleItem ={props.toggleItem} item ={item}/>
            ))}
        
        </div>
      );
    
    
}
  
  export default TodoList;