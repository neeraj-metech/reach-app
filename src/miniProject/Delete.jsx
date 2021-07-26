import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
const Delete = (props) => {
    const { id } = useParams();
    let history = useHistory();
    props.handelDelete(id);
    history.push('/')
    return (
        <h1>Deleted</h1>
    )
}
export default Delete