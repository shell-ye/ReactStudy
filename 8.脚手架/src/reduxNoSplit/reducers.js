import { ADD_TODOS, DELETE_TODOS } from "./actionType"

const newState = {
    todos: [{
        id: 1,
        task: '任务一'
    }, {
        id: 2,
        task: '任务二'
    }]
}

const reducer = (state = newState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case ADD_TODOS:
            newState.todos.push({
                id: newState.todos[newState.todos.length - 1].id + 1,
                task: action.payload
            })
            break

        case DELETE_TODOS:
            newState.todos.splice(action.payload, 1)
            break

        default:
            console.log('default')
            break
    }

    return newState
}

export default reducer