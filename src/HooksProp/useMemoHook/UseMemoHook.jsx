import React, { useMemo, useState } from 'react'
const UseMemoHook = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const countHandleOne = () => {
        setCountOne(countOne + 1)
    }
    const countHandleTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log('calling isEven fucntion.')
        let i = 0
        while (i < 200000000) i++
        return countOne % 2 === 0
    }, [countOne])
    // const isEven = () => {
    //     console.log('calling isEven fucntion.')
    //     let i = 0
    //     while (i < 200000000) i++
    //     return countOne % 2 == 0
    // }
    return (
        <React.Fragment>
            <div>
                <button onClick={countHandleOne}>Count One - {countOne}</button>
                {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={countHandleTwo}>Count Two - {countTwo}</button>
            </div>
        </React.Fragment>
    )
}
export default UseMemoHook