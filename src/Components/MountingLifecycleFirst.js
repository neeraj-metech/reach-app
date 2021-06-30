import React, { Component } from 'react';

class MountingLifecycleFirst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'Red'
        }
        console.log('Calling constructor...')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Calling getDerivedStateFormState...')
        return { color: props.favcol }
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
export default MountingLifecycleFirst
