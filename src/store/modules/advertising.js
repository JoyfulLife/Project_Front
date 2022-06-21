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
    },

    ad_noList:{
        list:[]
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

    getAd_no: function (context, payload) {
        console.log("AAAAAAAAAAAAAAAAA");
        return apis.getAd_no(context, payload);
    },

};

const mutations = {
    setadvertisingListState: function (state ,payload) {
        
        state.advertisingList.list = payload.data.res
    },

    setcountAdState: function (state ,payload) {
        
        state.count_ad.list = payload.data
    },

    setgetAd_no_State: function (state ,payload) {
        console.log("CCCCCCCCCCCCCCCC");
        state.ad_noList.list = payload.data
        console.log(payload);
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

    getAd_no:function (context, parameters) {
        console.log("BBBBBBBBBBB");
        return axios.post(
            "/advertising/ad_no", parameters.params
        ).then(response => context.commit("setgetAd_no_State", response))
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
