import { GET_SHOP_ADDRESS, GET_SHOP_CATEGORY } from "@/actions/actionType"

const initState = {
    address: null,
    category: null
}

const shopAdd = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case GET_SHOP_ADDRESS:
            newState.address = action.payload.length ? action.payload : []
            break

        case GET_SHOP_CATEGORY:
            newState.category = action.payload
            break
        
        default:
            break
    }

    return newState
}

export default shopAdd