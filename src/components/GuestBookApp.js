import React, { Component } from "react";
//import PostList from "./PostList";
import NewPostFrom from "./NewPostFrom";
import FilterablePostList from "./FilterablePostList";
//import Filterinput from './Filterinput'

const mockPost = [
  {
    id: 1,
    title: "title 1",
    content: "This is content 1"
  },
  {
    id: 2,
    title: "title 2",
    content: "This is content 2"
  },
  {
    id: 3,
    title: "title 3",
    content: "This is content 3"
  }
];

class GuestBookApp extends Component {
  state = {
    posts: mockPost,
    filterText: ""
  };

  handleOnCreatePost = ({ title, content }) => {
    const id = "" + Math.random();
    const post = {
      id,
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
  // componentDidMount() {
  //   fetch().then()
  // }

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
