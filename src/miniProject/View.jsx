import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom";

function View(props) {
    const { id } = useParams();
    const [user, setUser] = useState([])
    useEffect(() => {
        let getUser = props.users.filter((user) => {
            if (user.id == id) {
                setUser(user)
            }
        })
    })
    const { name, email } = user;
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" value={name} />
                    <small id="emailHelp" className="form-text text-muted">Please enter your name.</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="row">
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
export default View