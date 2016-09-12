import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fromJS } from 'immutable'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import Tree from './tree.js'
import { clickMenu, hoverMenu } from 'actions/frame/left-menu.js'
import { initList } from 'actions/frame/breadcrumb.js'

const levelClassName = ["first","second","third"];

export default connect( state => ({
	selectedIndex : state.store.frame.leftMenu.selectedIndex,
	status : state.store.frame.leftMenu.status,
	hover : state.store.frame.leftMenu.hover,
}))(React.createClass({
	liClickHandle( coord, flag ){
  		let { selectedIndex, dispatch, status } = this.props;
  		if( status === 0 && coord.length === 0 ){
  			setTimeout(()=>dispatch( hoverMenu( coord ) ),100);
  			return;
  		}
  		if( !flag && selectedIndex.length > 0 && selectedIndex.join(',').indexOf( coord.join(',') ) === 0 ){
  			dispatch( clickMenu( coord.slice(0,-1) ) );
  		}
  		else
  			dispatch( clickMenu( coord ) );
  		
	},
	liMouseEnter( coord ){
		// let { dispatch } = this.props;
		// // dispatch( hoverMenu( coord ) );
		// setTimeout(()=>dispatch( hoverMenu( coord ) ),100);
	},
	liMouseLeave(){
		let { dispatch } = this.props;
		setTimeout(()=>{
			dispatch( hoverMenu( [] ) );
			// dispatch( clickMenu( [] ) );
		},100);
	},
	render(){
		let { list, deepLevel, selectedIndex, show, breadcrumb, status, hover } = this.props,
			classNamePrev = levelClassName[deepLevel],
			beforeIcon,
			hBeforeIcon,
			_show = false,
			lis,
			hoverClass,
			selectClass;
			if( !list || !list.length )
				return null;
			lis = list.map( (v,k) => {
				_show = selectedIndex[ deepLevel ] === k;
				beforeIcon = { backgroundImage : `url(/public/images/${ v.icon })` };	//正常图标
				hBeforeIcon = { backgroundImage : `url(/public/images/${ v.hicon })` };	//悬浮图标
				hoverClass = hover[ deepLevel ] === k ? `${ classNamePrev }-hover` : ``;	//悬浮类名
				selectClass = selectedIndex[ deepLevel ] === k ? `selected` : ``;	//选中类名

				if( _show || hoverClass || selectClass ){
					beforeIcon.display = "none";
					hBeforeIcon.display = "block";
				}else{
					beforeIcon.display = "block";
					hBeforeIcon.display = "none";
				}
				if( !!v.children && show ){
					return (
						<li key = { `___${ classNamePrev }_${ deepLevel }_${ k }` } onClick = { e => this.liClickHandle(v.coord, false) } className = { `${ classNamePrev } ${ selectClass } normal ${ hoverClass }` } >
			                <i style = { beforeIcon } className = "before" ></i>
			                <i style = { hBeforeIcon } className = "before h-before" ></i>
			                <a className = { `${ classNamePrev }-a` } href = "javascript:void(0)">
			                    <span className = { `${ classNamePrev }-span` }>{ v.title }</span>
			                </a>
			               <Tree breadcrumb = { breadcrumb } list = { v.children } deepLevel = { deepLevel + 1 } index = { k } show = { _show } />
			            </li>
					)
				}else if( show ){
					return (
						<li key = { `___${ classNamePrev }_${ deepLevel }_${ k }` } onClick = { e => this.liClickHandle( v.coord, true ) } className = { `${ classNamePrev } ${ selectClass } normal ${ hoverClass }` }>
			                <i style = { beforeIcon } className = "before" ></i>
			                <i style = { hBeforeIcon } className = "before h-before" ></i>
			                <Link className = { `${ classNamePrev }-a` } to = { v.href || "404" } >
			                	<span className = { `${ classNamePrev }-span` }>{ v.title }</span>
			                </Link>
			            </li>
					)
				}
			});
		if( status === 0 && deepLevel === 0 ){
	        return (
				<ReactCSSTransitionGroup onMouseLeave = { () => this.liMouseLeave() } component="ul" transitionName={ "slider-menu" } transitionLeaveTimeout={0} transitionEnterTimeout={500} className = { `${ classNamePrev }-ul` }>
	        		{ lis }
				</ReactCSSTransitionGroup>
	        )
			
		}else if( deepLevel !== 0 ){
			return (
				<ReactCSSTransitionGroup component="ul" transitionName={ "slider-menu" } transitionLeaveTimeout={0} transitionEnterTimeout={500} className = { `${ classNamePrev }-ul` }>
	        		{ lis }
				</ReactCSSTransitionGroup>
	        )
		}
		else{
			return (
				<ul className = { `${ classNamePrev }-ul` }>
					{ lis }
				</ul>
			)
		}
	}
}));
