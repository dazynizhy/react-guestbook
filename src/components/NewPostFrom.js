import React, { Component } from 'react';


class NewPostFrom extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  render() {
    return (
      <div>
        <form>
        <div>
          <input type="text"  placeholder="CREATE NEW POST"/>
        </div>
        <div>
          <textarea placeholder="CONTENT"/>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>POST MY MESSAGE</button>
        </div>
        </form>
      </div>
    )
  }
}

export default NewPostFrom;
