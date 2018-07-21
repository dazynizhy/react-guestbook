import { createStore, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

function createReduxStore (initialState) {

    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    return store

}

export default createReduxStore