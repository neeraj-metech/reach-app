import React, { Component } from 'react'
class FromRef extends Component {
    constructor(props) {
        super(props)
        this.neerajRef = React.createRef(); // first method

        // second method
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element;
        }
        // second method
    }
    componentDidMount() {
        //first method
        // this.neerajRef.current.focus();
        // console.log(this.neerajRef)
        //Second method
        if (this.cbRef) {
            this.cbRef.focus();
        }
    }
    clickHendler = () => {
        this.neerajRef.current.focus();
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" ref={this.neerajRef} />
                {/* <input type="text" ref={this.setCbRef} /> */}
                <button type="button" onClick={this.clickHendler}>Click Me</button>
            </React.Fragment>
        )
    }
}

export default FromRef