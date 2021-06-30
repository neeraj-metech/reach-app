import React from 'react'

function Stylesheet(props){
	const styleClass = props.styleName ? 'heading' : ''
	const Styles = {
		textAlign:'center',
		backgroundColor:'green',
		padding:'20px',
		color:'white'
	}
	return(
		<div>
			<div className={`${styleClass} text-color`}>
				<h1>Stylesheet extranal css</h1>
			</div>
			<div style={Styles}>
				<h1>Stylesheet internal/inline css</h1>
			</div>
		</div>
		)
}

export default Stylesheet
