import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom";

function AddUser(props) {
    const [inputs, setInputs] = useState({ id: '', name: '', email: '' });
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddUser(inputs)
        setInputs({ name: '', email: '' })
        history.push('/')
    }

    const userItem = JSON.parse(localStorage.getItem('users'))
    let userId
    if (userItem.length) {
        userId = userItem.length + 1
    } else {
        userId = 1
    }
    useEffect(() => {
        setInputs({ ...inputs, id: userId })
    }, [userId])
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" value={inputs.name} onChange={(e) => { setInputs({ ...inputs, name: e.target.value }) }} />
                    <small id="emailHelp" className="form-text text-muted">Please enter your name.</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={inputs.email} onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="row">

                    <div className="col-md-6">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-md-6">
                        <Link to="/">
                            <button className="btn btn-primary" style={{ float: "right" }}>Back</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddUser