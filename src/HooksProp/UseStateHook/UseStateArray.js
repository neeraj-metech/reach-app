import Rect, { useState } from 'react'
function UseStateArray() {
    const [items, setItem] = useState([])
    const addItem = () => {
        setItem([...items, {
            id: items.length,
            number: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button type="button" onClick={addItem}>Add Item</button>
            <button type="button" onClick={() => setItem([])}>Reset</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.number}</li>)}
            </ul>
        </div>
    )
}
export default UseStateArray