import React, { createContext, useReducer } from 'react'
import ComponentA from './ComponentA'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CountContext = React.createContext();

function UseReducerWithUseContext() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count - {count}</h1>
            <CountContext.Provider value={{ contextCount: count, contextDispatch: dispatch }}>
                <ComponentA />
            </CountContext.Provider>
        </div >
    )
}
export default UseReducerWithUseContext