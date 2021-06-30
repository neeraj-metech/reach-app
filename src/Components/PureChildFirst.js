import React, { Component } from 'react'
class PureChildFirst extends Component {
    render() {
        console.log('PureChild First is render...')
        return (
            <h2>This is Pure child first with compnent method...color is {this.props.favcol}</h2>
        )
    }
}
export default PureChildFirst