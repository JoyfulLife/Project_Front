import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 각 업무 모듈 추가

import client from "./modules/client";
import common from "./modules/common";

// v-model을 사용함. 배포시 strict 모드 사용하지 말 것
export default new Vuex.Store({
  modules: {
    client,
    common
  },
});
