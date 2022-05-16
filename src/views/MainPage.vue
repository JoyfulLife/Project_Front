<template>
    <div v-if="this.common.loginPage !== 'Y'">
        <!-- <b-row>
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
        </b-row> -->
        <b-card no-body>
            <b-tabs pills card vertical nav-wrapper-class="w-25">
                <b-tab title="Tab 1" active><b-card-text><b-row>
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
                </b-row></b-card-text></b-tab>
                <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
                <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
            </b-tabs>
        </b-card>
    </div>
    
</template>

<script>
// import Sidebar from '@/components/layout/Sidebar.vue';

import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const tableListStore = createNamespacedHelpers("tableList");

export default {
  name: "MainPage",

  components: {
    // Sidebar
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
