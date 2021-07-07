import React, { useState } from 'react'
import RunEffectOnce from './RunEffectOnce'

function UseEffectCleanup() {
    const [display, setDisplay] = useState(true)
    return (
        <React.Fragment>
            <h1>UseEffect with Cleanup</h1>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <RunEffectOnce />}
        </React.Fragment>
    )
}
export default UseEffectCleanup