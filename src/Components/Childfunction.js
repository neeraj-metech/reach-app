
import React from 'react'

 const Childfunction = (props) => {
    return <button type="button" onClick={() => props.funName('child')}>Click Me</button>
};

export default Childfunction
