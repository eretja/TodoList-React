import React, { Component } from 'react';
import './Todolist.css';

class Todolist extends Component {

  constructor (props){
  super();
  this.state = {
  tasks: ["learn js", "learn react"]
  };
  }

createNewTask(e){
  if(e.key === "Enter"){
    this.setState({
      tasks: [...this.state.tasks, e.currentTarget.value]
    });

    e.currentTarget.value = "";

  }
}


deleteTask(task, e){

}


  render() {
    return (
      <div className="todolist">
      <div className="header">
  <input onKeyPress={this.createNewTask.bind(this)} />
  </div>
  <div className="tasks">
  {this.state.tasks.map((task) =>{
  return <div className="task">
  {task}
  <span class="delete onClick=(this.deleteTask.bind(this, task))">x</span></div>
  })
  }
  </div>
      </div>
    );
  }
  }

export default Todolist;
