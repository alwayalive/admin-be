import { combineReducers } from 'redux'
import { SWITCH_STATE_HISTORY, PUSH_STATE_HISTORY, REMOVE_STATE_HISTORY, SET_STATES_HISTORY } from 'actions/action.js'
import _store from './store.js'
import { fromJS } from 'immutable'

function history( state = {}, action ){
	let immutableObj;
	switch( action.type ){
		case PUSH_STATE_HISTORY:
			immutableObj = fromJS( state );
			return immutableObj.setIn( [ action.key ], action.state ).toJS();
		case REMOVE_STATE_HISTORY:
			immutableObj = fromJS( state );
			return immutableObj.deleteIn( [ action.key ] ).toJS();
		case SET_STATES_HISTORY:
			return action.states;
		default:
			return state;
	}
}

function store( state = {}, action ){
	switch( action.type ){
		case SWITCH_STATE_HISTORY:
			return action.state;
		default:
			return _store( state , action )
	}
}

export default combineReducers({
	history,
	store,
})