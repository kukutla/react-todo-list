import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import uuid from "uuid";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";

class App extends Component {
  state={
    items:[{id:1, item:"wake up early"},{id:2, item:"do exercise"}],
    id:uuidv4(),
    item:'',
    editItem:false
  }
  handleChange=(e)=>{
    console.log("handle change");
  }
  handleSubmit=(e)=>{
    console.log("handle submt");
  }
  clearList=()=>{
    console.log("handle clear list");
  }
  handleEdit=(id)=>{
    console.log(`handle Edit ${id}`);
  }
  handleDelete=(id)=>{
    console.log(`handle Delete ${id}`);
  }
  render() {
    console.log(this.state);    
    return (
      <div>
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-col-md-8 mt-5">
           <h3 className="text-capitalize text-center">
             todo input
           </h3>
           <TodoInput item={this.state.item} handleChange={this.handleChange}
           handleSubmit={this.handleSubmit} handleEdit={this.handleEdit}/>
           <TodoList items={this.state.items} handleEdit={this.handleEdit} handleClear={this.clearList}
           handleDelete={this.handleDelete}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default App