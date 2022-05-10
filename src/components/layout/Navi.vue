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
        <b-nav-item-dropdown text="Lang">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="/table">Table</b-nav-item>

        <b-nav-item href="/login/myPage">MyPage</b-nav-item>

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
    // // 메뉴 리스트를 대메뉴 기준으로 분리 저장 splitMenuArray
    // const list = this.$ex.menuList.filter((obj) => obj.USE_YN == "Y");
    // const splitMenuArray = [];
    // let beginIndex = -1;
    // let endIndex = 0;
    // let menuOrd = 0;
    // list.forEach((obj, index) => {
    //   if (menuOrd != obj.MENU_ORD) {
    //     if (index > 0) {
    //       splitMenuArray.push(list.slice(beginIndex, endIndex));
    //     }
    //     beginIndex = index;
    //     menuOrd = obj.MENU_ORD;
    //   }
    //   endIndex++;
    //   if (list.length == index + 1) {
    //     splitMenuArray.push(list.slice(beginIndex, endIndex));
    //   }
    // });
    //
    // const navi = {
    //   list,
    //   splitMenuArray,
    // };
    // this.setNaviData(navi);
  },
  methods: {
    // actions 매핑
    // ...appStore.mapActions({
    //   setNaviData: types.SET_NAVI_DATA,
    // }),
  },
};
</script>

<style lang="scss" scoped>

</style>
