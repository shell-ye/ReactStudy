import React, { Component } from 'react'

import LayoutContent from './content'
import { Skeleton } from 'antd'

export default class LayOut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true
        }
    }
    
    componentDidMount () {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 0)
    }

    render() {
        const { loading } = this.state
        return (
            <Skeleton active avatar paragraph={{ rows: 4 }} loading={ loading }>
                <LayoutContent id="layout" />
            </Skeleton>
        )
    }
}
