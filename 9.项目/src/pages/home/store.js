import { GET_HOT_MOVIES, PUSH_HOT_MOVIES } from "@/actions/actionType"

const initState = {
    hotMovies: null
}

const home = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_HOT_MOVIES:
            newState.hotMovies = action.payload
            break

        case PUSH_HOT_MOVIES:
            newState.hotMovies.movieList.push(...action.payload.coming)
            break

        default:
            console.log('default')
            break
    }

    return newState
}

export default home