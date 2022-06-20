import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    advertisingList:{
        category: "",
        list: [],
        adminCheck: ""
    },

    advertisingListDetail:{
        list: []
    },

    count_ad:{
        list: []
    }
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    getAdvertisingList: function (context, payload) {
        
        return apis.getAdvertisingList(context, payload);
    },

    getCountAd: function (context, payload) {
        
        return apis.getCountAd(context, payload);
    },

};

const mutations = {
    setadvertisingListState: function (state ,payload) {
        
        state.advertisingList.list = payload.data.res
    },

    setcountAdState: function (state ,payload) {
        
        state.count_ad.list = payload.data
    },
};

const apis = {
    getAdvertisingList:function (context, parameters) {
        
        return axios.post(
            "/advertising/advertisingList", parameters.params
        ).then(response => context.commit("setadvertisingListState", response))
    },

    getCountAd:function (context) {
        
        return axios.get(
            "/advertising/countAdvertisingList",
        ).then(response => context.commit("setcountAdState", response))
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
