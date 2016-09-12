import { combineReducers } from 'redux'
import frame from './frame/reduces.js'
import product from './product/reduces.js'

export default combineReducers({
	frame,
	product
})