import React from "react";

class Hello extends React.Component {
    render() {
        // const { name, model } = this.props.carinfo;
        // return <h1>Hello, it is Component! {name} </h1>
        return <h1>Hello, it is Component! {this.props.carinfo.name} </h1>
    }
}

export default Hello