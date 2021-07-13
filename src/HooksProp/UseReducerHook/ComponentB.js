import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { CountContext } from './UseReducerWithUseContext'

function ComponentB() {
    const count = useContext(CountContext)
    return (
        <div>
            <ComponentC />
            <button onClick={() => count.contextDispatch('increment')}>Increment</button>
            <button onClick={() => count.contextDispatch('decrement')} > Decrement</button>
            <button onClick={() => count.contextDispatch('reset')} > Reset</button>
        </div>
    )
}
export default ComponentB