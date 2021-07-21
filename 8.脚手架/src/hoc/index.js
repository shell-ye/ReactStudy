import React, { Component } from 'react'

export const withAniamte = Component => {
    return class _ extends Component {
        // 将复用的逻辑全部写在这里
        handler = () => {
            console.log('复用的逻辑')
        }

        render () {
            <Component handler={ this.handler } />
        }
    }
}