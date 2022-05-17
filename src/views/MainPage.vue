<template>
    <div v-if="this.common.loginPage !== 'Y'">
        <b-row>
            <b-col cols="3" class="mt-5">
                <Sidebar></Sidebar>
            </b-col>
            <b-col cols="9">
                <b-row>
                    
                    <b-col 
                        class="mt-5 img scale"
                        cols="4"
                        v-for="(value ,name) in this.tableList.list"
                        :key="name"
                        >
                        <b-card
                            border-variant="primary"
                            header="Primary"
                            header-bg-variant="success"
                            header-text-variant="white"
                            align="center"
                            img-src="https://picsum.photos/600/300/?image=25"
                            @click="aaa"
                        >
                            <!-- <div class="img">
                                <div class="scale"><></div>
                            </div> -->
                        <b-card-text>
                            {{tableList.list[name].name}}
                        </b-card-text>
                        </b-card>
                    </b-col>
                    
                </b-row>
            </b-col>
        </b-row>
    </div>
    
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';

import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const tableListStore = createNamespacedHelpers("tableList");

export default {
  name: "MainPage",

  components: {
    Sidebar
  },

  computed: {
      ...commonStore.mapState({
      common: state => state.login,
    }),
    ...tableListStore.mapState({
        tableList: state => state.tableList,
      }),
  },

  methods:{
      ...tableListStore.mapActions(["retrieveClient"]),

      aaa(){
          console.log("check click");
      },
      
  },

  created() {
      this.retrieveClient();
      
  }
};
</script>

<style lang="scss" scoped>
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
.img {width:325px; height:280px; overflow:hidden } /* 부모를 벗어나지 않고 내부 이미지만 확대 */


</style>

