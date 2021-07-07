import Rect, { useState } from 'react'
function UseStateObjet() {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    return (
        <div>
            <input type="text" value={name.firstname} onChange={(e) => setName({ ...name, firstname: e.target.value })} />
            <input type="text" value={name.lastname} onChange={(e) => setName({ ...name, lastname: e.target.value })} />
            <h1>Your Name is {name.firstname} {name.lastname}</h1>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}
export default UseStateObjet