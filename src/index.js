import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

///////  REDUX ///////////////////
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

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




