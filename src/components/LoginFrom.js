import React, { Component } from 'react';
import { ButtonToolbar,Button,FormControl,FormGroup,FieldGroup,ControlLabel } from 'react-bootstrap';
import { connect }  from 'react-redux'
import { loginSuccess,logout } from '../actions/auth'
import { withRouter } from 'react-router'


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
            return (
                <div>
                    <p>Logged in</p>
                    <ButtonToolbar>
                        <Button bsStyle="danger" bsSize="large" onClick={this.props.onLogout} >Logout</Button>
                    </ButtonToolbar>
                </div>
            ) 
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

function mapStateToProps(state) {//,ownProps โยน props จากแม่ไปให้ลูกได้โดยไม่หายกลางทาง แก้ปัญหาการอม props
    return {
        //...ownProps,
        isLoggedIn:  state.auth.token != null //standard
        //isLoggedIn: typeof state.auth.token !== 'undefined'  //string type of   
        //change to array check
        //isLoggedIn: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch ,ownProps) {
    console.log(ownProps)
    return {
        onLoginSuccess: (token) =>{
            dispatch(loginSuccess(token))
            ownProps.history.replace('/')
        },
        onLogout: () => {
            dispatch(logout())
        }
    }
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginFrom))