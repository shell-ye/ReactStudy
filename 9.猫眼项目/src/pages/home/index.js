import React, { Component } from 'react'
import Nav from './nav'
import { Route } from 'react-router-dom'
import Hot from './hot'
import Comming from './comming'
import './index.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="page-content" id="home">
                <Nav />
                <Route path="/home/hot" component={ Hot } />
                <Route path="/home/comming" component={ Comming } />
            </div>
        )
    }
}
