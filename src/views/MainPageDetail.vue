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
            src="https://www.youtube.com/embed/NbMUCXUnYyA"
            allowfullscreen
        ></b-embed>
        </b-card>
        <!-- src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" -->
      </b-col>

      <b-col cols="5">
        <b-card 
          :title="advertisingListDetail.list.brand_name"
          class="image"
          :img-src="getImageUrl(advertisingListDetail.list.image)"
          >
          <b-card-text class="text-right">
            category : {{advertisingListDetail.list.category}}
          </b-card-text>
          <b-card-text class="text">
            {{advertisingListDetail.list.remarks}}
          </b-card-text>

          <b-card-text class="text"></b-card-text>

          <!-- <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link> -->

          
        </b-card>

        <p class="p">원하는 만큼 하트를 눌러주세요</p>
        <b-form-rating
          stars="5"
          icon-empty="heart"
          icon-half="heart-half"
          icon-full="heart-fill"
          icon-clear="slash-circle"
          show-clear
          variant="danger"
          v-model="advertisingListDetail.list.rate"
        />
      </b-col>

    </b-row>

    <b-button v-if="this.client.list.user_ID != 'admin'" class="mt-5 sitecolor" :href="this.advertisingListDetail.list.url">사이트 바로 이동</b-button>
    <b-button v-if="this.client.list.user_ID != 'admin'" class="mt-5 margin color" @click="AddCart">Add Cart</b-button>
    <b-button v-if="this.client.list.user_ID === 'admin'" class="mt-5 margin color" @click="back">뒤로 가기</b-button>

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
        questionAddCart: '',
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

      getImageUrl(image) {
        
        return `https://raw.githubusercontent.com/JoyfulLife/Image/main/${image}`
      },

      resize() {
        console.log('resize')
      },

      AddCart(){
        
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
        }else {
          //로그인 했을 경우에는 장바구니에 들어간다.
          this.$bvModal.msgBoxConfirm(' 카트에 담겠습니까??? ', {
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
              this.questionAddCart = value

              // ok 버튼을 눌러야 가입을 할 수 있음.
              if(this.questionAddCart === true){
                const args = {
                  params: this.advertisingListDetail.list,
                  };
                  this.advertisingListDetail.list.rate
                this.insertAddCart(args).then(this.checkMessage)
              }

            })
        }
        
      },

      checkMessage(){
        console.log("AAAAAAA");
        if(this.cartList.successMessage != ""){
            this.$bvModal.msgBoxOk(this.cartList.successMessage , {
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'warning',
            okTitle: 'YES',
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
            })
          }
      },

      back(){
        this.$router.push('/admin');
      },
      
  },

  created() {
      this.advertisingListDetail.list.user_id = this.client.list.user_ID
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

.embed{
  width: 600px;
  height: 336px
}

.text-center{
  text-align: center;
}

.p{
  margin-bottom: 0;
  margin-top: 5%;
  text-align: left;
}

.color {
  background: rgb(74,68,195);
  background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}

.sitecolor{
  background: rgb(68,139,12);
  background: linear-gradient(90deg, rgba(68,139,12,1) 0%, rgba(6,74,51,1) 100%);
}
.image {
  .card-img{
  height: 169.43px;
  width: 298.59px;
  }
  align-items: center;
}
</style>
