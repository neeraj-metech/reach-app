import { render } from '@testing-library/react';
import React from 'react'

const ClickEventFunction = () => {
    var styleObj = {
        color: 'red',
        backgroundColor: 'green',
        padding: '20px',
        textAlign: 'center'
    };
    function changeColor(styleObj) {
        styleObj.backgroundColor = 'yellow';
        styleObj.color = 'green';
        console.log('clicked')
    }
    return (
        <div
            className='container change-color'
            style={
                styleObj
            }
        >
            <h1>It is Click event from function </h1>
            <button type="button" onClick={()=>changeColor(styleObj)}>Change Color</button>
        </div >
    );

}


export default ClickEventFunction