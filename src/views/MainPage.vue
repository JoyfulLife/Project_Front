<template>
    <div>
        <b-row>
          <b-col cols="2" class="mt-5">
              <Sidebar></Sidebar>
          </b-col>
          <b-col cols="10">
            <b-row v-if="this.advertisingList.list.length != 0">
              <b-col 
                class="mt-5 img scale"
                cols="4"
                v-for="(item ,index) in advertisingList.list"
                :key="index"
               >
                  
                <b-card
                  class="image color card-img"
                  
                  :header="advertisingList.list[index].brand_name"
                  header-text-variant="white"
                  align="center"
                    
                  @click="MainPage_Detail(index)"
                  :img-src="getImageUrl(advertisingList.list[index].image)"
                  >
                    <!-- :img-src="getImageUrl(advertisingList.list[index].image)" -->
                  <b-card-text class="margin0 cardtextcolor">
                    
                    <b-form-rating 
                      v-model="advertisingList.list[index].rate"
                      readonly
                      icon-empty="heart"
                      icon-half="heart-half"
                      icon-full="heart-fill"
                      show-value
                      precision="0"
                      no-border
                      variant="danger"
                      />
                    
                    <p>Category : {{advertisingList.list[index].category}}</p>
                    <!-- <p>{{advertisingList.list[index].ad_no}}</p> -->
                    <p>{{advertisingList.list[index].url}}</p>
                  </b-card-text>
                        
                </b-card>
              </b-col>
            </b-row>

            
            <b-row v-if="this.advertisingList.list.length === 0">
            <ErrorPage></ErrorPage>
            </b-row>
          </b-col>
       </b-row>
    </div>
    
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import ErrorPage from '@/components/layout/ErrorPage.vue'

import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const tableListStore = createNamespacedHelpers("tableList");
const advertisingListStore = createNamespacedHelpers("advertisingList");
const clientStore = createNamespacedHelpers("client");

export default {
  name: "MainPage",

  data() {
      return {
        value: 4.4
      }
  },

  components: {
    Sidebar,
    ErrorPage
  },

  computed: {
      ...commonStore.mapState({
      common: state => state.login,
    }),
      ...tableListStore.mapState({
          tableList: state => state.tableList,
        }),
      ...advertisingListStore.mapState({
        advertisingList: state => state.advertisingList,
        advertisingListDetail: state => state.advertisingListDetail,
        ad_noList: state => state.ad_noList,
      }),
      ...clientStore.mapState({
      client: state => state.client,
      }),

  },

  methods:{
      ...tableListStore.mapActions(["retrieveClient"]),

      MainPage_Detail(index){
          
          this.advertisingListDetail.list = this.advertisingList.list[index]
          this.advertisingListDetail.list.user_id = this.client.list.user_ID
          console.log(this.advertisingListDetail.list.user_id);
          this.$router.push('/main-page/detail');
      },
      message() {
      return 'The webmaster said that you can not enter this page...'
    },

    //github 에서 이미지 받아옴.
    getImageUrl(image) {
        
        return `https://raw.githubusercontent.com/JoyfulLife/Image/main/${image}`
      }
      
  },

  created() {
    this.advertisingList.category = "All";
    this.retrieveClient();
      
  }
};
</script>

<style lang="scss" scoped>
.margin0 > p {
  margin: 0;
}
.image {
  .card-img{
  height: 160.43px;
  width: 296.80px;
  background-color: rgb(230, 14, 14);
  }
}
.b-card.header-bg-variant {
  background-color: #1482f0;
}
.scale {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/
}
.scale:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}
.img {width:325px; height:380px; overflow:hidden } /* 부모를 벗어나지 않고 내부 이미지만 확대 */




.color {
background: rgb(74,68,195);
background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}

.cardtextcolor{
  
  background-color: white;
  
}
.card-body{
  background-color: white;
}
</style>