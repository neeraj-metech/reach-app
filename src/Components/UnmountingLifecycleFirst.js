import React, { Component } from 'react'
import UnmountingLifecycleChild from './UnmountingLifecycleChild'
class UnmountingLifecycleFirst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showChild: true
        }
        console.log('Calling constructor........')
    }

    showHideChild = () => {
        console.log('Calling showHideChild........')
        this.setState({ showChild: !this.state.showChild })
    }

    render() {
        console.log('Calling render........')
        let child
        if (this.state.showChild) {
            child = <UnmountingLifecycleChild />
        }
        return (
            <React.Fragment>
                {child}
                <h2>This is parent component.</h2>
                <button type='button' onClick={this.showHideChild}>Click Me</button>
            </React.Fragment>
        )
    }

}
export default UnmountingLifecycleFirst