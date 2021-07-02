import React, { Component } from 'react'
import PureChildFirst from './PureChildFirst'
import PureChildSecond from './PureChildSecond'
class PureParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
    }
    changeColor = () => {
        this.setState({ color: 'green' })
    }
    render() {
        console.log('Parend component is render...')
        return (
            < React.Fragment >
                <h1>This is parent component. color is {this.state.color}</h1>
                <PureChildFirst favcol={this.state.color} />
                <PureChildSecond favcol={this.state.color} />
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </React.Fragment >
        )
    }
}
export default PureParentComponent