<template>
  <div id="app">

    <Navi></Navi>

    <!-- <div v-if="this.common.loginPage !== 'Y'"> -->
    <Header></Header>
    <!-- </div> -->

<!--    <div>-->
<!--      <router-link to="/login">Dashboard</router-link> |-->
<!--      <router-link to="/grid-system">GridSystem</router-link>-->
<!--    </div>-->

    <!-- push 확인 (personal laptop) -->
    <!-- 라우터 -->
    <router-view></router-view>
    
    <!-- <MainPage></MainPage> -->

<!--First Page -->
    
    <div class="mt-5 mb-5" v-if="$route.path === '/'">
      <h1><strong>Join the We</strong></h1>
        <p>여기는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다.</p>
        <p>다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.</p>
        <p>당신도 세상을 바꾸고 싶나요? 여기로 오세요!!</p>
        <b-button pill variant="primary" href="main-page">Button</b-button>
    </div>

    <div style="height: auto; width: 100%; border-top:1px solid gold;">
      
      <!-- <b-img width="200" height="200" center src="https://raw.githubusercontent.com/JoyfulLife/Image/main/vueImage.jpg" alt="Center image"></b-img> -->
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import store from './store'
import Header from "@/components/layout/Header.vue";
import Navi from "@/components/layout/Navi.vue";
import Footer from './components/layout/Footer.vue';
// import MainPage from './views/MainPage.vue'

import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");

export default {
  name: 'App',
  store,
  components: {
    Header,
    Navi,
    Footer,
    // MainPage
  },
  computed: {
      ...commonStore.mapState({
      common: state => state.login,
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
