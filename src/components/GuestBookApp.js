import React, { Component } from "react";
//import PostList from "./PostList";
import NewPostFrom from "./NewPostFrom";
import FilterablePostList from "./FilterablePostList";
//import Filterinput from './Filterinput'
import { connect } from 'react-redux'



class GuestBookApp extends Component {
  state = {
    //posts: [],
    filterText: "",
    loading : false
  };

  handleOnCreatePost = ({ title, content }) => {
    const _id = "" + Math.random();
    const post = {
      _id,
      title,
      content
    };

    this.props.onCreatePost(post)
    // const newPosts = this.state.posts.concat(post); //concat return array
    // this.setState({
    //   posts: newPosts
    // });
    //console.log(newPosts)
  };

  handleFilterInputChange = (e) => {
    this.setState({
      filterText: e.target.value
    });
  };

  //API
  componentDidMount() {
    console.log(this.props)
    // this.setState({
    //   loading: true
    // })
    // fetch('http://localhost:3000/posts')
    // .then(res => res.json())
    // .then(json => {
    //   this.setState({
    //     posts: json,
    //     loading: false

    //   })
    // })
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
        {this.state.loading ? <h2>loading .....</h2> : null}
        <FilterablePostList posts={this.props.posts} filterText={this.state.filterText}/>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch) {
  return { onCreatePost: (post) => {
      dispatch({type: 'CREATE_POST', ...post})
    } 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GuestBookApp);
