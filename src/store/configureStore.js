import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from '../reducers/studentReducer'
import usersReducer from '../reducers/usersReducer'





const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        students: studentReducer


    }), applyMiddleware(thunk))

    return store
}

export default configureStore