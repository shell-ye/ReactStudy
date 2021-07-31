import shopAdd from "./shopAdd"

const actions = module => {
    switch (module) {
        case 'shopAdd':
            return shopAdd
            break
            
        default:
            break
    }
}

export default actions