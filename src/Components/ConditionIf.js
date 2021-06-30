import React,{Component} from 'react'

class ConditionIf extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			status:true
		}
	}

	render(){




		// Short Circuit Operator
			// return this.state.status && <h1>Welcome Neeraj.</h1>

		//Ternary conditional operator
			// return this.state.status ? <h1>Welcome Neeraj.</h1> : <h1>Welcome Guest.</h1>


		// Element Variable
			// let msg
			// if (this.state.status) {
			// 	msg = <h1>Welcome Neeraj.</h1>
			// }else{
			// 	msg = <h1>Welcome Guest.</h1>
			// }
			// return msg

		// if/else condition
			if (this.state.status) {
				return <h1>Welcome Neeraj.</h1>
			}else{
				return <h1>Welcome Guest.</h1>
			}
	}
}

export default ConditionIf