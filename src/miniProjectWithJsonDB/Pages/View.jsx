import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

function View() {
    let history = useHistory()
    const { id } = useParams()
    const [inputs, setInputs] = useState({ id: '', name: '', email: '', phone: '' });
    const loadContact = async () => {
        const result = await axios.get(`http://localhost:3002/contacts/${id}`)
        setInputs(result.data)
    }
    useEffect(() => {
        loadContact()
    }, [])
    const { name, email, phone } = inputs
    return (
        <div className="container">
            <h1 className="text-center">View Contact</h1>
            <form>
                <div className="rowm my-1">
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" className="form-control" placeholder="Enter name"
                            name="name"
                            value={name}
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            name="email"
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter phone"
                            name="phone"
                            value={phone}
                        />
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-md-6">
                        <button onClick={() => history.push('/')} className="btn btn-primary" style={{ float: "right" }}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default View