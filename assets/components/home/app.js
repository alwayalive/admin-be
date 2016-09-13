import React from "react";
import Top from "./top";
import Main from "./main";
import { connect } from 'react-redux'
import { is } from 'immutable'
import { clickMenu } from 'actions/frame/left-menu.js'
import { initList } from 'actions/frame/breadcrumb.js'
// import { switchStateHistory, pushStateHistory, setHistory } from 'actions/action.js'

const projectName = "ICPM"

export default connect( state => ({
	// state : state.store,
	// stateHistory : state.history,
	leftMenuList : state.store.frame.leftMenu.leftMenuList
}))(React.createClass({
	shouldComponentUpdate( nextProps, nextState ){
		if( !is( this.props.location.pathname, nextProps.location.pathname ) )
			return true;
		return false;
	},
	componentDidUpdate(){
		/* 使用redux存储历史记录*/
		// let { location, state, dispatch,stateHistory  } = this.props;
		// if( !stateHistory[location.key] )
		// 	dispatch( pushStateHistory( location.key, state ) );
		// else{
		// 	dispatch( switchStateHistory( stateHistory[location.key] ) )
		// }


		// 使用localStorage存储历史记录
		// let { location, state, dispatch} = this.props,
		// 	stateStr = window.localStorage.getItem( location.key );

		// if( !stateStr ){
		// 	window.localStorage.setItem( location.key , JSON.stringify( state ) );
		// }
		// else{
		// 	dispatch( switchStateHistory( JSON.parse(stateStr) ) )
		// }
		let { dispatch, leftMenuList } = this.props,
			coord,breadcrumbArr = [ projectName ];
            
        if( location.pathname === "/" ){
            breadcrumbArr.push("Home");
            dispatch( initList( breadcrumbArr ) );
        }else if( location.pathname === "/404"){
            breadcrumbArr.push("404 not found");
            dispatch( initList( breadcrumbArr ) );
        }
        else if( coord = findCoord( leftMenuList , location.pathname) ){
            let menu = leftMenuList;
            for( let i = 0 ; i < coord.length; i++ ){
                menu = menu[ coord[ i ] ] || menu.children[ coord[ i ] ];
                breadcrumbArr.push( menu.title );
            }
            dispatch( clickMenu( coord ) );
            dispatch( initList( breadcrumbArr ) );
        }
	},
	componentDidMount(){
		/* 使用redux存储历史记录*/
		// let { location, state, dispatch,stateHistory  } = this.props;
		// if( !stateHistory[location.key] )
		// 	dispatch( pushStateHistory( location.key, state ) );
		// else{
		// 	dispatch( switchStateHistory( stateHistory[location.key] ) )
		// }

		
		// 使用localStorage存储历史记录
		// let { location, state, dispatch} = this.props,
		// 	stateStr = window.localStorage.getItem( location.key );

		// if( !stateStr ){
		// 	window.localStorage.setItem( location.key , JSON.stringify( state ) );
		// }
		// else{
		// 	dispatch( switchStateHistory( JSON.parse(stateStr) ) )
		// }
	},
	render(){
		return (
			<div>
				<Top/>
				<Main projectName={ projectName } {...this.props}/>
			</div>
		);
	}
}));

// 从导航菜单列表中查找对应url路径的coord
function findCoord( list, href ){
    for( let i = 0 ; i < list.length ; i++ ){
        if( list[ i ].href == href ){
            return list[ i ].coord;
        }
        else if( list[ i ].children )
            return findCoord( list[ i ].children, href );
    }
}