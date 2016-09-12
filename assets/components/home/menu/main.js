import React from "react";
import { fromJS, is } from "immutable";
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { clickMenu, hoverMenu } from 'actions/frame/left-menu.js'
import Tree from './tree.js'

export default connect( state =>({
    status : state.store.frame.leftMenu.status,
    leftMenuList : state.store.frame.leftMenu.leftMenuList,
    selectedIndex : state.store.frame.leftMenu.selectedIndex,
}))(React.createClass({
    shouldComponentUpdate(nextProps,nextState){
        return !is( nextProps , this.props )
    },
	render(){
        let { leftMenuList, selectedIndex } = this.props; 
        return <Tree breadcrumb = { this.props.projectName } list = { leftMenuList } deepLevel = { 0 } show = { true } />
    }
}));

function switchExsitTab( selectedIndex, exsitIndex ){
    return dispatch => new Promise( (resolve,reject) => {
                dispatch(clickMenu( selectedIndex ));
                resolve();
            } )
            .then(() => dispatch( switchTab( exsitIndex ) ));
}

function switchNewTab( selectedIndex, tab, exsitIndex ){
    return dispatch => new Promise( (resolve,reject) =>{
        dispatch(clickMenu( selectedIndex ));
        resolve();
    })
    .then( () => dispatch( addTab( tab ) ) )
    .then( () => dispatch( switchTab( exsitIndex ) ) )
}