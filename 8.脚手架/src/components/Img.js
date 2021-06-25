import React, { Component, Fragment } from 'react'

import Img from './../assets/img/logo192.png'

export default class ImgComponent extends Component {
    render () {
        return (
            // 不想生成多一个标签，但是又想写两个标签时可用空标签 <></> 或者 Fragment 包裹
            <Fragment>
                {/* 在 public 目录下 */}
                <img src="logo192.png" alt="img" />
                <img src={Img} alt="img" />
                <img src={require("./../assets/img/logo192.png")} alt="img" />
            </Fragment>
        )
    }
}