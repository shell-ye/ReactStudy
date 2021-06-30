let info = [{
    name: 'xiaye',
    age: 21
}]

export function data (state = info[0].age, action) {
    switch ( action.type ) {
        case 'increase' :
            return state + action.data

        case 'decrease' :
            return state - action.data
            
        default: 
            return state
            break
    }
}