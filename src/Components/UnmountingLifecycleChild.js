import React, { Component } from 'react'
class UnmountingLifecycleChild extends Component {

    componentWillUnmount() {
        console.log('calling componentWillUnmount......')
    }
    render() {
        return (
            <React.Fragment>
                <h2>This is child component.</h2>
            </React.Fragment>
        )
    }

}
export default UnmountingLifecycleChild