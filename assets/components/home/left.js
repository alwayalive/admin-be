import React from "react";
import Menu from './menu/main';
import { connect } from 'react-redux';
import { openMenu, closeMenu, loadLeftMenu, clickMenu } from 'actions/frame/left-menu.js'
import { initList } from 'actions/frame/breadcrumb.js'

export default connect( state => ({
    status : state.store.frame.leftMenu.status,
}))(React.createClass({
    clickHandleArrow(){
        let { dispatch ,status } = this.props;
        if( status ){
            dispatch( closeMenu() );
        }else{
            dispatch( openMenu() );
        }
    },
    componentDidMount(){
        let { dispatch, projectName } = this.props;
        fetch(`/menus/getMenusList`)
        .then(response => response.json() )
        .then(json =>{
            grading( json )
            console.info(json)
            dispatch( loadLeftMenu( json ) );
            return json;
        })
        .then( json =>{
            let coord,
                breadcrumbArr = [ projectName ];

            if( location.pathname === "/" ){
                breadcrumbArr.push("Home");
                dispatch( initList( breadcrumbArr ) );
            }else if( location.pathname === "/404"){
                breadcrumbArr.push("404 not found");
                dispatch( initList( breadcrumbArr ) );
            }
            else if( coord = findCoord( json , location.pathname) ){
                let menu = json;
                for( let i = 0 ; i < coord.length; i++ ){
                    menu = menu[ coord[ i ] ] || menu.children[ coord[ i ] ];
                    breadcrumbArr.push( menu.title );
                }
                dispatch( clickMenu( coord ) );
                dispatch( initList( breadcrumbArr ) );
            }
        });
    },
	render(){
		return (
			<div id = "left">
                <div id = "left-nav-title">
                    <i className = "little-logo"></i>
                    <span className = "logo-title">{ this.props.projectName }</span>
                    <a id = "left-top-l-arrow" onClick = { this.clickHandleArrow } className = "left_arrow" href = "javascript:void(0)" ></a>
                </div>
                <div id = "nav-list">
                    <Menu projectName={ this.props.projectName } ref = "menu" />
                </div>
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
// 给菜单列表标出对应
function grading( list, coord ){
    list.map( ( v , k ) => {
        // debugger;
        v.coord = (coord||[]).slice(0);
        v.coord.push(k);
        if( v.children )
            grading( v.children, v.coord );
    });
}

//静态数据
function getNavList(){
    return [{
        title : "基础管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            title:"基础信息",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            children : [
                {
                    title : "组织机构",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : "/product"
                },
                {
                    title : "知识库",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : "/"
                },
            ]
        },{
            title:"物业信息",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            children : [
                {
                    title : "小区信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "楼栋信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "楼座信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "房间信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "商铺信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "车位信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                }
            ]
        },{
            title:"相关方信息",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            children : [
                {
                    title : "开发商",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "工程机构",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "政务机构",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "供应机构",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "维保机构",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "相关方合同",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                }
            ]
        },{
            title:"业委会信息",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            children : [
                {
                    title : "业委会信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
                {
                    title : "业委会成员信息",
                    icon : "Ticon_42.png",
                    hicon : "HTicon_42.png",
                    href : ""
                },
            ]
        }]
    },{
        title : "业主（客户）管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"业主管理"
        },{
            title:"客户管理",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        }]
    },{
        title : "工程管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            title:"仪表设备",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        },{
            title:"抄表",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        },{
            title:"抄表流水",
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
        }]
    },{
        title : "收费管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : [{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"收费设备管理"
        },{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"前台收银"
        },{
            icon : "Sicon13.png",
            hicon : "HSicon13.png",
            title:"账单流水"
        }]
    },{
        title : "移动端管理",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : []
    },{
        title : "系统维护",
        icon : "Ficon2.png",
        hicon : "Ficon1.png",
        children : []
    }]
}