import React, { Component } from 'react';
import './demo.css';

class demo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">todoList</h1>
        </header>
        <div className="App-intro">
          <TodoList />
        </div>
      </div>
    );
  }
}

class TodoList extends Component {
  constructor (props) {
    super(props);
    window.x = this;
    this.state = {todolist: []};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (rows) {
    this.setState({
      todolist: rows
    });
  }
  render () {
    return (
      <div>
        <TypeNew onAdd={this.handleChange} todo={this.state.todolist} />
        <ListTodo todo={this.state.todolist} />
      </div>
    );
  }
}

class ListTodo extends Component {
  handleDelete = (index, event) => {
    let rows = this.props.todo;
    rows.splice(index, 1);
    this.setState({rows: rows});
  }
  render() {
    return (
      <ul id="todo-list">
        {
          this.props.todo.map((item, index) => {
            return (
              <li key={index}>
                <a>{item}</a>
                <button onClick={this.handleDelete.bind(this, index)}>删除</button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

class TypeNew extends Component {
  constructor (props) {
    super(props);
    window.y = this;
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd (e) {
    e.preventDefault();
    var rows = this.props.todo;
    if (this.textInput && this.textInput !== '') {
      // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
      rows.push(this.textInput.value);
      this.props.onAdd(rows);
    }
    this.textInput = '';
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
      </form>
    );
  }
}

export default demo;
