import React, { Component } from "react";
//import PostList from "./PostList";
import NewPostFrom from "./NewPostFrom";
import FilterablePostList from "./FilterablePostList";
import LoginFrom from "./LoginFrom"
//import Filterinput from './Filterinput'
import { connect } from 'react-redux'
import { createPost, receivePost , fetchPosts} from '../actions/post'


class GuestBookApp extends Component {
  state = {
    //posts: [],
    filterText: "",
    loading : false
  };

  handleOnCreatePost = ({ title, content }) => {
    // const _id = "" + Math.random();
    // const post = {
    //   _id,
    //   title,
    //   content
    // };

    this.props.onCreatePost(title,content)
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
    this.setState({
      loading: true
    })    
    this.props.fetchPosts()
  }

  render() {

    // const filteredPosts = this.state.posts.filter((post) => {
    //   return post.title.includes(this.state.filterText.toLocaleLowerCase());
    // });

    return (
      <React.Fragment>
        {/* <LoginFrom /> */}
        <h1>My GUEST BOOK</h1>
        <NewPostFrom onCreatePost={this.handleOnCreatePost} />
        <input
          value={this.state.filterText}
          onChange={this.handleFilterInputChange}
        />
        {/* {this.state.loading ? <h2>loading .....</h2> : null} */}
        <FilterablePostList 
          posts={this.props.posts} 
          filterText={this.state.filterText}
        />
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch) {
  return { 
    onCreatePost: (title,content) => {
      dispatch(createPost(title,content))
      //dispatch({type: 'CREATE_POST', ...post})
    },
    fetchPosts: () =>{
      dispatch(fetchPosts())
    }
    // onPostReceived: (posts) => {
    //   dispatch(receivePost(posts))
    // } 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GuestBookApp);
