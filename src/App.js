import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {/* <div className="col-4 bg-warning">hello</div>
            <div className="col-4 bg-danger">hello</div>
            <div className="col-4 bg-primary">hello</div> */}
            <TodoInput/>     
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}
