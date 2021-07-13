import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 5
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.incValu }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.incValu }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.incValu }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.incValu }
        case 'reset':
            return initialState
        default:
            return state

    }
}
function ComplexReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <React.Fragment>
            <div>firstCounter - {count.firstCounter}</div>
            <div>secondCounter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', incValu: 1 })}>IncrementCount</button>
            <button onClick={() => dispatch({ type: 'decrement', incValu: 1 })}>DecrementCount</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment', incValu: 5 })}>IncrementCount 5</button>
                <button onClick={() => dispatch({ type: 'decrement', incValu: 5 })}>DecrementCount 5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', incValu: 2 })}>IncrementCount SecondCounter</button>
                <button onClick={() => dispatch({ type: 'decrement2', incValu: 2 })}>DecrementCount SecondCounter</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>ResetCount</button>
        </React.Fragment>
    )
}
export default ComplexReducer