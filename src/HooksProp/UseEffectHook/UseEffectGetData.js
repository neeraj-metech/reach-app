import React, { useState, useEffect } from 'react'
import axios from 'axios'
function UseEffectGetData() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                console.log(result)
                setPosts(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])
    return (
        <React.Fragment>
            <h1>Get Data From useEffect</h1>
            {
                posts.map(post => <p key={post.id}>{post.title}</p>)
            }
        </React.Fragment>
    )
}
export default UseEffectGetData