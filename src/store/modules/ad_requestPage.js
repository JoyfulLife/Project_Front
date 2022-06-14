import {cloneDeep} from "lodash";
import axios from "axios";

const defaultState = {
    adRequest:{
        user_id:"",
        category:"",
        brand_name:"",
        url:"",
        remarks:"",
        image:null,
        
        message: ""
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
        state.adRequest.message = payload.data.message
        console.log(payload);
    },
};

const apis = {

    sendAdRequest:function (context, parameters) {
        console.log("BBBBBBBBBBBBBBBBBBB");
        return axios.post(
            "/advertising/insertAdvertising", parameters.params,
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
