import React from 'react'

function MultiplyDisplay (props) {
    return <h1>n * {props.multiplier} : {props.number * props.multiplier }</h1>
}

export default MultiplyDisplay