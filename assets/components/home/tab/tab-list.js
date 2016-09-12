import React from "react"
import { fromJS , is } from "immutable"
import { Link, browserHistory } from "react-router"
import { connect } from 'react-redux'
import { switchTab, removeTab } from 'actions/frame/tab.js'

export default connect( state => ({
	selected : state.frame.tab.selected,
	indexTab : state.frame.tab.indexTab,
	tabList : state.frame.tab.tabList,
}))(React.createClass({
	componentWillMount(){	//刷新页面的时候记录
		
	},
	shouldComponentUpdate( nextProps, nextState ){
		return !is( fromJS( this.props ) , fromJS( nextProps ) ) || !is( fromJS( this.state ) , fromJS( nextState ) );
	},
	clickHandleLink( k, e ){
		// e.preventDefault();
		let { dispatch } = this.props;
		dispatch(switchTab( k ));
		// this.setState( { selected : k } );
	},
	closeTabHandle( k ){
		let { dispatch, tabList, selected } = this.props;
		k === selected ? dispatch( removeAndSwitchTab( k ) ).then( ()=> browserHistory.push( tabList[ k -1 ].href ) ) : dispatch( removeTab( k ) );

	},
	render(){
		let { indexTab , tabList, selected } = this.props,
			className;
		
		return (
			<ul ref = "ul" className = "clear" >
				{
					tabList.map( ( v , k ) => {
						className = "";
						if( k === indexTab )
							className = "tab-index"
						if( k === selected )
							className += " selected"
						return ( <li key = { k } className = { className } ><Link to = { v.href } onClick = { () => this.clickHandleLink( k ) } >{ v.title }</Link><div className = "tab-closer" onClick={ () => this.closeTabHandle( k ) } ></div></li> )
					})
				}
			</ul>
		)
	}
}));

function removeAndSwitchTab( k ){
	return dispatch => new Promise((resolve,reject) => {
		dispatch( removeTab( k ) );
		resolve();
	}).then(() => dispatch( switchTab( k - 1  ) ))
}