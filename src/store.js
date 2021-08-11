import {createStore, combineReducers} from 'redux'
import profileReducer from './reducers/profileReducres'
import counterReducer from './reducers/counterReducers'

const store = createStore(combineReducers({
    counter: counterReducer,
    profile: profileReducer
}))

export default store