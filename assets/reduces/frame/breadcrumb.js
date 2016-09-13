import { INIT_LIST_BREADCRUMB } from 'actions/frame/breadcrumb.js'
import { combineReducers } from 'redux'
	
function list( state = [] , action ){
	if( action.type === INIT_LIST_BREADCRUMB ){
		return action.list;
	}
	return state;
}

export default combineReducers({
	list
});