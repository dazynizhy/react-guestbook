import React from 'react'
import Link from 'next/link'
import GuestBookApollo from '../components/GuestBookApollo'

class Index extends React.Component {

    static getInitialProps() {
        return {
            name : 'nook'
        }
    }
    
    render() {
        return (
            <GuestBookApollo />
        )
    }
}

export default Index