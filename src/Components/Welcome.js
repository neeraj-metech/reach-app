import React from 'react'

// function Welcome() {
//     return <h1>It is welcome component</h1>
// }

// const Welcome = (props) => <h1>It is welcome component from aero function! {props.carinfo.model}</h1>
const Welcome = (props) => {
    // const { name, model } = props.carinfo;
    // return <h1>It is welcome component from aero function! {model}</h1>
    return <h1>It is welcome component from aero function! {props.carinfo.model}</h1>
}

export default Welcome