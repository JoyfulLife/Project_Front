import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    advertisingList:{
        category: "",
        list: [],
        adminCheck: "",
        error: ""
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

};

const mutations = {
    setadvertisingListState: function (state ,payload) {
        console.log(payload);
        state.advertisingList.list = payload.data.res
        if(payload.data.error){
            state.advertisingList.error = payload.data.error
        }
    },

    setcountAdState: function (state ,payload) {
        console.log(payload);
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
