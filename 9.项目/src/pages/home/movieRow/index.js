import React from 'react'
import './index.scss'

const MovieRow = props => {
    return (
        <li className="home-movies-row">
            <img src={ props.img.replace('w.h', '64.90') } />
            <div>
                <p className="title">
                    <span>{ props.nm }</span>
                    <span 
                        className={ props.version.indexOf('3') !== -1 ? 'version three' : props.version.indexOf('2') !== -1 ? 'version two' : 'version' }
                    ></span>
                </p>
                <p>观众评<span className="sc">{ props.sc }</span></p>
                <p>主演：{ props.star }</p>
                <p>{ props.showInfo }</p>
                <button>购票</button>
            </div>
        </li>
    )
}

export default MovieRow