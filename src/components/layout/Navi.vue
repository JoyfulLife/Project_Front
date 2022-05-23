<template>
  
    <b-navbar type="dark" variant="black" class="fixed-top" >
      <b-container>
      <b-navbar-nav class="w-100 justify-content-between">
        <b-nav-item href="/">Home</b-nav-item>

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
        <b-nav-item @click="moveSidebar">sidebar</b-nav-item>

        <b-nav-item href="/table">Table</b-nav-item>

        <b-nav-item @click="move">MyPage</b-nav-item>

        <b-nav-item href="/login">Login</b-nav-item>
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
    move() {
      this.$router.push('/myPage')
    },
    moveSidebar() {
      this.$router.push('/adminSideBar')
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
