import React, { Component } from 'react'
import './index.scss'

import LoginHead from 'Assets/img/login-head.jpg'

import { Input, Button } from 'antd';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: ''
        }
    }

    // 输入用户名
    inputUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    // 输入密码
    inputPassword = e => {
        this.setState({
            password: e.target.value
        })
    }

    // 登录
    submit = () => {
        const { username, password } = this.state
        console.log(username, password)
    }

    render() {
        return (
            <div id="login">
                <div className="block">
                    <img src={ LoginHead } alt="头像" />
                    <label className="title">登录 React 后台</label>
                    <label>
                        <span>用户名：</span>
                        <Input placeholder="请输入用户名" onChange={ this.inputUsername } />
                    </label>
                    <label>
                        <span>密码：</span>
                        <Input.Password placeholder="请输入密码" onChange={ this.inputPassword } />
                    </label>
                    <Button type="primary" onClick={ this.submit }>登录</Button>
                </div>
            </div>
        )
    }
}
