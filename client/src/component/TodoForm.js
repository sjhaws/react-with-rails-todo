import React from "react"

class TodoForm extends React.Component{
  state = {name: ""}

  handleChange = (e) => {
    this.setState({ name: e.target.value})
  }

  handleSubmit = (e) => {
    //stop refresh
    e.preventDefault()
    //send new item up to state
    this.props.addItem(this.state.name)
    //clear field
    this.setState({name: ""})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input
        placeholder="Add to Todo List"
        requiredvalue={this.name}
        onChange={this.handleChange}
        />
      </form>
    )
  }

}

export default TodoForm