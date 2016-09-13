import { combineReducers } from 'redux'
import { INITIAL_CONTENT_HEIGHT } from 'actions/frame/main.js'

function contentHeight(state = 0, action ){
	if( action.type === INITIAL_CONTENT_HEIGHT )
		state = action.height;
	return state;
}

export default combineReducers({
	contentHeight
});