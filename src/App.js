import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };
  handleSubmit = (event) => {
    //console.log("handle submt");
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    this.setState({
      items: [...this.state.items, newItem],
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    //console.log("handle clear list");
    this.setState({
      items: [],
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  handleEdit = (id) => {
    //console.log(`handle Edit ${id}`);
    const flitems =this.state.items.filter(item=>item.id !== id)
    const selected =this.state.items.find(item=>item.id === id)
    this.setState({
        items:flitems,
        item:selected.title,
        editItem:true,
        id:id
    }
    );
  }
  handleDelete = (id) => {
    //console.log(`handle Delete ${id}`);
    this.setState({
      items:this.state.items.filter(item=>item.id!==id)
    })

  };
  render() {
    //console.log(this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                editItem={this.state.editItem}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
              />

              <TodoList
                items={this.state.items}
                handleEdit={this.handleEdit}
                handleClear={this.clearList}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
