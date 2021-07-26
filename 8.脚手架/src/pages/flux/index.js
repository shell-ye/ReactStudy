import React, { Component } from 'react'
import store from './../../flux/store'
import { increase, decrease, changeName } from '../../flux/actions'

export default class Flux extends Component {
    constructor() {
        super()
    
        this.state = {
            count: store.getState().count,
            name: store.getState().name
        }
    }

    componentDidMount () {
        store.on('updateView', () => {
            this.setState({
                count: store.getState().count,
                name: store.getState().name
            })
        })
    }

    // 解决一个不知名的报错
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        }
    }

    clickIncrease = () => {
        increase()
        store.emit('updateView')
    }

    clickDecrease = () => {
        decrease()
        store.emit('updateView')
    }
    
    clickChangeName = () => {
        changeName('夏叶')
        store.emit('updateView')
    }

    render() {
        return (
            <div>
                <p>这个 Flux 的目录配置是仅仅为了走一遍流程，正常还是要按照标准的 Flux 书写目录</p>
                <p>count的值为：{ this.state.count }</p>
                <p>name的值为：{ this.state.name }</p>
                <button onClick={ this.clickIncrease }>+1</button>
                <button onClick={ this.clickDecrease }>-1</button>
                <button onClick={ this.clickChangeName }>changeName</button>
            </div>
        )
    }
}
