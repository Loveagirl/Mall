import {
combineReducers
} from 'redux-immutable'
import {reducer as LoginReducer} from '../Pages/Login/Store'
export default combineReducers({
   login:LoginReducer
})