import { combineReducers } from 'redux'
import {  list, SWITCH_TAB,DISPAY_ARROWS,ADD_TAB,REMOVE_TAB,DEFAULT_INDEX_TAB  } from 'actions/frame/tab.js'
import { fromJS } from 'immutable'


function selected(state = 0, action) {
    if( action.type === SWITCH_TAB )
        return action.selected;
    return state;
}

//arrowState = [ "none" , "left" , "right", "both"]
function direction(state = 0, action) {
    if( action.type === DISPAY_ARROWS )
        return actions.direction;
    return state;
}

function tabList(state = list, action) {
    let newArr;
    switch( action.type ){
        case ADD_TAB:
            newArr = fromJS( state ).toJS();
            newArr.push(action.tab);
            return newArr;
        case REMOVE_TAB: 
            newArr = fromJS( state ).toJS();
            newArr.splice( action.index , 1 );
            return newArr;
        default:
            return state;
    }
}

function indexTab(state = 0, action) {
    if( action.type === DEFAULT_INDEX_TAB )
        return action.defaultIndexTab;
    return state;
}

export default combineReducers({
    indexTab,
    direction,
    tabList,
    selected
});
