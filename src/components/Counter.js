import React from 'react'
import CounterControl from './CounterControl' 
import MultiplyDisplay from './MultiplyDisplay'
import PowerDisplay from './PowerDisplay'

import Lifecycle from './Lifecycle'

class Counter extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         counter: 100
    //     }
    //     this.onAdd = this.onAdd.bind(this)
    // }
    state = { counter: 100 ,power: 2 } //เหมือนด้านบน

    //arrow auto bind this
    onAddCounter  = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onMinusCounter  = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    onResetCounter  = () => {
        this.setState({ counter: 0 })
    }

    //power
    onAddPower  = () => {
        this.setState({ power: this.state.power + 1 })
    }

    onMinusPower  = () => {
        this.setState({ power: this.state.power - 1 })
    }

    onResetPower  = () => {
        this.setState({ power: 1 })
    }

    render() {
        return (
        <React.Fragment>
            <h1>Counter</h1>
            <h1>n:{this.state.counter}</h1>
            <MultiplyDisplay  number={this.state.counter} multiplier={this.state.power}/>
            <PowerDisplay 
            base={this.state.counter} 
            exponent={this.state.power} />
           
            <CounterControl 
            onAdd = {this.onAddCounter}
            onMinus = {this.onMinusCounter}
            onReset = {this.onResetCounter}
            />

            <CounterControl 
            onAdd = {this.onAddPower}
            onMinus = {this.onMinusPower}
            onReset = {this.onResetPower}
            />

            
            <Lifecycle number={this.state.counter} />
        </React.Fragment>
        )
    }
}

export default Counter