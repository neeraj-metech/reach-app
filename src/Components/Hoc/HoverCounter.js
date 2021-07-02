import React, { Component } from 'react'
import WithCounterComponent from './WithCounterComponent'
class HoverCounter extends Component {
    render() {
        const { count, incrementCount, name } = this.props
        return (
            <h1 onMouseOver={incrementCount}>{name}, Hover {count} times </h1>
        )
    }
}

export default WithCounterComponent(HoverCounter, 2, 'thirdpara')