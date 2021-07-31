import { combineReducers } from 'redux'
import home from './home'
import details from './details'

const rootReducer = combineReducers({
    home,
    details
})

export default rootReducer