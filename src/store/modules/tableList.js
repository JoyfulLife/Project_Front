import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    tableList: {
        list: []
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
    
};

const mutations = {
    setretrieveClientState: function (state ,payload) {
        console.log("Table mutations~~~~");
        console.log(payload.data);
        state.tableList.list = payload.data;
    },
};

const apis = {
    retrieveClient:function (context) {
        console.log("apis");
        return axios.get(
            "/table",
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
