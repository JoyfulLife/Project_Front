import {cloneDeep} from "lodash";
// import {jsonPost} from "../commonActions";

import axios from "axios";
const defaultState = {
    client:{
        user_ID: "admin",
        passWord: "dbstkd96!",
        name: "",
        phone_no: "",
        list: [],
        loginStatus: "",
        update: "",
        delete: "",
        failMessage:""
    },
    signUp:{
        user_ID: "",
        passWord: "",
        reconfirmPassWord: "",
        name: "",
        phoneNumber: "",
        gender: "",
        successMessage: "",
        failMessage: "",
    }
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    ValidClientCheck: function (context, payload) {
        console.log(payload);
        return apis.ValidClientCheck(context, payload);
    },
    saveClient: function (context, payload) {
        console.log("saveClient");
        return apis.saveClient(context, payload);
    },
    initializeClient: function (context) {
        context.commit("initializeClientState");
    },

    initializeSignUp: function (context) {
        context.commit("initializeSignUpState");
    },

    clientUpdate: function (context, payload) {
        
        return apis.clientUpdate(context, payload);
    },
    clientDelete: function (context, payload) {
        
        return apis.clientDelete(context, payload);
    },
};

const mutations = {
    setValidClientCheckState: function (state ,payload) {
        console.log(payload)
        state.client.list = payload.data;
        
    },
    setsaveClientState: function (state ,payload) {
        console.log(payload)
        console.log("setsaveClientState");
        state.signUp.failMessage = payload.data.failMessage;
        state.signUp.successMessage = payload.data.successMessage;
    },
    initializeClientState: function (state) {
        const newInstance = cloneDeep(defaultState.client);
        state.client = newInstance;
    },
    initializeSignUpState: function (state) {
        const newInstance = cloneDeep(defaultState.signUp);
        state.signUp = newInstance;
    },
    setclientUpdateState: function (state ,payload) {
        
        state.client.list = payload.data;
        
    },
    setclientDeleteState: function (state ,payload) {
        
        state.client.list = payload.data;
        
    },
};

const apis = {
    ValidClientCheck:function (context, parameters) {
        console.log("apis");
        return axios.post(
            "/client/clientInfo", parameters.params
        ).then(response => context.commit("setValidClientCheckState", response))
    },
    
    saveClient:function (context, parameters) {
        
        return axios.post(
            "/client/saveClient", parameters.params
        ).then(response => context.commit("setsaveClientState", response))
    },

    clientUpdate:function (context, parameters) {
        return axios.post(
            "/client/clientInfo", parameters.params
        ).then(response => context.commit("setclientUpdateState", response))
    },

    clientDelete:function (context, parameters) {
        return axios.post(
            "/client/clientInfo", parameters.params
        ).then(response => context.commit("setclientDeleteState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
