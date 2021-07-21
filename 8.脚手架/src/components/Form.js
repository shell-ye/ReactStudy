import React, { Component } from 'react'

export default class Form extends Component {
    constructor () {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    changeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    changePassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    submit = () => {
        console.log(this.state)
    }

    render () {
        const { username, password } = this.state

        return (
            <div>
                <input value={ username } onChange={ this.changeUsername } placeholder="请输入用户名" />
                <input value={ password } onChange={ this.changePassword } placeholder="密码" />
                <input defaultValue="123" />
                <button onClick={ this.submit }>提交</button>
            </div>
        )
    }
}
