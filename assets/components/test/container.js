import React from "react"
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

export default React.createClass({
	render(){
		return <ReactCSSTransitionGroup
				component = "div"
				className = "container"
				transitionName = "example"
				transitionAppearTimeout = { 500 }
				transitionEnterTimeout = { 500 }
				transitionLeaveTimeout = { 500 }
				>
					{ React.cloneElement( this.props.children, { key:this.props.location.pathname } ) }
				</ReactCSSTransitionGroup>
	}
})