import React from 'react'
import './index.scss'
import AdImage from 'Assets/img/ad.png'

const Ad = () => {
    return (
        <div id="ad">
            <img src={ AdImage } alt="猫眼电影" />
            <p>
                <span>发现最新最热电影</span>
                <span>打开APP<i className="iconfont arrow-right"></i></span>
            </p>
        </div>
    )
}

export default Ad