import GoodsReducer from '../components/goods/reducer'
import HomeReducer from '../components/home/reducer'
import {combineReducers} from 'redux'
var reduer = combineReducers({
    home : HomeReducer,
    goods : GoodsReducer
})

export default reduer