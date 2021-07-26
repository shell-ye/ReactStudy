import { Dispatcher } from "flux";
import { INCREASE, DECREASE, CHANGENAME } from "./actionType";
import store from "./store";

const dispatcher = new Dispatcher()

dispatcher.register(action => {
    switch ( action.type ) {
        case INCREASE:
            store.state.count++
            break

        case DECREASE:
            store.state.count--
            break

        case CHANGENAME:
            store.state.name = action.payload
            break

        default:
            console.log('default')
            break
    }
})

export default dispatcher