import React from 'react';
import ReactDOM from 'react-dom'
import Cookies from 'universal-cookie'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

///////  REDUX ///////////////////

import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'
import createApolloClient from './libs/createApolloClient'
import createReduxStore from './libs/createReduxStore'

//console.log(client)

const cookies = new Cookies()
const token = cookies.get('token') 

const initialState  =  {auth : { token }}
const store = createReduxStore(initialState)

// const store = createStore(
//     reducer,
//     {auth : { token }},
//     compose(
//         applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// )

const client = createApolloClient(store)

// store.subscribe(() => {
//     console.log(store.getState())
// })
// store.dispatch({
//     type: 'INCEREASE_COUNTER'
// })
// store.dispatch({
//     type: 'CREATE_POST',
//     title: "ddd",
//     content: "test"
// })

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>, document.getElementById('root'));
// registerServiceWorker();




