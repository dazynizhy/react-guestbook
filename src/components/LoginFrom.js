import React, { Component } from 'react';
import { ButtonToolbar,Button,FormControl,FormGroup,FieldGroup,ControlLabel } from 'react-bootstrap';
import { connect }  from 'react-redux'
import { loginSuccess } from '../actions/auth'


class LoginFrom extends Component {
    state ={
        username: '',
        password: ''
    }

    onUsernameInputChange = (e) =>{
        //console.log(e.target.value)
        this.setState({
          username: e.target.value
        })
    }

    onPasswordInputChange = (e) =>{
        //console.log(e.target.value)
        this.setState({
          password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3000/login', {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body : JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((res) =>{
            return res.json()
        }).then(json => {
            //console.log(json)
            this.props.onLoginSuccess(json.token)
        }).catch(e =>{
            console.error(e)
        })

        // this.setState({
        //     inputValue: '',
        //     textAreaValue: ''
        // })
    }

    render (){
        if(this.props.isLoggedIn){
            return <p>Logged in</p>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="formBasicText"
                    validationState=""
                >
                    <ControlLabel>username</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        placeholder="username"
                        onChange={this.onUsernameInputChange}
                    />
                    <ControlLabel>password</ControlLabel>
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="password"
                        onChange={this.onPasswordInputChange}
                    />
                </FormGroup>
                    {/* <input 
                        type="text" 
                        placeholder="username"
                        value={this.state.username}           
                        onChange={this.onUsernameInputChange} 
                    /> 
                    <input 
                        type="password"  
                        value={this.state.password}           
                        onChange={this.onPasswordInputChange}
                    /> */}
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="large" type="submit">Login</Button>
                    </ButtonToolbar>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn:  state.auth.token != null //standard
        //isLoggedIn: typeof state.auth.token !== 'undefined'  //string type of   
        //change to array check
        //isLoggedIn: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginSuccess: (token) =>{
            dispatch(loginSuccess(token))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginFrom)