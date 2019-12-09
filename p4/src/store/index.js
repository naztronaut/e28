import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');
import * as config from '../config.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        packageCount: 0,
        packages: [],
    },
    mutations: {
        setPackageCount(state, payload) {
            state.packageCount = payload;
        },
        updatePackageCount(state, payload) {
            state.packageCount += payload;
        }
    },
    actions: {
        setPackages (ctx) {
            axios
                .get(
                    config.api.url + '.json'
                ).then(response => {
                    ctx.commit('setPackages', response.data.splice(1))
            });
        }
    }
})