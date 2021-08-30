import React from 'react';
import './Todo.css'
const Todo = props => {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    const handleClick = () =>{
        props.toggleItem(props.item.id)


    }
    let classCss =''
    if(props.item.completed === true){
        classCss ='active'
    }
      return (
        <div onClick = {handleClick}>
                        <p className ={classCss}>{props.item.task}</p>
        </div>
      );
    
    
}
  
  export default Todo;