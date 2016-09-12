export const SWITCH_STATE_HISTORY = "SWITCH_STATE_HISTORY"
export const PUSH_STATE_HISTORY = "PUSH_STATE_HISTORY"
export const REMOVE_STATE_HISTORY = "REMOVE_STATE_HISTORY"
export const SET_STATES_HISTORY = "SET_STATES_HISTORY"

export function pushStateHistory( key, state ){
	return {
		type : PUSH_STATE_HISTORY,
		key,
		state
	}
}

export function removeStateHistory( key, state ){
	return {
		type : REMOVE_STATE_HISTORY,
		key,
		state
	}
}

export function setHistory( states ){
	return {
		type : SET_STATES_HISTORY,
		states
	}
}

export function switchStateHistory( state ){
	return {
		type : SWITCH_STATE_HISTORY,
		state
	}
}