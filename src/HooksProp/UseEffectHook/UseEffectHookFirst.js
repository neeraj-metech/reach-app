import React, { useState, useEffect } from 'react'
function UseEffectHookFirst() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count ${count} times`
    }, [count])
    //[count] == useEffect will run when count value is change
    return (
        <React.Fragment>
            <button onClick={() => setCount(count + 1)}>Count {count} times</button>
        </React.Fragment>
    )
}
export default UseEffectHookFirst