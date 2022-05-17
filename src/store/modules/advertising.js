import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    advertisingList:{
        category: "",
        list: []
    },
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    getAdvertisingList: function (context, payload) {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        return apis.getAdvertisingList(context, payload);
    },
};

const mutations = {
    setadvertisingListState: function (state ,payload) {
        
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
        state.advertisingList.list = payload.data
    },
};

const apis = {
    getAdvertisingList:function (context, parameters) {
        console.log("getAdvertisingList apis");
        return axios.post(
            "/advertising/advertisingList", parameters.params
        ).then(response => context.commit("setadvertisingListState", response))
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
