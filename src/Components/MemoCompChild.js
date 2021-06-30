import React, { Component } from 'react'

function MemoCompChild({ name }) {
    console.log('Rendering memo second.......')
    return (
        <React.Fragment>
            <h2>Hi, {name}. This is memo component.</h2>
        </React.Fragment>
    )
}

export default React.memo(MemoCompChild)