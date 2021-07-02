import React, { Component } from 'react'
import WithCounterComponent from './WithCounterComponent'
class ClickCounter extends Component {
    render() {
        const { count, incrementCount, thirdPara } = this.props
        return (
            <button type="button" onClick={incrementCount}>Hi,{this.props.name} is exceped {thirdPara} Cliked {count} times </button>
        )
    }
}

export default WithCounterComponent(ClickCounter, 5, 'thirdpara1111')