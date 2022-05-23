<template>
  <div class="backcolor">
      mainPageDeatail
        <b-img-lazy :src="getImageUrl()" alt="Image 1"></b-img-lazy>
  </div>
    
</template>

<script>

import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const advertisingListStore = createNamespacedHelpers("advertisingList");

export default {
  name: "mainPageDeatail",

  components: {
    
  },

  computed: {
      ...commonStore.mapState({
      common: state => state.login,
    }),
      ...advertisingListStore.mapState({
        advertisingList: state => state.advertisingList,
      })
  },

  methods:{
      MainPage_Detail(){
          console.log("check click");
          this.$router.push('/main-page/detail');
      },
      getImageUrl() {
        
        return `https://raw.githubusercontent.com/JoyfulLife/Image/main/test.jpg`
      }
      
  },

  created() {
      
  }
};
</script>

<style lang="scss" scoped>
.backcolor {
    height: 100%;
    // background: rgb(0,142,255);
    // background: radial-gradient(circle, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 63%, rgba(0,212,255,1) 100%);
    // background: rgb(0,142,255);
    // background: linear-gradient(180deg, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 20%, rgba(0,215,255,1) 100%);
}
</style>
