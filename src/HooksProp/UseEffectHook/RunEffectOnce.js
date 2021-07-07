import React, { useState, useEffect } from 'react'
function RunEffectOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    useEffect(() => {
        console.log('useEffect called.')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('Component Unmounting code.')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    //  [] it is call useEffect call only first render
    const logMousePosition = (e) => {
        console.log('Mouse event.')
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
            Hooks X - {x}, Y - {y}
        </div>
    )
}

export default RunEffectOnce