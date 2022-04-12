import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key),
    });
    console.log(key);
  };
  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1> Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items..."
          />
          {/* <button>Add</button> */}
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa fa-trash"
                onClick={() => this.deleteItem(index)}
                aria-hidden="true"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
