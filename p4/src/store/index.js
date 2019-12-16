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
        setPackages(state, payload) {
            state.packages = payload;
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
    },
    getters: {
        getPackages(state) {
            return function (searchItem) {
                return state.packages.filter( item => {
                    return  (item.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1) ||
                        (item.category.toLowerCase().indexOf(searchItem.toLowerCase()) > -1) ||
                        (item.description.toLowerCase().indexOf(searchItem.toLowerCase()) > -1);
                });
            }
        },
        getSinglePackage(state) {
            return function (id) {
                return state.packages.filter(pack => {
                    return pack.id == id;
                })
            }
        },
        getMyPackages(state) {
            return function (ids) {
                let myPackages = [];
                ids.map( id => {
                    state.packages.map(pack => {
                        (pack.id == id) ? myPackages.push(pack) : '';
                    })
                });
                return myPackages;
            }
        }
    }
})