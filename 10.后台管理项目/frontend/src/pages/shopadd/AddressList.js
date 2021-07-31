import React, { Component } from 'react'

import { List } from 'antd'

export default class AddressList extends Component {
    render() {
        return (
            <List
                size="small"
                bordered
                dataSource={ this.props.address || [] }
                renderItem={item => <List.Item onClick={() => { this.props.changeShopAddr(item.name) }}>{ item.name }</List.Item>}
            />
        )
    }
}
