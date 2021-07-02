import React, { Component } from 'react'

const WithCounterComponent = (OriginalComponent, incremenedBy, thirdPara) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
            this.state = { count: 0 }
        }
        incrementCount = () => {
            this.setState(prevCount => {
                return { count: prevCount.count + incremenedBy }
            })
        }
        render() {
            return <OriginalComponent thirdPara={thirdPara} count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        }
    }
    return NewComponent
}
export default WithCounterComponent