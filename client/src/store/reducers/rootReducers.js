import { combineReducers } from 'redux'
import authReducer from './authReducers'


const rootReducers = combineReducers({
   auth : authReducer
})


export default rootReducers