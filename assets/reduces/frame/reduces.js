import { combineReducers } from 'redux'
// import tab from './tab.js'
import leftMenu from './left-menu.js'
import main from './main.js'
import breadcrumb from './breadcrumb.js'

export default combineReducers({
	// tab,
	breadcrumb,
	leftMenu,
	main,
})