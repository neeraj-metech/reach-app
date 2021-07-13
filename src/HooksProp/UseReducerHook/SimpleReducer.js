import React, { useReducer } from 'react'

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
function SimpleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>IncrementCount</button>
            <button onClick={() => dispatch('decrement')}>DecrementCount</button>
            <button onClick={() => dispatch('reset')}>ResetCount</button>
        </React.Fragment>
    )
}
export default SimpleReducer