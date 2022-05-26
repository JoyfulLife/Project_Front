<template>
  
    <b-navbar type="dark" variant="black" class="fixed-top" >
      <b-container>
      <b-navbar-nav class="w-100 justify-content-between">
        <b-nav-item @click="movePage('/')">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="test">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="test001">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item @click="movePage('/adminSideBar')">sidebar</b-nav-item>

        <b-nav-item @click="movePage('/mycart')">MyCart</b-nav-item>

        <b-nav-item @click="movePage('/myPage')">MyPage</b-nav-item>

        <b-nav-item @click="movePage('/login')">Login</b-nav-item>
      </b-navbar-nav>
      </b-container>
    </b-navbar>

</template>

<script>

export default {
  name: "navi",
  computed: {

  },
  created() {
    
  },
  methods: {

    // 페이지 이동
    movePage(path){
      if(path === '/'){
        this.$router.push('/')
        }else if(path === '/adminSideBar'){
            this.$router.push('/adminSideBar')
          }else if(path === '/mycart'){
            this.$router.push('/mycart')
            }else if(path === '/login'){
            this.$router.push('/login')
              }else if(path === '/myPage'){
            this.$router.push('/myPage')
                }
    },


  },
};
</script>

<style lang="scss" scoped>

</style>
