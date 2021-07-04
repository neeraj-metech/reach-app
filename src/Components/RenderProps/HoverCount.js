import React, { Component } from 'react'
class HoverCount extends Component {

    render() {
        const { count, incrementCount, test } = this.props
        return (
            <h1 onMouseOver={incrementCount}>Hover {count} tiems. {test}</h1>
        )
    }
}

export default HoverCount