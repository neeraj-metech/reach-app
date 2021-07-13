import React, { useContext } from 'react'
import { myContext } from './ContextComponentA'

function ContextComponentC() {
    const contexts = useContext(myContext);

    return (
        <React.Fragment>
            <h1>Context Component C</h1>
            {/* <h1>{context.firstName} - {context.lastName}</h1> */}
            {
                contexts.map(context => <h1 key={context.id}>{context.firstName} - {context.lastName} </h1>)
            }
        </React.Fragment>
    )
}

export default ContextComponentC