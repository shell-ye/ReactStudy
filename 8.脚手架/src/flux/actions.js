import { INCREASE, DECREASE, CHANGENAME } from "./actionType";
import dispatcher from "./dispatcher";

export const increase = () => {
    dispatcher.dispatch({
        type: INCREASE
    })
}

export const decrease = () => {
    dispatcher.dispatch({
        type: DECREASE
    })
}

export const changeName = name => {
    dispatcher.dispatch({
        type: CHANGENAME,
        payload: name
    })
}