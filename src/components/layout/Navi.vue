<template>
  
    <b-navbar type="dark" variant="black" class="fixed-top" >
      <b-container>
      <b-navbar-nav class="w-100 justify-content-between">
        <b-nav-item @click="movePage('/')">Home</b-nav-item>

        <!-- Navbar dropdowns -->

        <b-nav-item @click="movePage('/mycart')">MyCart</b-nav-item>

        <b-nav-item @click="movePage('/myPage')">MyPage</b-nav-item>

        <b-nav-item v-if="this.client.list.loginStatus === 'Yes' " @click="init()">LogOut</b-nav-item>

        <b-nav-item v-else @click="movePage('/login')">Login</b-nav-item>
      </b-navbar-nav>
      </b-container>
    </b-navbar>

</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");

export default {
  name: "navi",
  data: function() {
    return {
      logout: '',
    }

  },
  computed: {
      ...clientStore.mapState({
      client: state => state.client,
    }),
  },
  created() {
    
  },
  methods: {
    ...clientStore.mapActions(["initializeClient"]),
    // 페이지 이동
    movePage(path){
      if(path === '/'){
        this.$router.push('/')
        }else if(path === '/adminSideBar'){
            this.$router.push('/adminSideBar')
          }else if(path === '/mycart'){
            //로그인 체크!!!! (로그인이 되어 있어야 Mycart에 들어갈 수 있다.)
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
              this.$router.push('/mycart')
              }

            }else if(path === '/login'){
            this.$router.push('/login')
              }else if(path === '/myPage'){
            this.$router.push('/myPage')
                }
    },

    init(){

      this.$bvModal.msgBoxConfirm(' 로그아웃 하시겠습니까? ', {
        // title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.logout = value

          // ok 버튼을 눌러야 가입을 할 수 있음.
          if(this.logout === true){
            this.initializeClient().then(this.$router.push('/'));
          }

        })
        .catch(err => {
          this.boxTwo = err
        })
    }


  },
};
</script>

<style lang="scss" scoped>

</style>
