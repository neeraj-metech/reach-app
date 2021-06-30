import React, { Component } from 'react'

class UpdatingLifecycleFirst extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
        console.log('calling constructor........')
    }
    changeColor = col => {
        console.log('calling changeColor........')
        this.setState({ color: col })
    }
    shouldComponentUpdate() {
        console.log('calling shouldComponentUpdate........')
        return false
    }
    render() {
        console.log('calling render........')
        return (
            <React.Fragment>
                <h2>My favorite colro is {this.state.color}</h2>
                <button type='button' onClick={() => this.changeColor('green')}>Click Me</button>
            </React.Fragment>
        )
    }
}
export default UpdatingLifecycleFirst