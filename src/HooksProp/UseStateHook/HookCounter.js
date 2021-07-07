import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter


// Rules of Hooks
// 1. Don't call hooks inside loops,conditions or nested function
// 2. only call hooks from react function
// 3. Call them from within React functional comonents and not just any regular javascript function


// Note
// useState variable can be a String,object,array,boolen
// In class the state is always an object
// ...name it is a spret variable