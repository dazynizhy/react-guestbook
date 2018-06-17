import React, { Component } from "react";
//import PostList from "./PostList";
import NewPostFrom from "./NewPostFrom";
import FilterablePostList from "./FilterablePostList";
//import Filterinput from './Filterinput'



class GuestBookApp extends Component {
  state = {
    posts: [],
    filterText: ""
  };

  handleOnCreatePost = ({ title, content }) => {
    const _id = "" + Math.random();
    const post = {
      _id,
      title,
      content
    };
    const newPosts = this.state.posts.concat(post); //concat return array
    this.setState({
      posts: newPosts
    });
    //console.log(newPosts)
  };

  handleFilterInputChange = (e) => {
    this.setState({
      filterText: e.target.value
    });
  };

  //API
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(json => {
      this.setState({
        posts: json
      })
    })
  }

  render() {

    // const filteredPosts = this.state.posts.filter((post) => {
    //   return post.title.includes(this.state.filterText.toLocaleLowerCase());
    // });

    return (
      <React.Fragment>
        <h1>My GUEST BOOK</h1>
        <NewPostFrom onCreatePost={this.handleOnCreatePost} />
        <input
          value={this.state.filterText}
          onChange={this.handleFilterInputChange}
        />

        <FilterablePostList posts={this.state.posts} filterText={this.state.filterText}/>
      </React.Fragment>
    );
  }
}

export default GuestBookApp;
