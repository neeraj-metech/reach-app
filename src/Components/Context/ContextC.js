import React, { Component } from 'react'
import { UserConsumer } from './Context'
// const ContextC = (props) => {
//     return <h1>{props.name}</h1>
// }

// function ContextC(props) {
//     return <h1>{props.name}</h1>
// }

function ContextC(props) {
    return (
        <UserConsumer>
            {
                (carinfo) => {
                    return <div>
                        <h1>Car name {carinfo.name} and model is {carinfo.model}</h1>
                        <h1>{props.name}</h1>

                    </div>
                }
            }
        </UserConsumer>
    )
}
export default ContextC