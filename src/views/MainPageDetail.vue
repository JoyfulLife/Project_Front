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
            
            allowfullscreen
        ></b-embed>
        </b-card>
        <!-- src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" -->
      </b-col>

      <b-col cols="5">
        <b-card :title="advertisingListDetail.list.brand_name" sub-title="category ?">
          <b-card-text class="text">
            {{advertisingListDetail.list.remarks}}
          </b-card-text>

          <b-card-text class="text">A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>

          
        </b-card>
      </b-col>

    </b-row>

    <b-button variant="primary" href="https://nbl.com.au/">사이트 바로 이동</b-button>
    <b-button variant="secondary" class="margin" @click="AddCart">Add Cart</b-button>
    <!-- <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>
    <b-button variant="info">Info</b-button>
    <b-button variant="light">Light</b-button>
    <b-button variant="dark">Dark</b-button> -->

  </b-container>
</template>

<script>


import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const advertisingListStore = createNamespacedHelpers("advertisingList");
const clientStore = createNamespacedHelpers("client");
const cartStore = createNamespacedHelpers("cart");



export default {
  name: "mainPageDeatail",
  data: function() {
      return {
        okbutton: '',
        
      }

    },
  components: {

    },


  computed: {
      ...commonStore.mapState({
      common: state => state.login,
      }),
      ...advertisingListStore.mapState({
        advertisingList: state => state.advertisingList,
        advertisingListDetail: state => state.advertisingListDetail,
      }),
      ...clientStore.mapState({
      client: state => state.client,
      signUp: state => state.signUp,
      }),
      ...cartStore.mapState({
      cartList: state => state.cartList,
      }),
  },

  methods:{

    ...cartStore.mapActions(["insertAddCart"]),

      MainPage_Detail(){
          console.log("check click");
          this.$router.push('/main-page/detail');
      },

      getImageUrl() {
        
        return `https://raw.githubusercontent.com/JoyfulLife/Image/main/test.jpg`
      },

      resize() {
        console.log('resize')
      },

      AddCart(){
        
        if(this.client.list.loginStatus === "Yes"){
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
        }else {
          //로그인 했을 경우에는 장바구니에 들어간다.
          const args = {
            params: this.advertisingListDetail,
            };
            this.insertAddCart(args)
        }
      }

      
  },

  created() {
      
  }
};
</script>

<style lang="scss" scoped>
.margin{
  margin-left: 2%;
}
.text{
  text-align: left;
}
// .backcolor {
    // height: 100%;
    // background: rgb(158, 160, 161);
    // background: radial-gradient(circle, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 63%, rgba(0,212,255,1) 100%);
    // background: rgb(0,142,255);
    // background: linear-gradient(180deg, rgba(0,142,255,1) 0%, rgba(9,75,121,1) 20%, rgba(0,215,255,1) 100%);
// }

.embed{
  width: 600px;
  height: 336px
}

</style>
