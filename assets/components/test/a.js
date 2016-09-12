import React from "react"
import { browserHistory } from 'react-router'

export default React.createClass({
	clickHandle( e ){
		console.info(e)
		browserHistory.push("/b");
	},
	render(){
		return <div className="div1" onClick = { e => this.clickHandle(e) }>A</div>
	}
})