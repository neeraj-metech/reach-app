import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { CountContext } from './UseReducerWithUseContext'

function ComponentA() {
    const count = useContext(CountContext)
    return (
        <div>
            <ComponentB />
            <button onClick={() => count.contextDispatch('increment')}>Increment</button>
            <button onClick={() => count.contextDispatch('decrement')} > Decrement</button>
            <button onClick={() => count.contextDispatch('reset')} > Reset</button>
        </div>
    )
}
export default ComponentA