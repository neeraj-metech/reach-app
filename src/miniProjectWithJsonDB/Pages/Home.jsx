import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'

const Home = () => {
    const [contacts, setContacts] = useState([])
    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:3002/contacts/${id}`)
        loadContact()
    }

    const loadContact = async () => {
        await axios.get('http://localhost:3002/contacts')
            .then((result) => {
                // console.log(result)
                setContacts(result.data.reverse())
            }).catch((err) => {
                console.log(err)
            });
    }
    useEffect(() => {
        loadContact()
    }, [])
    return (
        <div className="container">

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact, index) => (
                            <tr key={contact.id}>
                                <td>{index + 1}</td>
                                <td><Avatar size="30" round={true} name={contact.name} /> {contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to={/edit/ + contact.id} class="btn btn-primary p-1 m-1">Edit</Link>
                                    <Link to={/view/ + contact.id} class="btn btn-success p-1 m-1">View</Link>
                                    <button onClick={() => deleteContact(contact.id)} class="btn btn-danger p-1 m-1">Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home