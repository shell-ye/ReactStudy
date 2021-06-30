import React, { Component } from 'react'
import { store } from './../redux/store'

// * as action 表示引入所有内容在 action 下
import * as action from './../redux/action'

export default class Reducer extends Component {
    constructor ( props ) {
        super( props )
        this.state= {
            age: store.getState()
        }
    }

    componentDidMount () {
        store.subscribe(() => {
            this.setState({
                age: store.getState()
            })
        })
    }

    render () {
        return (
            <div>
                <p>年龄：{this.state.age}</p>    
                <button onClick={() => {store.dispatch(action.increase(1))}}>点击加一岁</button>
                <button onClick={() => {store.dispatch(action.decrease(1))}}>点击减一岁</button>
            </div>
        )
    }
}