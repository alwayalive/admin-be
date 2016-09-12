import React from 'react'
import 'styles/fieldset.less'

export default React.createClass({
	render(){
		let { title } = this.props;
		return <fieldset className="custom-fieldset">
					<legend>{ title }</legend>
					{ this.props.children }
				</fieldset>
	}
})
