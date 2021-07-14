import React from 'react'
const Count = ({ text, count }) => {
    console.log('render - ' + text)
    return (
        < p > {text} - {count} </p >
    )
}

export default React.memo(Count)