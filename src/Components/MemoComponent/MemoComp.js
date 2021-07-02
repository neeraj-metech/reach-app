import React, { Component } from 'react'
import MomoCompChild from './MemoCompChild'
class MemoComp extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'neeraj' }
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ name: 'preety' })
        // }, 3000)
        setInterval(() => {
            this.setState({ name: 'preety' })
        }, 3000)
    }
    render() {
        console.log('Rendering memo first.......')
        return (
            <React.Fragment>
                <h2>Hi, This is {this.state.name}</h2>
                <MomoCompChild name={this.state.name} />
            </React.Fragment>
        )
    }
}
export default MemoComp