import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class BrotherComponent extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            name: 'brother'
        }

        PubSub.subscribe('changeName', (msg, data) => {
            console.log(msg, data)
            // this.setState({
            //     name: data
            // })
        })
    }

    render () {
        return (
            <div>
                <p>兄弟组件的名字：{ this.state.name }</p>    
            </div>
        )
    }
}