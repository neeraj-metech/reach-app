import React, { Component } from 'react'
import ReactDOM from 'react-dom';

function PortalsRoot() {
    return ReactDOM.createPortal(
        <h1>Portal Example: render the html in protal-root div.</h1>, document.getElementById('portal-root')
    )
}

// class PortalsRoot extends Component {
//     render() {
//         return ReactDOM.createPortal(
//             <h1>Portal Example: render the html in protal-root div.</h1>, document.getElementById('portal-root')
//         )
//     }
// }

export default PortalsRoot