import store from './store'
import { ADD_TODOS, DELETE_TODOS } from './actionType'

const actions = {
    add_todos ( value ) {
        store.dispatch({
            type: ADD_TODOS,
            payload: value
        })
    },

    delete_todos ( index ) {
        store.dispatch({
            type: DELETE_TODOS,
            payload: index
        })
    }
}

export default actions