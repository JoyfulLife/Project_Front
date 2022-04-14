<template>
  <div id="app">
    <Header></Header>
    <Navi></Navi>
<!--    <div>-->
<!--      <router-link to="/login">Dashboard</router-link> |-->
<!--      <router-link to="/grid-system">GridSystem</router-link>-->
<!--    </div>-->

    <!-- push 확인22 -->
    <!-- 라우터 -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
import Header from "@/components/layout/Header.vue";

import Navi from "@/components/layout/Navi.vue";

export default {
  name: 'App',
  store,
  components: {
    Header,
    Navi
  }
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
