import React from "react";
import { is } from "immutable";
import { connect } from 'react-redux'
import Tree from './tree.js'

export default connect( state =>({
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