import home from './home'
import details from './details'

const actions = module => {
    switch (module) {
        case 'home':
            return { ...home }
            break

        case 'details':
            return { ...details }
            break

        default:
            break
    }
}

export default actions