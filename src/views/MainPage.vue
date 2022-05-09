<template>
    <div v-if="this.common.loginPage !== 'Y'">
        <b-row>
            <b-col cols="3" class="mt-5">
                <Sidebar></Sidebar>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col 
                        class="mt-5"
                        cols="4"
                        v-for="(value ,name) in this.tableList.list"
                        :key="name">
                        <b-card
                            border-variant="primary"
                            header="Primary"
                            header-bg-variant="primary"
                            header-text-variant="white"
                            align="center"
                        >
                        <b-card-text>
                            {{tableList.list[name].name}}
                        </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                    
            </b-col>
            
            
                <!-- 집 노트북 push 확인! -->
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
      ...tableListStore.mapActions(["retrieveClient"])
  },

  created() {
      this.retrieveClient();
      
  }
};
</script>

<style lang="scss" scoped>

</style>
