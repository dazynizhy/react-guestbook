import createApolloClient from './createApolloClient'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import Cookies from 'universal-cookie'
import createReduxStore from './createReduxStore'

export default (App) => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'


    static async getInitialProps ({Component, router, ctx}) {
     // const {Component, router, ctx}= ctx
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps({Component, router, ctx})
      }
      //create redux store
      //universal cookie use diffrent between browser / server
      //1. Get Token from cookie
      const cookie = new Cookies(ctx.req ? ctx.req.headers.cookie: undefined)
      const token = cookie.get('token')

      //2. initialState for redux store
      const initialState = {auth: {token}}
      const store = createReduxStore(initialState)

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      //3. create apollo store
      const apollo = createApolloClient(store)
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
              reduxStore={store}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()
      const reduxState = store.getState()

      return {
        ...appProps,
        apolloState,
        reduxState
      }
    }

    constructor (props) {
      super(props)
      this.reduxStore = createReduxStore(props.reduxState)
      this.apolloClient = createApolloClient(this.reduxStore, props.apolloState)
    }

    render () {
      return <App {...this.props} apolloClient={this.apolloClient} reduxStore={this.reduxStore} />
    }

  }
}
