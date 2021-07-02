import React, { Component } from 'react'

class ErrorBoundryChild extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { hero } = this.props
        if (hero == 'jocker') {
            throw new Error('Not a hero')
        }
        return (
            <h1>{hero}</h1>
        )
    }
}


export default ErrorBoundryChild