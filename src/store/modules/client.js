import {cloneDeep} from "lodash";
// import { messagePost } from "@/store/commonActions";
// import {jsonPost} from "../commonActions";
import axios from "axios";
const defaultState = {
    client:{
        userID: "",
    },
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    retrieveClient: function (context, payload) {
        console.log("actions");
        return apis.retrieveClient(context, payload);
    },
    // retrieveClient: function () {
    //     console.log("retrieveClient")
    // },
};

const mutations = {
    setretrieveClientState: function (state ,payload) {
        console.log("mutations");
        console.log(payload);
        state.client.userID = payload.data.userID;
    },

};

const apis = {
    retrieveClient:function (context) {
        console.log("apis");
        console.log(context);
        // console.log(context.commit("setretrieveClientState"));
        return axios.get(
            "/ado/client/clientInfo",
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
