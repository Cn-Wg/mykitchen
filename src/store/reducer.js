
import HomeReducer from '../components/home/reducer'
import {combineReducers} from 'redux'
var reduer = combineReducers({
    home : HomeReducer
})

export default reduer