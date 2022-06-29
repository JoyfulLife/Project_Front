import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    AdTable: {
        list: [],
        category: "",
        ad_no: "",
        brand_name: "",
        url: "",
        page: 1,
        limit: 10,
        limit_st: 0,
        limit_fin: 0,
        adminCheck: "Yes",
        message: "",
        allCount: 0,
    },

    confirmList: {
        list: []
    }
}

const state = cloneDeep(defaultState);

const getters = {
};
const actions = {
    getAdTable: function (context, payload) {
        
        return apis.getAdTable(context, payload);
    },

    sendConfirmButton: function (context, payload) {
        
        return apis.sendConfirmButton(context, payload);
    },

    sendDenyButton: function (context, payload) {
        
        return apis.sendDenyButton(context, payload);
    },

    initializeAdTableListSearch: function (context) {
        context.commit("initializeAdTableSearchState");
    },
};

const mutations = {
    setgetAdTableState: function (state ,payload) {
        console.log(payload);
        payload.data.res.forEach(cartItem => cartItem.selected = false);
        state.AdTable.list = payload.data.res;
        state.AdTable.message = payload.data.message
        state.AdTable.allCount = payload.data.AdListCount
        // state.cartList.allCount = payload.data.cartCount;
    },

    setsendConfirmButtonState: function (state ,payload) {
        console.log(payload);
        state.AdTable.list = payload.data;
        // payload.data.forEach(cartItem => cartItem.selected = false);
        // state.AdTable.message = payload.data.message
        // state.cartList.allCount = payload.data.cartCount;
    },

    setsendDenyButtonState: function (state ,payload) {
        console.log(payload);
        state.AdTable.list = payload.data;
        // state.AdTable.allCount = payload.data.AdListCount;
        // payload.data.forEach(cartItem => cartItem.selected = false);
        // state.AdTable.message = payload.data.message
        // state.cartList.allCount = payload.data.cartCount;
    },

    initializeAdTableSearchState: function (state) {
        state.AdTable.ad_no = "",
        state.AdTable.category = "",
        state.AdTable.brand_name = "",
        state.AdTable.url = ""
    },
};

const apis = {
    getAdTable:function (context, parameters) {
        
        return axios.post(
            "advertising/advertisingList", parameters.params,
        ).then(response => context.commit("setgetAdTableState", response))
    },

    sendConfirmButton:function (context, parameters) {
        
        return axios.post(
            "advertising/advertisingList", parameters.params,
        ).then(response => context.commit("setsendConfirmButtonState", response))
    },

    sendDenyButton:function (context, parameters) {
        
        return axios.post(
            "advertising/advertisingList", parameters.params,
        ).then(response => context.commit("setsendDenyButtonState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
