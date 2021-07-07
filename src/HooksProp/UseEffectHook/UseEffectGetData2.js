import React, { useState, useEffect } from 'react'
import axios from 'axios'
function UseEffectGetData2() {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('');
    const [submitValue, setSubmitValue] = useState('');

    const getPost = () => {
        setSubmitValue(postId)
    }
    useEffect(() => {
        console.log('useEffect is Calling...')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${submitValue}`)
            .then((result) => {
                console.log(result)
                setPosts(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [submitValue])
    return (
        <React.Fragment>
            <h1>Get Data From useEffect</h1>
            <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
            <button onClick={getPost} >Send</button>
            <p>{posts.title}</p>
        </React.Fragment>
    )
}
export default UseEffectGetData2