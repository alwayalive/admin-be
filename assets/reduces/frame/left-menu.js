import { combineReducers } from 'redux'
import { OPEN_MENU, CLOSE_MENU, CLICK_MENU, LOAD_LEFT_MENU, HOVER_MENU } from 'actions/frame/left-menu.js'

function selectedIndex( state = [] , action ){
	if( action.type === CLICK_MENU )
		return action.selected;
	return state;
}

function leftMenuList( state = {} , action ){
	if( action.type === LOAD_LEFT_MENU )
		return action.menuList;
	return state;
}

function status( state = 1 , action ){
	switch( action.type ){
		case OPEN_MENU : 
			return 1;
		case CLOSE_MENU : 
			return 0;
		default:
			return state;
	}
}
function hover( state = [] , action ){
	if( action.type === HOVER_MENU )
		return action.coord;
	return state;

}
export default combineReducers({
	selectedIndex,
	leftMenuList,
	status,
	hover
});