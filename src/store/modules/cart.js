import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    cartList: {
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
    
};

const mutations = {

    setretrieveCartState: function (state ,payload) {
        
        state.cartList.list = payload.data;
    },

    setInsertAddCartState: function (state ,payload) {
        
        state.cartList.list = payload.data;
    },
};

const apis = {

    retrieveCart:function (context) {
        
        return axios.get(
            "/cartList",
        ).then(response => context.commit("setretrieveCartState", response))
    },
    
    insertAddCart:function (context, parameters) {
        
        return axios.post(
            "/cart",  parameters.params,
        ).then(response => context.commit("setInsertAddCartState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
