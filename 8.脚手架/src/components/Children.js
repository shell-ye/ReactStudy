import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class ChildrenComponent extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            name: 'children'
        }
    }

    pubsub () {
        PubSub.publish('changeName', this.state.name)
    }

    render () {
        return (
            <div>
                <button onClick={ this.props.changeName.bind( this, this.state.name ) }>点击修改父组件名称</button>
                <button onClick={ this.pubsub.bind( this ) }>点击修改兄弟件名称</button>
            </div>
        )
    }
}