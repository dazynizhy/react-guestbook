import React from 'react'
import Link from 'next/link'

class Index extends React.Component {

    static getInitialProps() {
        return {
            name : 'nook'
        }
    }
    
    render() {
        return (
            <>
            <h1>Index { this.props.name }</h1>
            </>
        )
    }
}

export default Index