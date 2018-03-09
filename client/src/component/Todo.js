import React from "react"

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey"
  },
  pointer: {
    cursor: "pointer",
  }
}

const Todo = ({id, complete, name,  updateItem, deleteItem }) => (
  <div className = "column s12">
    <div className = "col m8">
      <div style={complete? styles.complete : {}} className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateItem(id)}
        />
        <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer} className="col m1" onClick={ () => deleteItem(id)}>
    X
    </div>
  </div>
)

export default Todo