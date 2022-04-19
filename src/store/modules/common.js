import {cloneDeep} from "lodash";
// import axios from "axios";

const defaultState = {
    login:{
        loginPage: "",
        loginStatus: "",
        test: "",
    },
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    
};

const mutations = {

};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
