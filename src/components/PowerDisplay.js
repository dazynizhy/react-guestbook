import React from 'react'
import propTypes from 'prop-types'

function PowerDisplay ({ base , exponent}) {
    return (
    <h1>
        n^ {exponent} : { Math.pow(base , exponent) }
    </h1>
    )
}

PowerDisplay.propTypes = {
    base: propTypes.number.isRequired,
    exponent: propTypes.number.isRequired,
}

export default PowerDisplay