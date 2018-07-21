import App, {Container} from 'next/app'
import React from 'react'
import Link from 'next/link'
import withApollo from '../libs/withApollo'
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux'


class MyApp extends App {
//   static async getInitialProps ({ Component, router, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return {pageProps}
//   }

  render () {
    const {Component , pageProps, apolloClient  , reduxStore} = this.props
    return(
        <Provider store={reduxStore}> 
        <ApolloProvider client={apolloClient}>
            <Container>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>       
            <Component {...pageProps} />
            </Container>
        </ApolloProvider>
        </Provider>
    )
  }
}

export default withApollo(MyApp)