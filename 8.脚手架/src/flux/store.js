const store = {
    state: {
        count: 0,
        name: 'xiaye'
    },

    getState () {
        return this.state
    },

    ...require('events').EventEmitter.prototype
}

export default store