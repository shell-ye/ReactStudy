import React, { Component } from 'react'
import classname from 'classname'
import './classname.css'

export default class ClaassNameStyle extends Component {
    render() {
        return (
            <div className={classname({
                box: true,
                yellowBg: false,
                redBg: true
            })}>
                
            </div>
        )
    }
}
