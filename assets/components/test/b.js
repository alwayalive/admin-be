import React from "react"
import { browserHistory } from 'react-router'

export default React.createClass({
	clickHandle( e ){
		console.info(e)
		browserHistory.push("/");
	},
	render(){
		return <div className="div2" onClick = { e => this.clickHandle(e) }>B</div>
	}
})