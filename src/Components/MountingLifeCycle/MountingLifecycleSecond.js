import React, { Component } from 'react';

class MountingLifecycleSecond extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'Red'
        }
        console.log('Calling constructor...')
    }
    componentDidMount() {
        console.log('Calling componentDidMount.....')
        setTimeout(() => {
            this.setState({ color: 'Blue' })
        }, 1000)
    }

    render() {
        return <h2>My favorite color is {this.state.color}</h2>
    }
}
export default MountingLifecycleSecond
