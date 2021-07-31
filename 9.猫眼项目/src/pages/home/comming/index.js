import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import _ from 'loadsh'
import BSCroll from 'better-scroll'

import MovieRow from '../movieRow'

class Comming extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    componentDidMount () {
        this.props.getCommingMovies()

        this.bscroll = new BSCroll('#home-comming', {
            click: true,
            pullUpLoad: {
                threshold: 50
            }
        })

        this.bscroll.on('pullingUp', () => {
            this.pushCommingMovies()
            this.bscroll.finishPullUp()
        })
    }

    pushCommingMovies = () => {
        // 数据分组：将一个一维数组以区块来区分，形成一个新的二维数组
        const { count } = this.state
        const movieIds = this.props.commingMovies && (this.props.commingMovies.movieIds.slice(10) || [])
        const ids = _.chunk(movieIds, 10)
        
        if ( count !== ids.length ) {
            this.props.pushCommingMovies(ids[count].join(','))
            this.setState({
                count: count + 1
            })
        }
    }

    renderItems = () => {
        if ( this.props.commingMovies && this.props.commingMovies.coming ) {
            return this.props.commingMovies.coming.map(item => <MovieRow key={ item.id } { ...item } />)
        }
    }

    render() {
        console.log(this.props)
        return (
            <div id="home-comming">
                <ul>{ this.renderItems() }</ul>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return {
        commingMovies: state.home.commingMovies
    }
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('home'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Comming)