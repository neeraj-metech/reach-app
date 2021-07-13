import React from 'react'
import ContextComponentB from './ContextComponentB'

const context = [
    {
        id: 1,
        firstName: 'Neeraj',
        lastName: "kumar"
    },
    {
        id: 2,
        firstName: 'Rakesh',
        lastName: "kumar"
    }
]


export const myContext = React.createContext(context);
function ContextComponentA() {
    return (
        <React.Fragment>
            <myContext.Provider value={context}>
                <ContextComponentB />
            </myContext.Provider>
        </React.Fragment>
    )
}

export default ContextComponentA