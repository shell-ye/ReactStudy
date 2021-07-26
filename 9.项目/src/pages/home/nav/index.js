import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class Nav extends Component {
    render() {
        return (
            <div id="home-nav">
                <span>南昌</span>
                <div>
                    <NavLink to="/home/hot">正在热映</NavLink>
                    <NavLink to="/home/comming">即将上映</NavLink>
                </div>
                <i className="iconfont sousuo"></i>
            </div>
        )
    }
}
