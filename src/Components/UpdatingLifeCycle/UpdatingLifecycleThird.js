import React, { Component } from 'react'
class UpdatingLifecycleThird extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'red' }
        console.log('Calling constructor........')
    }
    componentDidMount() {
        console.log('Calling componentDidMount........')
        setTimeout(() => {
            this.setState({ color: 'green' })
        }, 3000)
    }
    getSnapshotBeforeUpdate(pevProps, pevState) {
        console.log('Calling getSnapshotBeforeUpdate........')
        return document.getElementById('div1').innerHTML = "Previous favorite color was " + pevState.color
    }
    componentDidUpdate() {
        console.log('Calling componentDidUpdate........')
        document.getElementById('div2').innerHTML = "New favorite color is " + this.state.color
    }
    render() {
        console.log('Calling render........')
        return (
            <React.Fragment>
                <h2>My favorite color is {this.state.color}</h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </React.Fragment>
        )
    }
}
export default UpdatingLifecycleThird