import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class One extends Component {
    constructor (props) {
        super(props)
        console.log(props.match.params.id)
    }

    render () {
        return (
            <div>First Page<Link to={{
                pathname: '/SecondPage',
                query: {
                    id: 123
                }
            }}>点击前往 Second Page</Link></div>
        )
    }
}