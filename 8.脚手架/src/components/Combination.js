import React, { Component, Fragment } from 'react'

export default class Base extends Component {
    render () {
        return (
            <div style={{
                background: 'black', 
                color: 'white'
            }}>
                { this.props.children }
            </div>
        )
    }
}