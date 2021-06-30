import React, { Component } from 'react'

class HtmlElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            emailId: '',
            language: '',
            message: ''
        }
    }
    handalUsername = event => {
        this.setState({
            username: event.target.value
        })
    }
    handalEmailId = event => {
        this.setState({
            emailId: event.target.value
        })
    }
    handalLanguage = event => {
        this.setState({
            language: event.target.value
        })
    }
    handalMessage = event => {
        this.setState({
            message: event.target.value
        })
    }
    formSubmitHandler = event => {
        event.preventDefault();
        alert(`${this.state.username} ${this.state.emailId} ${this.state.language} ${this.state.message}`)
    }
    render() {
        return (
            <form className='center' onSubmit={this.formSubmitHandler}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={this.state.username} onChange={this.handalUsername} />
                </div>
                <div>
                    <label>Email ID</label>
                    <input type="email" value={this.state.email} onChange={this.handalEmailId} />
                </div>
                <div>
                    <label>Language</label>
                    <select value={this.state.language} onChange={this.handalLanguage}>
                        <option value="react">React</option>
                        <option value="java">Java</option>
                        <option value="pythan">Pythan</option>
                    </select>
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" value={this.state.message} onChange={this.handalMessage} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default HtmlElement