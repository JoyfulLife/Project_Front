import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    AdTable: {
        list: [],
        category: "All",
        page: 1,
        limit: 10,
        limit_st: 0,
        limit_fin: 0,
        adminCheck: "Yes",
        message: ""
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
};

const mutations = {
    setgetAdTableState: function (state ,payload) {
        console.log(payload);
        state.AdTable.list = payload.data;
        payload.data.forEach(cartItem => cartItem.selected = false);
        state.AdTable.message = payload.data.message
        // state.cartList.allCount = payload.data.cartCount;
    },

    setsendConfirmButtonState: function (state ,payload) {
        console.log(payload);
        state.AdTable.list = payload.data;
        // payload.data.forEach(cartItem => cartItem.selected = false);
        // state.AdTable.message = payload.data.message
        // state.cartList.allCount = payload.data.cartCount;
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
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
