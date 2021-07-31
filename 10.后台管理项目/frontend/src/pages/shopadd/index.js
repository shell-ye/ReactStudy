import React, { Component } from 'react'
import './index.scss'

import { Input, Button, Form, Cascader, Checkbox, InputNumber, TimePicker, Select, Table, Modal } from 'antd'
// const { Option } = Select
import AddressList from './AddressList'
import Upload from 'Components/UI/Upload'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

class ShopAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            shopName: '',
            shopAddr: '',
            showAddrList: true,
            shopPhone: '',
            shopCategory: '',
            feature: ['品质保证', '蜂鸟配送', '新开店铺', '外卖保', '准时达', '开发票'],
            shopCharacteristics: [],
            distributionFee: 4,
            deliveryPrice: 20,
            businessTime: [],
            head: {},
            businessLicense: {},
            cateringLicense: [],
            discountTableColumns: [{
                title: '活动标题',
                dataIndex: 'title',
                key: 'title'
            }, {
                title: '活动详情',
                dataIndex: 'details',
                key: 'details'
            }, {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
            }],
            discountDataSource: [{
                key: '1',
                title: '满减优惠',
                details: '满30-15',
                operation: <Button type="danger">删除</Button>
            }],
            selectDiscount: 'full',
            discountDetails: '',
            discountDetailsDialog: false
        }
    }

    componentDidMount () {
        // 获取店铺分类列表
        this.props.getShopCategory()
    }

    // 输入店铺名称
    inputShopName = e => {
        this.setState({
            shopName: e.target.value
        })
    }

    // 输入店铺地址
    inputShopAddr = e => {
        this.props.getShopAddress(e.target.value)
        this.setState({
            shopAddr: e.target.value,
            showAddrList: true
        })
    }

    // 点击选择店铺地址
    changeShopAddr = value => {
        this.setState({
            shopAddr: value,
            showAddrList: false
        })
    }

    // 输入店铺联系电话
    inputShopPhone = value => {
        this.setState({
            shopPhone: value
        })
    }

    // 选择店铺类型
    selectShopCategory = value => {
        this.setState({
            shopCategory: value
        })
    }

    // 选择店铺特点
    checkShopfeature = value => {
        this.setState({
            shopCharacteristics: value
        })
    }

    // 输入配送费用
    inputDistributionFee = value => {
        this.setState({
            distributionFee: value
        })
    }

    // 输入起送价格
    inputDeliveryPrice = value => {
        this.setState({
            deliveryPrice: value
        })
    }

    // 选择营业时间
    selectBusinessTime = value => {
        this.setState({
            businessTime: [value[0]._d, value[1]._d]
        })
    }
    
    // 获取要上传的图片
    getFile = (type, file) => {
        this.setState({
            [type]: file
        }, () => {
            console.log(this.state)
        })
    }

    // 选中优惠项目
    selectDiscount = value => {
        this.setState({
            selectDiscount: value,
            discountDetailsDialog: true
        })
    }

    // 编辑优惠详情
    inputDiscountDetails = e => {
        this.setState({
            discountDetails: e.target.value
        })
    }

    // 确认优惠项目
    confirmDiscountDetails = () => {
        const { discountDataSource, selectDiscount, discountDetails } = this.state
        let data = {
            key: (parseInt(discountDataSource[discountDataSource.length - 1].key) + 1).toString(),
            title: selectDiscount,
            details: discountDetails,
            operation: <Button type="danger">删除</Button>
        }
        this.setState({
            discountDataSource: [...discountDataSource, data],
            discountDetailsDialog: false
        })
    }

    // 提交表单
    submit = () => {
        console.log(this.state)
    }

    // 提交表单数据成功之后
    onFinish = () => {
        
    }

    render() {
        const { shopAddr, showAddrList, feature, discountTableColumns, discountDataSource, discountDetailsDialog } = this.state
        const { address, category } = this.props
        return (
            <div id="shop-add" className="container">
                <Form name="basic" onFinish={ this.onFinish }>
                    <Form.Item label="店铺名称" name="Shopname" rules={[{ required: true, message: '请输入店铺名称' }]}>
                        <Input placeholder="请输入店铺名称" onChange={ this.inputShopName } />
                    </Form.Item>
                    <Form.Item label="店铺地址" name="ShopAddress" rules={[{ required: true, message: '请输入店铺地址' }]}>
                        <Input placeholder="请输入店铺地址" value={ shopAddr } onChange={ this.inputShopAddr } />
                        { (address && shopAddr && showAddrList) && <AddressList address={ address } changeShopAddr={ this.changeShopAddr } /> }
                    </Form.Item>
                    <Form.Item label="联系电话" name="ShopPhone" rules={[{ required: true, message: '请输入联系电话' }]}>
                        <Input placeholder="请输入联系电话" onChange={ this.inputShopPhone } />
                    </Form.Item>
                    <Form.Item label="店铺类别" name="shopCategory" rules={[{ required: true, message: '请输选择店铺类别' }]}>
                        { category && <Cascader options={ category } onChange={ this.selectShopCategory } changeOnSelect placeholder="请输选择店铺类别" /> }
                    </Form.Item>
                    <Form.Item label="店铺特点" name="shopfeature" rules={[{ required: true }]}>
                        <Checkbox.Group options={ feature } defaultValue={[]} onChange={ this.checkShopfeature } />
                    </Form.Item>
                    <Form.Item label="配送费用" name="distributionFee" rules={[{ required: true }]}>
                        <InputNumber defaultValue={4} onChange={ this.inputDistributionFee } />
                    </Form.Item>
                    <Form.Item label="起送价格" name="deliveryPrice" rules={[{ required: true }]}>
                        <InputNumber defaultValue={20} onChange={ this.inputDeliveryPrice } />
                    </Form.Item>
                    <Form.Item label="营业时间" name="businessTime" rules={[{ required: true }]}>
                        <TimePicker.RangePicker onChange={ this.selectBusinessTime } format="HH:mm" />
                    </Form.Item>
                    <Form.Item label="店铺头像" name="UploadHead" rules={[{ required: true }]}>
                        <Upload type="head" upload={ this.getFile } />
                    </Form.Item>
                    <Form.Item label="营业执照" name="UploadBusinessLicense" rules={[{ required: true }]}>
                        <Upload type="businessLicense" upload={ this.getFile } />
                    </Form.Item>
                    <Form.Item label="餐饮许可证" name="UploadCateringLicense" rules={[{ required: true }]}>
                        <Upload type="cateringLicense" upload={ this.getFile } />
                    </Form.Item>
                    <Form.Item label="优惠活动" name="discount" rules={[{ required: true }]}>
                        <Select defaultValue="满减优惠" allowClear onChange={ this.selectDiscount }>
                            <Select.Option value="满减优惠">满减优惠</Select.Option>
                            <Select.Option value="新用户立减">新用户立减</Select.Option>
                            <Select.Option value="进店领券">进店领券</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Table dataSource={ discountDataSource } columns={ discountTableColumns } rowKey='key' />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" onClick={ this.submit }>Submit</Button>
                    </Form.Item>
                </Form>

                {/* 选择优惠的弹窗 */}
                <Modal 
                    title="请输入活动详情" 
                    visible={ discountDetailsDialog } 
                    onOk={ this.confirmDiscountDetails } 
                    onCancel={() => {this.setState({discountDetailsDialog: false}) }}
                >
                    <Input onChange={ this.inputDiscountDetails } />
                </Modal>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.shopAdd
}

const mapDispatchFromProps = dispacth => {
    return bindActionCreators(actions('shopAdd'), dispacth)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(ShopAdd)