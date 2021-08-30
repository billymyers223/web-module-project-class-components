import React from 'react';


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            input:''
        }
    }

    handleChanges = e =>{
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task:''
        })
    }
    clearSubmit = e  =>{
        e.preventDefault();
        this.props.completeTodo();
    }

    render(){ return (
        <form>
            <label>
                <input type="text" name='task' value ={this.state.task} onChange ={this.handleChanges} placeholder='...todo'/>
            </label>
            <button onClick ={this.handleSubmit}>Add todo</button>
            <button onClick ={this.clearSubmit}>Clear Completed</button>
        </form>
    )
    }
}

export default TodoForm;