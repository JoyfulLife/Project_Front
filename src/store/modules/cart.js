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
    insertAddCart: function (context, payload) {
        console.log("car action!!!!!!! 확인!");
        return apis.insertAddCart(context, payload);
    },
    
};

const mutations = {
    setInsertAddCartState: function (state ,payload) {
        
        state.cartList.list = payload.data;
    },
};

const apis = {
    insertAddCart:function (context, parameters) {
        console.log("car apis 확인!");
        console.log(parameters.params);
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
