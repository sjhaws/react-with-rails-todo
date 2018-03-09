import React, { Component } from 'react';
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";


class App extends Component {
  state = { todos: [] }

  componentDidMount(){
    //TODO call to server for items
    fetch("/api/items")
    .then( response => response.json())
    .then( todos => this.setState({todos}))
  }

  addItem = (name) => {
    //TODO make api call
    let item = {name}
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    })
    .then( res => res.json())
    .then( todo=> {
      const {todos} = this.state
      this.setState({ todos: [...todos, todo] })
    })
  }

  updateItem = (id) => {
    //TODO api call 
    fetch(`/api/items/${id}`, {method: "PUT"})
    .then(res => res.json())
    .then(item => {
      let todos = this.state.todos.map( todo => {
        if (todo.id === id)
          return item
        return todo
      })
      this.setState({todos})
    })
  }

  deleteItem = (id) => {
    fetch(`/api/items/${id}`, {method: "DELETE"})
    .then ( () => {
      const {todos} = this.state;
      this.setState({todos: todos.filter(t => t.id !== id) })
    })
  }

  render() {

    return (
      <div className = "container">
        <TodoForm addItem = {this.addItem}/>
        <TodoList 
        todos = {this.state.todos} 
        updateItem = {this.updateItem} 
        deleteItem = {this.deleteItem} 
        />
      </div>
    );
  }
}

export default App;
