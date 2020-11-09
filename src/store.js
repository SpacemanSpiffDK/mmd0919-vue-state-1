import Vue from 'vue'   // this module needs to know about vue
import Vuex from 'vuex' // this module needs to know about vuex
// type this in console (without quotation marks) to install vuex "npm install --save vuex"
// remember to stop serve if it is running

Vue.use(Vuex);  // make vue use vuex, the store will not work without this!

export default new Vuex.Store({ // this module will export the vuex store
    state: {    // state: list of variables we need to keep track of globally
        halfFull: 0,
        halfEmpty: 0,
        total: 0
    },
    mutations: {    // mutations: list of SYNCHRONOUS functions that change the data within state
        increaseHalfFull: (state) => {
            state.halfFull++;
        },
        increaseHalfEmpty: (state) => {
            state.halfEmpty++;
        },
        increaseTotal: (state) => {
            state.total++;
        }
    }
    // getters: (not used here) list of functions that return data based on the state variables (much like 'computed' for vue components)
    // actions: (not used here) list of functions that commit mutations, if you need to make multiple commits or if you need ASYNCHRONOUS functions
});