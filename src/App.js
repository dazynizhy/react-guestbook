import React, { Component } from 'react';
import GuestBookApp from './components/GuestBookApp'
import styled ,{ injectGlobal } from 'styled-components'
//import './App.css';

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
  background: 'yellow'
}


class App extends Component {
  render() {
    return (
      <Container className="App" background="red">        
        <GuestBookApp />
      </Container>
    );
  }
}



export default App;
