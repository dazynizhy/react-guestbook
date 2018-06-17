import React from 'react'


class Lifecycle extends React.Component {

    constructor(props){
        super(props)
        this.state = { a:   1 }
        console.log('constuctor')
    }

    //call ทุกครั้ง
    static getDerivedStateFromProps(props,state) {
        console.log('getDerivedStateFromProps' , props ,state)
        return {
            ...state,
            ...props
        }
    }

    //use
    componentDidMount() {
        console.log('componentdidmont')
        //snapshot render
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('-nextProps',nextProps)
        console.log('-nextState',nextState)
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return "mySnapshot"
    }

    //use
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        console.log('-prevProps',prevProps)
        console.log('-prevState',prevState) 
        console.log('-snapshot',snapshot) 
        
    }

    render() {
        console.log('render' , this.props , this.state)
        return <h1>Life cycle</h1>
    }
}

export default Lifecycle