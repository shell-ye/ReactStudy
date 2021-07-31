import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import actions from '@/actions'
import { bindActionCreators } from 'redux'

import Head from './head'
import DateList from './date'
import Cinema from './cinema'

class Details extends Component {
    componentDidMount () {
        this.props.getMovieDetails(1298542)
        this.props.getShowDate(1298542)
    }
    
    changeShowDate = date => {
        this.props.changeShowDate(date)
    }

    render() {
        const { movieDetails, showDate, activeDate, cinema } = this.props
        return (
            <div id="details">
                {/* 头部信息 */}
                { movieDetails && <Head { ...movieDetails } /> }

                {/* 日期选择 */}
                { showDate && <DateList 
                    showDate={ showDate } 
                    activeDate={ activeDate } 
                    changeShowDate={ this.changeShowDate } 
                /> }

                {/* 展示影院 */}
                <Cinema { ...cinema } />
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.details
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('details'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Details)

