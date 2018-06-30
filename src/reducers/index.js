
import { combineReducers } from 'redux'

function counterReducer(state = 0 , action) {
    switch(action.type) {
        case 'INCEREASE_COUNTER':
            return state + 1
        default:
            return state
    }
}

function postReducer( state = [] , action) {
    switch(action.type) {
        case 'CREATE_POST':
            return [...state, {title: action.title , content: action.content}]
        case 'RECEIVE_POST':
            return [...state, ...action.posts ]
            default:
            return state
    }
}

const reducer = combineReducers({
    counter: counterReducer,
    posts: postReducer
})

export default reducer