import React, { Component } from 'react'
import axios from 'axios'
class GetDataApi2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            post_id: ''
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            post_id: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        // axios.get('https://jsonplaceholder.typicode.com/posts/' + this.state.post_id)
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                id: this.state.post_id
            }
        })
            .then((result) => {
                // console.log(result.data)
                this.setState({ post: result.data })
            }).catch((err) => {
                console.log(err)
            });
    }
    render() {
        const { post, post_id } = this.state
        return (
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.onChangeHandler} value={post_id} /><br />
                    <input type="submit" value="Submit" />
                </form>
                <div>{
                    // (post.title) ?
                    //     <h1>{post.title}</h1> :
                    //     ''
                    post.map(p => <h1 key={p.id}>{p.title}</h1>)
                }
                </div>
            </React.Fragment>
        )
    }
}

export default GetDataApi2