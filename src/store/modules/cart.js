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
        allCount: 0
    },

    deleteCartList: {
        list: []
    }
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
        console.log("DELETE Actions");
        return apis.sendDeleteCartList(context, payload);
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

    setSendDeleteCartListState: function () {
        console.log("DELETE mutations");
        const newInstance = cloneDeep(defaultState.deleteCartList);
        state.deleteCartList = newInstance;
        // payload.data.res.forEach(cartItem => cartItem.selected = false);
        // state.cartList.list = payload.data.res;
        // state.cartList.allCount = payload.data.cartCount;
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
        // console.log("DELETE apis");
        return axios.post(
            "/cart/deleteCartList", parameters.params,
        ).then(response => context.commit("setSendDeleteCartListState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
