import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, incrementBy: this.props.increBy ? this.props.increBy : 1 }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + this.state.incrementBy }
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount, 'test string')}
            </div>
        )
    }
}

export default Counter