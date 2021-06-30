import React,{Component} from 'react'

class ClickEventClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            backgroundColor: 'lightblue'
        }
    }

    changeColor = () => {
        this.setState({ color: 'yellow', backgroundColor: 'green' });
    }
    render() {
        return (
            <div
                className='container'
                style={
                    {
                        color: this.state.color,
                        backgroundColor: this.state.backgroundColor,
                        padding: '20px',
                        textAlign: 'center'
                    }
                }
            >
                <h1>It is Click event page {this.state.color} </h1>
                {/* <button type="button" onClick={() => changeColor}>Change Color</button> */}
                {/* <button type="button" onClick={this.changeColor.bind(this)}>Change Color</button> */}
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div >
        );
    }
}

export default ClickEventClass