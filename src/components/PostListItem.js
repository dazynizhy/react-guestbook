import React, { Component } from 'react';


class PostListItem extends Component {
  render() {
    return (
      <div>
          <div>
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.content}</p>
          </div>
      </div>
    )
  }
}

export default PostListItem;
