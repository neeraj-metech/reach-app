import React, { Component } from 'react'
class FromRefInputChild extends Component {
    constructor(props) {
        super(props)
        this.parentRef = React.createRef(); // first method
    }
    inputFocus() {
        this.parentRef.current.focus();
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.parentRef} />
            </React.Fragment>
        )
    }
}

export default FromRefInputChild