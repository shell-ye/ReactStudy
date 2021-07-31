import { GET_MOVIE_DETAILS, GET_SHOW_DATE, CHANGE_SHOW_DATE, GET_MOVIE_CINEMA } from './actionType'
import { getMovieDetails, getShowDate, getMovieCinema } from '../api/details'

const details = {
    // 获取电影详情
    getMovieDetails (id) {
        return async dispatch => {
            let result = await getMovieDetails(id)

            dispatch({
                type: GET_MOVIE_DETAILS,
                payload: result.data
            })
        }
    },

    // 获取播放日期
    getShowDate (id) {
        return async dispatch => {
            let date = await getShowDate(id)
            let cinema = await getMovieCinema(id, date.data.data.dates[0].date)

            dispatch({
                type: GET_SHOW_DATE,
                payload: {
                    date: date.data,
                    cinema: cinema.data
                }
            })
        }
    },

    // 修改选中播放日期
    changeShowDate (date) {
        return dispatch => {
            dispatch({
                type: CHANGE_SHOW_DATE,
                payload: date
            })
        }
    },

    // 获取电影播放的影院
    getMovieCinema (movieId, showDate) {
        return async dispatch => {
            let result = await getMovieCinema(movieId, showDate)

            dispatch({
                type: GET_MOVIE_CINEMA,
                payload: result.data
            })
        }
    }
}

export default details