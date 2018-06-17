import React, { Component } from 'react';
import PostList from './PostList'
import NewPostFrom from './NewPostFrom'
import Filterinput from './Filterinput'

const mockPost = [{
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
},
]

class GuestBookApp extends Component {

  state = {
    posts: mockPost
  }

  render() {
    return (
    <React.Fragment>
    <h1>My GUEST BOOK</h1>
    <NewPostFrom />
    <Filterinput />
    <PostList posts={this.state.posts}/>   

    
    </React.Fragment>
    )
  }
}

export default GuestBookApp;
