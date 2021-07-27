import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import uniqid from 'uniqid'
import axios from 'axios'

function AddContact() {
    let history = useHistory()
    const [inputs, setInputs] = useState({ id: uniqid(), name: '', email: '', phone: '' });

    const inputValuse = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs)
        await axios.post('http://localhost:3002/contacts', inputs)
        history.push('/')

    }
    const { name, email, phone } = inputs
    return (
        <div className="container">
            <h1 className="text-center">Add Contact</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="rowm my-1">
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name"
                            name="name"
                            value={name}
                            onChange={(e) => inputValuse(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => inputValuse(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => inputValuse(e)}
                        />
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-md-6">
                        <button onClick={() => history.push('/')} className="btn btn-primary" style={{ float: "right" }}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddContact