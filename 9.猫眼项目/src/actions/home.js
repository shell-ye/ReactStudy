import { GET_HOT_MOVIES, PUSH_HOT_MOVIES, GET_COMMING_MOVIES, PUSH_COMMING_MOVIES } from "./actionType";
import { getHotMovies, pushHotMovies, getCommingMovies, pushCommingMovies } from '@/api'

const home = {
    // 获取热门电影
    getHotMovies () {
        return async dispatch => {
            let result = await getHotMovies()
            
            dispatch({
                type: GET_HOT_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取更多热门电影
    pushHotMovies ( ids ) {
        return async dispatch => {
            let result = await pushHotMovies( ids )

            dispatch({
                type: PUSH_HOT_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取即将上映电影
    getCommingMovies () {
        return async dispatch => {
            let result = await getCommingMovies()
            
            dispatch({
                type: GET_COMMING_MOVIES,
                payload: result.data
            })
        }
    },

    // 获取更多即将上映电影
    pushCommingMovies (ids) {
        return async dispatch => {
            let result = await pushCommingMovies(ids)

            dispatch({
                type: PUSH_COMMING_MOVIES,
                payload: result.data
            })
        }
    }
}

export default home