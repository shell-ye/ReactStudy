import React, { Component } from 'react'
import "./index.scss"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'
import BScroll from 'better-scroll'

import _ from 'loadsh'

import MovieRow from '../movieRow'

class Hot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    

    componentDidMount () {
        this.props.getHotMovies()
        
        this.bscroll = new BScroll('#home-hot', {
            click: true,
            pullUpLoad: {
                threshold: 50
            }
        })

        this.bscroll.on('pullingUp', () => {
            this.pushHotMovies()
            this.bscroll.finishPullUp()
        })
    }

    pushHotMovies = () => {
        // 数据分组：将一个一维数组以区块来区分，形成一个新的二维数组
        const { count } = this.state
        const movieIds = this.props.hotMovies && this.props.hotMovies.movieIds.slice(12) || []
        const ids = _.chunk(movieIds, 10)
        if ( count !== ids.length ) {
            this.props.pushHotMovies(ids[count].join(','))
            this.setState({
                count: count + 1
            })
        }
    }

    renderMovies = () => {
        if ( this.props.hotMovies && this.props.hotMovies.movieList ) {
            return this.props.hotMovies.movieList.map(item => <MovieRow key={ item.id } { ...item } />)
        }
        // 渲染电影列表
    }

    render() {
        return (
            <div id="home-hot">
                <ul>
                    { this.renderMovies() }
                    <li className="bottom">已经到低了哟~</li>
                </ul>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.home
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Hot)