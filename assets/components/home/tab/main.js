import React from "react"
import $ from "jquery"
import { fromJS , is } from "immutable"
import TabList from "./tab-list"
import { connect } from 'react-redux'
import { dispayArrows } from 'actions/frame/tab.js'

export default connect( state => ({
	tabList : state.frame.tab.tabList,
	indexTab : state.frame.tab.indexTab,
	direction : state.frame.tab.direction,
}))(React.createClass({
	clickHandleLeftArrow( e ){	//ul标签栏向右偏移
		let tab = this.refs.tab,
			ul = this.refs.tabList.refs.ul,
			sLeft = parseInt( getStyle( ul , "left" ) ) + 500,
			{ dispatch } = this.props;
		if( sLeft >= 0 ){	//偏移量见底是更新箭头状态
			sLeft = 0;
			dispatch(dispayArrows(2));
			$( ul ).animate( { "left" : sLeft });
			return;
		}
		if( this.state.arrows !== 3 )
			dispatch(dispayArrows(3));
		$( ul ).animate( { "left" : sLeft });
	},
	clickHandleRightArrow( e ){	//ul标签栏向左偏移
		let tab = this.refs.tab,	//tab节点固定长度100%
			ul = this.refs.tabList.refs.ul,	//ul无限长度9999
			sLeft = parseInt( getStyle( ul , "left" ) ) - 500,	//获取ul的left定位置,并向左偏移500个像素
			tabWidth = tab.clientWidth,	//tab的真实像素
			width = getNodesTotalWidth( ul ),	//ul的真实长度
			{ dispatch } = this.props;

		if( ( width + sLeft ) <= tabWidth ){	//偏移见底，更新箭头状态
			sLeft =  tabWidth - width;
			$( ul ).animate( { "left" : sLeft } );
			if( this.state.arrows !== 1 )
				dispatch(dispayArrows(1));
				// this.setState( fromJS( this.state ).update( "arrows" , () => 1 ).toJS() );
			return;
		}
		if( this.state.arrows !== 3 )
			dispatch(dispayArrows(3));
			// this.setState( fromJS( this.state ).update( "arrows" , () => 3 ).toJS() );
		$( ul ).animate( { "left" : sLeft });
	},
	shouldComponentUpdate( nextProps, nextState){
		return !is( fromJS( this.props ) , fromJS( nextProps ) ) || !is( fromJS( this.state ) , fromJS( nextState ) );
	},
	componentDidUpdate(){
		console.info(111)
	},
	render(){
		let leftDisplay = {
				display : "none"
			},
			rightDisplay = {
				display : "none"
			},
			{ direction } = this.props;
		switch( direction ){
			case 1:
				leftDisplay.display = "block";
				break;
			case 2:
				rightDisplay.display = "block";
				break;
			case 3:
				leftDisplay.display = "block";
				rightDisplay.display = "block";
				break;
		}
		return (
			<div id = "tab" ref = "tab" >
				<div ref = "leftArrow" style = { leftDisplay } className = "tab-left-arrow" onClick = { this.clickHandleLeftArrow }></div>
				<TabList ref = "tabList" />
				<div ref = "rightArrow" style = { rightDisplay } className = "tab-right-arrow"  onClick = { this.clickHandleRightArrow }></div>
			</div>
		)
	}
}));

//获取样式值
//node 节点元素
//style 样式
function getStyle( node , style ){
	return ( window.getComputedStyle( node ) || node.currentStyle )[ style ];
}

function getNodesTotalWidth( node ){
	let width = 0;
	$( node ).children().outerWidth( ( i , w ) => {
		width += w;
	} , true )
	return width;
}