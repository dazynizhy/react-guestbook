import React, { Component } from 'react';
import PostListItem from './PostListItem'

class PostList extends Component {
  render() {
    const PostListItems = this.props.posts.map((post) => {
        return <PostListItem post={post} key={post._id}/>
    }) 

    return (
      <div>
         {PostListItems}
      </div>
    )
  }
}

export default PostList;
