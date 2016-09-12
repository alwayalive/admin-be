import React from "react"
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export default connect( state => ({
	breakcrumbList : state.store.frame.breadcrumb.list
}))(React.createClass({
	render(){
		let styles = {
			lineHeight:"40px",
			height:"40px",
			background: "#cfced3",
			padding : "0 20px",
			color : "#fff"
		},
		{ breakcrumbList } = this.props;
		// 默认点击系统名称返回首页
		if( breakcrumbList.length > 0 && !breakcrumbList[0].href ){
			breakcrumbList[0] = {
				title : breakcrumbList[0],
				href : "/",
			}
		}
		return <div style={ styles }>
					<Breadcrumb>
					{
						breakcrumbList.map( (v,k) => {
							if( !!v.href )
								return <Breadcrumb.Item key = { k }><Link to = { v.href }>{ v.title }</Link></Breadcrumb.Item>
							else
								return <Breadcrumb.Item key = { k }>{ v }</Breadcrumb.Item>
						})
					}
					   {/* <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
					    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
					    <Breadcrumb.Item>An Application</Breadcrumb.Item>	*/}					
					</Breadcrumb>
				</div>
	}
}))