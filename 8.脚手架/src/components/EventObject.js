import React, { Component } from 'react'

export default class EventObject extends Component {

    event = e => {
        console.log('事件对象', e)
        console.log('事件对象中的ClientX', e.clientX)
    }

    render() {
        return (
            <div>
                <button onClick={ this.event }>点击触发事件对象</button>
            </div>
        )
    }
}
