import React, { Component } from 'react'
import ContextC from './ContextC'
import UserContext from './Context'


class ContextB extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>ContextB, Car name {this.context.name} and model is {this.context.model}</h1>
                <ContextC name="Props come from component B." />
            </div>
        )
    }
}
// function ContextB() {
//     return (
//         <div>
//             <h1>ContextB, Car name {this.context.name} and model is {this.context.model}</h1>
//             <ContextC name="Props come from component B." />
//         </div>
//     )
// }

ContextB.contextType = UserContext
export default ContextB