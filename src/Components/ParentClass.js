
import React from 'react'
import Childfunction from './Childfunction'

class ParentClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            parent: 'parent',
            clickCounts: 0
        }
    }

    clickHandler = (clickby) => {
        alert(`It is a ${this.state.parent} from ${clickby}.`);
        this.setState(
            {
                clickCounts:this.state.clickCounts+1
            },
            ()=>{
                console.log(this.state.clickCounts)
            }
            )
    }
    render() {
        return (
            <div
                className='container'
                style={
                    {
                        padding: '20px',
                        textAlign: 'center'
                    }
                }
            >
                <h1>Show alert message.  click = {this.state.clickCounts}</h1>
                <Childfunction funName={this.clickHandler} />
            </div >
        );
    }
}

export default ParentClass