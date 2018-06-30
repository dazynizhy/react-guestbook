import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

///////  REDUX ///////////////////
import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

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
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
// registerServiceWorker();




