import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    adRequest:{
        user_ID:"",
        category:"",
        brand_name:"",
        url:"",
        remarks:"",
        image:null,
        
    }
}

const state = cloneDeep(defaultState);

const getters = {

};
const actions = {
    sendAdRequest: function (context, payload) {
        console.log("AAAAAAAAAAAAAAAAAAAA");
        return apis.sendAdRequest(context, payload);
    },
};

const mutations = {
    setsendAdRequestState: function (state ,payload) {
        console.log(payload);
    },
};

const apis = {

    sendAdRequest:function (context, parameters) {
        console.log("BBBBBBBBBBBBBBBBBBB");
        return axios.post(
            "/cart/cartList", parameters.params,
        ).then(response => context.commit("setsendAdRequestState", response))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
