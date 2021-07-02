import React, { PureComponent } from 'react'
class PureChildSecond extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { color: props.favcol }
    }
    render() {
        console.log('PureChild Second is render...')
        return (
            <h2>This is Pure child Second with PureCompnent method...Color is {this.props.favcol}</h2>
        )
    }
}
export default PureChildSecond