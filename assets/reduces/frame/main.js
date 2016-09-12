import { combineReducers } from 'redux'
import { fromJS } from 'immutable'
import { INITIAL_CONTENT_HEIGHT, initContentHeight } from 'actions/frame/main.js'

function contentHeight(state = 0, action ){
	if( action.type === INITIAL_CONTENT_HEIGHT )
		state = action.height;
	return state;
}

export default combineReducers({
	contentHeight
});