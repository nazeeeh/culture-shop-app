const state = () => ({
        customerDetailsToView: {}
})

const mutations = {
    setCustomerToView(state, payload) {
        state.customerDetailsToView = payload
    }
}

export { state, mutations}