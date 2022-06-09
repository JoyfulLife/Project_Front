import {cloneDeep} from "lodash";
// import axios from "axios";

const defaultState = {
    adRequest:{
        user_ID:"",
        category:"",
        brand_name:"",
        Remarks:"",
        image:null,
        
    }
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
