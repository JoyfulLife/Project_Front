import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    cartList: {
        list: [],
        page: 1,
        limit: 10,
        user_ID: "",
        limit_st: 0,
        limit_fin: 0,
        category: "",
        brand_name: "",
        url: "",
        allCheckBox: false,
        allCount: 0,
        failMessage: "",
        successMessage: "",
    },

    deleteCartList: {
        list: []
    },

    myAdRequest: {
        list: [],
        page: 1,
        limit: 10,
        allCount: 0,
        user_id: "",
        limit_st: 0,
        limit_fin: 0,
        category: "",
        brand_name: "",
        url: "",
        allCheckBox: false,
        message: ""
    },

    deleteMyAdList: {
        list: []
    },
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {

    retrieveCart: function (context, payload) {
        
        return apis.retrieveCart(context, payload);
    },

    insertAddCart: function (context, payload) {
        
        return apis.insertAddCart(context, payload);
    },
    
    initializeCartListSearch: function (context) {
        context.commit("initializeCartListSearchState");
    },

    sendDeleteCartList: function (context, payload) {
        
        return apis.sendDeleteCartList(context, payload);
    },

    retrieveMyAd: function (context, payload) {
        
        return apis.retrieveMyAd(context, payload);
    },

    sendDeleteMyAdList: function (context, payload) {
        
        return apis.sendDeleteMyAdList(context, payload);
    },
};

const mutations = {

    setretrieveCartState: function (state ,payload) {
        
        payload.data.res.forEach(cartItem => cartItem.selected = false);
        state.cartList.list = payload.data.res;
        state.cartList.allCount = payload.data.cartCount;
    },

    setInsertAddCartState: function (state ,payload) {
        
        state.cartList.list = payload.data;
    },

    initializeCartListSearchState: function (state) {
        //list: [] 때문에 초기화 진행 x
        // const newInstance = cloneDeep(defaultState.cartList);
        // state.cartList = newInstance;
        state.cartList.category = "",
        state.cartList.brand_name = "",
        state.cartList.url = ""
    },

    setSendDeleteCartListState: function (state ,payload) {
        
        const newInstance = cloneDeep(defaultState.deleteCartList);
        state.deleteCartList = newInstance;
        
        //실패시 메시지를 받아온다.
        state.cartList.failMessage = payload.data.failMessage;
        state.cartList.successMessage = payload.data.successMessage;
        
    },

    setretrieveMyAdState: function (state ,payload) {
        
        payload.data.res.forEach(cartItem => cartItem.selected = false);
        state.myAdRequest.list = payload.data.res;
        state.myAdRequest.allCount = payload.data.myAdCount;
    },

    setsendDeleteMyAdListState: function (state ,payload) {
        
        // const newInstance = cloneDeep(defaultState.deleteCartList);
        // state.deleteCartList = newInstance;
        
        // //실패시 메시지를 받아온다.
        // state.cartList.failMessage = payload.data.failMessage;
        state.myAdRequest.message = payload.data.message;
        console.log(payload)
    },
};

const apis = {

    retrieveCart:function (context, parameters) {
        
        return axios.post(
            "/cart/cartList", parameters.params,
        ).then(response => context.commit("setretrieveCartState", response))
    },
    
    insertAddCart:function (context, parameters) {
        
        return axios.post(
            "/cart/insertCart",  parameters.params,
        ).then(response => context.commit("setInsertAddCartState", response))
    },

    sendDeleteCartList:function (context, parameters) {
        
        return axios.post(
            "/cart/deleteCartList", parameters.params,
        ).then(response => context.commit("setSendDeleteCartListState", response))
    },

    retrieveMyAd:function (context, parameters) {
        
        return axios.post(
            "/advertising/myAdRequest", parameters.params,
        ).then(response => context.commit("setretrieveMyAdState", response))
    },

    sendDeleteMyAdList:function (context, parameters) {
        
        return axios.post(
            "/advertising/deleteMyAdRequest", parameters.params,
        ).then(response => context.commit("setsendDeleteMyAdListState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
