import React from 'react'
const Button = ({ handleClick, children }) => {
    console.log('Clicked - ' + children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}
export default React.memo(Button)