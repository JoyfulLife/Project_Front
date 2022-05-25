import {cloneDeep} from "lodash";
// import {jsonPost} from "../commonActions";

import axios from "axios";
const defaultState = {
    client:{
        user_ID: "",
        passWord:"",
        name:"",
        list:[],
        loginStatus:""
    },
    signUp:{
        user_ID: "",
        passWord:"",
        reconfirmPassWord:"",
        name:"",
        phoneNumber:"",
        gender:"",
        successMessage:"",
        failMessage:"",
    }
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    ValidClientCheck: function (context, payload) {

        return apis.ValidClientCheck(context, payload);
    },
    saveClient: function (context, payload) {
        console.log("saveClient");
        return apis.saveClient(context, payload);
    },
    
};

const mutations = {
    setValidClientCheckState: function (state ,payload) {
        console.log(payload)
        state.client.list = payload.data;
        // state.client.name = payload.data.name;
    },
    setsaveClientState: function (state ,payload) {
        console.log(payload)
        console.log("setsaveClientState");
        state.signUp.failMessage = payload.data.failMessage;
        state.signUp.successMessage = payload.data.successMessage;
    },

};

const apis = {
    ValidClientCheck:function (context, parameters) {
        console.log("apis");
        return axios.post(
            "/ado/client/clientInfo", parameters.params
        ).then(response => context.commit("setValidClientCheckState", response))
    },
    
    saveClient:function (context, parameters) {
        
        return axios.post(
            "/ado/client/saveClient", parameters.params
        ).then(response => context.commit("setsaveClientState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
