// 头部仅仅用于展示，使用函数组件 
import React from 'react'
import './index.scss'

const Tab = props => {
    // 显示返回按键的路由
    const showList = [
        '/details'
    ]

    // 显示返回按钮的判断参数
    const showReturn = showList.indexOf(props.location.pathname) !== -1

    return (
        <header id="tab">
            { showReturn && <i className="iconfont jiantou-copy" onClick={() => { props.history.goBack() }}></i> }
            <h3>猫眼电影</h3>
        </header>
    )
}

export default Tab