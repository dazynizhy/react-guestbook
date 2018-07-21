import React, { Component } from 'react';


class NewPostFrom extends Component {

  state ={
    inputValue: '',
    textAreaValue: ''
  }


  handleInputchange = (e) =>{
    //console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  handleTextAreaChange = (e) =>{
    //console.log(e.target.value)
    this.setState({
      textAreaValue: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state)
    this.props.onCreatePost({
      title: this.state.inputValue,
      content: this.state.textAreaValue
    })
    this.setState({
      inputValue: '',
      textAreaValue: ''
    })
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit}>
        <div>
          <input
           value={this.state.inputValue}           
           onChange={this.handleInputchange}  
           type="text"
           placeholder="CREATE NEW POST"/>
        </div>
        <div>
          <textarea placeholder="CONTENT" 
          value={this.state.textAreaValue}
          onChange={this.handleTextAreaChange}/>
        </div>
        <div>
          <button type="submit">POST MY MESSAGE</button>
        </div>
        </form>
      </div>
    )
  }
}

export default NewPostFrom;
