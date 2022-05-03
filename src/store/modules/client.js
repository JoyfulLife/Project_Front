import {cloneDeep} from "lodash";
// import {jsonPost} from "../commonActions";

import axios from "axios";
const defaultState = {
    client:{
        userID: "",
        age:"1111",
    },
    signUp:{
        userID: "",
        passWord:"",
        reconfirmPassWord:"",
        name:"",
        phoneNumber:"",
        gender:"",
    }
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    retrieveClient: function (context, payload) {
        console.log("actions");
        return apis.retrieveClient(context, payload);
    },
    saveClient: function (context, payload) {
        console.log("saveClient");
        return apis.saveClient(context, payload);
    },
    
};

const mutations = {
    setretrieveClientState: function (state ,payload) {
        console.log("응답 mutation!!!!");
        console.log(payload.data[0].age);
        // console.log(state.client.age);
        state.client.userID = payload.data[0].age;
    },

};

const apis = {
    retrieveClient:function (context) {
        console.log("apis");
        return axios.get(
            "/ado/client/clientInfo",
        ).then(response => context.commit("setretrieveClientState", response))
    },
    
    saveClient:function (context, parameters) {
        
        return axios.post(
            "/ado/client/saveClient", parameters.params
        ).then(response => context.commit("setretrieveClientState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
