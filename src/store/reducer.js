import GoodsReducer from '../components/goods/reducer'
import HomeReducer from '../components/home/reducer'
import ShopCarReducer from '../components/shopcar/reducer'
import ListReducer from '../components/list/reducer'
import {combineReducers} from 'redux'
var reduer = combineReducers({
    home : HomeReducer,
    goods : GoodsReducer,
    shopcar : ShopCarReducer,
    list : ListReducer
})

export default reduer