import React from "react";
// import Tab from "./tab/main";
import { initContentHeight } from 'actions/frame/main.js'
import { is } from 'immutable'
import Breadcrumb from './breadcrumb/main.js'

export default React.createClass({
	shouldComponentUpdate( nextProps, nextState ){
		return true;
	},
	componentDidMount(){
		let { dispatch } = this.props,
			content = this.refs.content,
			contentHeight = this.refs.content.offsetHeight;
		dispatch( initContentHeight( contentHeight ) );
		// 监听浏览器大小变化，更新content的高度到state中。
		// 作用一、用于计算容器里面Table的table-body高度
		window.addEventListener("resize",function( e ){
			if( contentHeight == content.offsetHeight )
				return;
			dispatch( initContentHeight( content.offsetHeight ) );
		},false);
	},
	render(){
		return (
			<div id = "center">
				<Breadcrumb/>
				<div ref="content" id = "content">
					{ this.props.children }
				</div>
			</div>
		);
	}
})