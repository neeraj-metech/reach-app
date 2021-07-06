import React, { Component } from 'react'
import axios from 'axios'

class GetDataApi extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                // console.log(result)
                this.setState({ posts: result.data })
            }).catch((err) => {
                console.log(err)
            });
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                <h1>Axios Get Request</h1>
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        )
    }
}
export default GetDataApi