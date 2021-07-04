import React, { Component } from 'react'
class ClickCount extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <button type="button" onClick={incrementCount}>Clicked {count} tiems.</button>
        )
    }
}

export default ClickCount