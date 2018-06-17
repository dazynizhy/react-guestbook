import React, { Component } from 'react';
import PostList from './PostList'

class FilterablePostList extends Component {
  render() {
    const FilterablePostList = this.props.posts.filter((post) => {

        return post.title.toLowerCase().includes(this.props.filterText.toLowerCase())

    })

    return (
      <PostList posts={FilterablePostList} />
    )
  }
}

export default FilterablePostList;
