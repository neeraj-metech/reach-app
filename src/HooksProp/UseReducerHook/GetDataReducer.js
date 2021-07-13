import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
const initialState = {
    post: {},
    error: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { post: action.data, error: '' }
        case 'ERROR':
            return { post: {}, error: action.data }
        default:
            return state
    }
}

function GetDataReducer() {
    const [postId, setPostId] = useState('');
    const [submitValue, setSubmitValue] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (submitValue > 0) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + submitValue)
                .then((result) => {
                    dispatch({ type: 'SUCCESS', data: result.data })
                })
                .catch((error) => {
                    dispatch({ type: 'ERROR', data: 'Something went worng!' })
                })
        }
    }, [submitValue])

    const handileClick = () => {
        setSubmitValue(postId)
    }
    return (
        <div>
            <h1>Get Data Using useReducer Hook</h1>
            {state.post ? state.post.title : null}
            {state.error ? state.error : null}
            <br />
            <input type="text" placeholder="Enter ID ex:- 1,2,3,4,.." value={postId} onChange={(e) => { setPostId(e.target.value) }} />
            <button type="button" onClick={handileClick}>Fetch</button>
        </div>
    )
}
export default GetDataReducer