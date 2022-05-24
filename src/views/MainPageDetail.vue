<template>
  <b-container>

    <b-row class="mt-5">

      <b-col cols="7">
        <b-card 
          no-body
          class="overflow-hidden"
          header-bg-variant="white"
          border-variant="white"
          >
          <b-embed
            class="embed"
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowfullscreen
        ></b-embed>
        </b-card>
      </b-col>

      <b-col cols="5">
        <b-card :title="advertisingListDetail.list.brand_name" sub-title="category ?">
          <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.    
            
          </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>

          
        </b-card>
      </b-col>

    </b-row>

    <b-button variant="primary" href="https://nbl.com.au/">사이트 바로 이동</b-button>
    <b-button variant="secondary">Secondary</b-button>
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="light">Light</b-button>
    <b-button variant="dark">Dark</b-button>

  </b-container>
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
        advertisingListDetail: state => state.advertisingListDetail,
      })
  },

  methods:{
      MainPage_Detail(){
          console.log("check click");
          this.$router.push('/main-page/detail');
      },

      getImageUrl() {
        
        return `https://raw.githubusercontent.com/JoyfulLife/Image/main/test.jpg`
      },

      resize() {
      console.log('resize')
    }
      
  },

  created() {
      
  }
};
</script>

<style lang="scss" scoped>
.backcolor {
    height: 100%;
    background: rgb(158, 160, 161);
    // background: radial-gradient(circle, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 63%, rgba(0,212,255,1) 100%);
    // background: rgb(0,142,255);
    // background: linear-gradient(180deg, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 20%, rgba(0,215,255,1) 100%);
}

.embed{
  width: 600px;
  height: 336px
}

// .components-container {
//     position: relative;
//     height: 100vh;
//   }

//   .left-container {
//     background-color: #F38181;
//     height: 100%;
//   }

//   .right-container {
//     background-color: #FCE38A;
//     height: 200px;
//   }

//   .top-container {
//     background-color: #FCE38A;
//     width: 100%;
//     height: 100%;
//   }

//   .bottom-container {
//     width: 100%;
//     background-color: #2b5bb4;
//     height: 100%;
//   }
</style>
