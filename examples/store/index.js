import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    rules: []
}

const actions = {
    getRules (ctx, payload) {
        return new Promise(function (resolve, reject) {
            var panel = require('@/assets/rules.json')
            ctx.commit('setRules', panel)
            resolve(panel.rules)
        })
    }
}

const mutations = {
    setRules (state, payload) {
        state.rules = payload.rules
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
