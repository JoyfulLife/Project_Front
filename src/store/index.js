import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 각 업무 모듈 추가

import client from "./modules/client";
import common from "./modules/common";
import tableList from "./modules/tableList";
import advertisingList from "./modules/advertising";
import cart from "./modules/cart";

// v-model을 사용함. 배포시 strict 모드 사용하지 말 것
export default new Vuex.Store({
  modules: {
    client,
    common,
    tableList,
    advertisingList,
    cart
  },
});
