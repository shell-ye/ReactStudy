// 头部仅仅用于展示，使用函数组件 
import React from 'react'
import './index.scss'

const Tab = props => {
    return (
        <header id="tab">
            <i 
                className="iconfont jiantou-copy" 
                onClick={() => { props.history.goBack() }}
            ></i>
            <h3>猫眼电影</h3>
        </header>
    )
}

export default Tab