import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class One extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>First Page<Link to="/SecondPage">点击前往 Second Page</Link></div>
        )
    }
}