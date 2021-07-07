import React, { useState } from 'react'
function HookCounter2() {
    const initialVal = 0;
    const [count, setCount] = useState(initialVal)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1)
        }
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(initialVal)}>Reset</button>
            <button onClick={() => setCount(count + 1)} > Increment</button>
            <button onClick={() => setCount(count - 1)} > Decrement</button>
            <button onClick={() => setCount(count + 5)} > Increment By 5</button>
            <button onClick={incrementFive} > Increment By 5 using function</button>
        </div>
    )

}
export default HookCounter2