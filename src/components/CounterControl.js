import React from 'react'

class CounterControl extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onReset}>Reset</button>
            </div>
        )
    }
}

export default CounterControl