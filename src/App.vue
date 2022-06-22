<template>
  <div id="app">
    <Navi></Navi>
    <Header></Header>
    <router-view></router-view>
    
    <div class="mt-5 mb-5" v-if="$route.path === '/'">
      <h1><strong>Join the We</strong></h1>
      <p>여기는 여러 광고를 볼 수 있는 곳입니다!</p>
      <p>카테고리별로 광고를 볼 수 있고 장바구니에 담을 수도 있습니다.</p>
      <p>손쉽게 정보를 얻고 싶나요? 그렇다면 버튼을 누르세요!!</p>
      <b-button class="color" pill variant="primary" @click="movePage('/main-page')">Button</b-button>

      <h1 class="mt-5"><strong>Make the We</strong></h1>
      <p>여기는 광고를 신청할 수 있는 곳입니다.</p>
      <p>내가 원하는 광고를 신청하고 전 세계 모든 사람이 접근할 수 있습니다.</p>
      <p>나만의 광고를 널리 알리고 싶나요? 그렇다면 버튼을 누르세요!!</p>
      <b-button class="color" pill variant="primary" @click="movePage('/ad-request-page')">Button</b-button>

      <!-- <div v-if="this.client.list.user_ID === 'admin'"> -->
      <h1 class="mt-5"><strong>Manage the We</strong></h1>
      <p>여기는 관리자만 이용할 수 있는 곳입니다.</p>
      <p>이용자가 신청한 광고를 수락, 거절할 수 있습니다.</p>
      <p>올바른 우리를 만들기 위한다면 버튼을 누르세요!!</p>
      <b-button class="color" pill variant="primary" @click="movePage('/admin')">Button</b-button>
      <!-- </div> -->
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
      else if(path === '/admin'){

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
        this.$router.push('/admin');
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

.color {
background: rgb(74,68,195);
background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}
</style>
