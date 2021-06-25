import React, { Component } from 'react'
import Children from './Children'
import Brother from './Brother'

export default class ImgComponent extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            name: 'parent'
        }
    }

    changeName = ( name ) => {
        this.setState({
            name
        })
    }

    render () {
        return (
            <div>
                <p>父组件名称：{ this.state.name }</p>
                <Brother />
                <Children changeName={ this.changeName }/>
            </div>
        )
    }
}