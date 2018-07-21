import React, { Component } from 'react';
import styled from 'styled-components'

const PostItemBox = styled.div`
background: #ffffff;
padding: 15px; 
border: 2px solid #eee;
margin-bottom: 20px;

.post-title {
  font-size : 25px;
  color: #00ffff ;
}
p{
  font-size : 16px;
  color:#606060;
}

/* @media */
`

class PostListItem extends Component {
  render() {
    return (
      <PostItemBox>
            <h4 className="post-title">{this.props.post.title}</h4>
            <p>{this.props.post.content}</p>
      </PostItemBox>
    )
  }
}

export default PostListItem;
