<template>
  <div id="app">
    <Navi></Navi>
    <Header></Header>
    <router-view></router-view>
    
    <div class="mt-5 mb-5" v-if="$route.path === '/'">
      <h1><strong>Join the We</strong></h1>
      <p>여기는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다.</p>
      <p>다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.</p>
      <p>당신도 세상을 바꾸고 싶나요? 여기로 오세요!!</p>
      <b-button pill variant="primary" @click="movePage('/main-page')">Button</b-button>

      <h1 class="mt-5"><strong>Make the We</strong></h1>
      <p>여기는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다.</p>
      <p>다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.</p>
      <p>당신도 세상을 바꾸고 싶나요? 여기로 오세요!!</p>
      <b-button pill variant="primary" @click="movePage('/ad-request-page')">Button</b-button>

      <h1 class="mt-5"><strong>Management the We</strong></h1>
      <p>여기는 우리의 일상을 더 좋게 만들고 싶은 멋진 동료입니다.</p>
      <p>다양한 생각을 자유롭게 나누며, 언제나 놀라운 결과를 만들어내죠.</p>
      <p>당신도 세상을 바꾸고 싶나요? 여기로 오세요!!</p>
      <b-button pill variant="primary" @click="movePage('/main-page')">Button</b-button>
    </div>

    <div class="mt-5" style="height: auto; width: 100%; border-top:1px solid gold;">
      
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
const clientStore = createNamespacedHelpers("client");

export default {
  name: 'App',
  store,
  components: {
    Header,
    Navi,
    Footer,
    // MainPage
  },

  methods: {
    movePage(path) {
      if(path === '/main-page'){
        this.$router.push('/main-page')
      }else if(path === '/ad-request-page'){
        //로그인 체크!!!! (로그인이 되어 있어야 광고 요청을 할 수 있다.)

        if(this.client.list.loginStatus !== "Yes"){
          this.$bvModal.msgBoxOk(" 로그인이 필요합니다.! 로그인 페이지로 이동합니다.", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
          })
          .then(value => {
          this.okbutton = value
          if(this.okbutton === true){
            this.$router.push('/login')      
          }
        })
        }else if (this.client.list.loginStatus === "Yes"){
        this.$router.push('/ad-request-page')
        }
      }
    }
  },

  computed: {
    ...commonStore.mapState({
      common: state => state.login,
    }),
    ...clientStore.mapState({
      client: state => state.client
    }),
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
