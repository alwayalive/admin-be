import React from "react";
import Left from "./left";
import Center from "./center";
import { connect } from 'react-redux'
import { openMenu } from 'actions/frame/left-menu.js'

export default connect( state=>({
	status : state.store.frame.leftMenu.status,
}))(React.createClass({
	render(){
		return (
			<div id="main" className = { this.props.status ? "open" : "close"}>
				<Left projectName = { this.props.projectName } />
				<Center { ...this.props } />
			</div>
		)
	}
}));