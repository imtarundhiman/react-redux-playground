import {createStore, combineReducers} from 'redux'
import profileReducer from './reducers/profileReducres'
import counterReducer from './reducers/counterReducers'

const store = createStore(combineReducers({
    counter: counterReducer,
    profile: profileReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store