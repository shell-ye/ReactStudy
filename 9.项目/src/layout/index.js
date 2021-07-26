import React, { Component } from 'react'
import Ad from '../components/ad'
import Tab from '../components/tab'
import TabBar from '../components/tabbar'
import RouterComponent from 'Router'
import './index.scss'

export default class LayOut extends Component {
    render() {
        return (
            <div id="layout">
                <Tab { ...this.props } />
                <Ad />
                <RouterComponent />
                <TabBar />
            </div>
        )
    }
}
