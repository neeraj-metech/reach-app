import React, { Component } from 'react'
import FromRefInputChild from './FromRefInputChild'
import FormRefForwarding from './FormRefForwarding'

class FromRefInputParent extends Component {
    constructor(props) {
        super(props)
        this.childRef = React.createRef(); // first method
    }
    clickHendler = () => {
        this.childRef.current.inputFocus();
    }
    clickHendlerForFrowardRef = () => {
        this.childRef.current.focus();
        // console.log(this.childRef)
    }
    render() {
        return (
            <React.Fragment>
                <FormRefForwarding ref={this.childRef} />
                <button type="button" onClick={this.clickHendlerForFrowardRef}>Click Me</button>
                {/* <FromRefInputChild ref={this.childRef} /> */}
                {/* <button type="button" onClick={this.clickHendler}>Click Me</button> */}
            </React.Fragment>
        )
    }
}

export default FromRefInputParent