let state = {
  info: {
    data: 'store data from user'
  },
  auth: {}
}

const mutations = {}

const getters = {
  info: (state: { info: any }) => state.info
}

export default {
  state,
  mutations,
  actions: {},
  getters
}