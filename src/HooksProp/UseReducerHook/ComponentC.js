import React, { useContext } from 'react'
import { CountContext } from './UseReducerWithUseContext'

function ComponentC() {
    const count = useContext(CountContext)
    return (
        <div>
            <h1> Component C</h1>
            <button onClick={() => count.contextDispatch('increment')}>Increment</button>
            <button onClick={() => count.contextDispatch('decrement')} > Decrement</button>
            <button onClick={() => count.contextDispatch('reset')} > Reset</button>
        </div>
    )
}
export default ComponentC