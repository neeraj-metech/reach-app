import React, { Component } from 'react'
class UpdatingLifecycleFirst extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
        console.log('Calling constructon....')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Calling getDerivedStateFromProps....')
        return { color: state.color }
    }
    colorChange = () => {
        console.log('Calling colorChange....')
        this.setState({ color: 'blue' })
    }
    render() {
        console.log('Calling render....')
        return (
            <React.Fragment>
                <h2>My favorite color is {this.state.color}</h2>
                <button type="button" onClick={this.colorChange}>Click Me</button>
            </React.Fragment>
        )
    }
}

export default UpdatingLifecycleFirst