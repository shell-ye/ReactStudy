import { GET_HOT_MOVIES, PUSH_HOT_MOVIES } from "./actionType";
import { getHotMovies, pushHotMovies } from '@/api'

const home = {
    getHotMovies () {
        return async dispatch => {
            let result = await getHotMovies()
            
            dispatch({
                type: GET_HOT_MOVIES,
                payload: result.data
            })
        }
    },

    pushHotMovies ( ids ) {
        return async dispatch => {
            let result = await pushHotMovies( ids )

            dispatch({
                type: PUSH_HOT_MOVIES,
                payload: result.data
            })
        }
    }
}

export default home