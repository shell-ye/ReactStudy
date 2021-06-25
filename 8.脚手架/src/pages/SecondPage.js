import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class One extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>Second Page<NavLink to="/FirstPage">点击前往 First Page</NavLink></div>
        )
    }
}