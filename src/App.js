import React, { Component } from 'react';
import GuestBookApp from './components/GuestBookApp'
import styled ,{ injectGlobal } from 'styled-components'
//import './App.css';
import {BrowserRouter , Route, Switch,Link  } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'

injectGlobal`
body {
  background: blue;
}
`

const Container = styled.div`
  width: 640px;
  margin: 0 auto;
  background : ${(props) => props.background}
`
Container.defaultProps = {
  background: 'white'
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="App" >        
          {/* <GuestBookApp /> */}
        <div>
          <Link to="/">Home</Link>/
          <Link to="/login">Login</Link> 
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}



export default App;
