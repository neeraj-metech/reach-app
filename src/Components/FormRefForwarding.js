import React, { Component } from 'react'

const FormRefForwarding = React.forwardRef((props, ref) => {
    return (
        <React.Fragment >
            <input type="text" ref={ref} />
        </React.Fragment >
    )
}
)


export default FormRefForwarding