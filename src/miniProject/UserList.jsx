import { Link } from "react-router-dom";
function UserList(props) {
    const users = props.users


    // console.log(userItem.length)
    return (
        <div className="container">

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">User</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (users.length) ?
                            users.map((user, index) =>
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {user.name}<br />
                                        {user.email}
                                    </td>
                                    <td>
                                        <Link exact to={"/view/" + user.id} className="btn btn-primary mx-1">View</Link>
                                        <Link exact to={"/delete/" + user.id} className="btn btn-danger mx-1">Delete</Link>
                                    </td>
                                </tr>
                            ) :
                            <tr>
                                <td colspan="2">No data found.</td>
                            </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}
export default UserList