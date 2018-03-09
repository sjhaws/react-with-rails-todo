import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, updateItem, deleteItem }) => (
  <div className="row">
  {todos.map( todo =>
    <Todo
      key={todo.id}
      {...todo}
      updateItem={updateItem}
      deleteItem={deleteItem}
      />  
    )}
  </div>
)

export default TodoList