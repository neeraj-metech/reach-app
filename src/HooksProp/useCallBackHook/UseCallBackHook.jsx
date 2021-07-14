import { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


const UseCallBackHook = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)


    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Add Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Add Salary</Button>
        </div>
    )
}
export default UseCallBackHook