<template>
  <div>
    <b-button @click="aaa">Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
</template>
<script>

import { createNamespacedHelpers } from "vuex";

const clientStore = createNamespacedHelpers("client");

export default {
methods:{
  aaa(){
    console.log('AAAAA');
    //this.$ex.movePage("/good");
  }
},
  computed:{
    ...clientStore.mapState({
      client: state => state.client,
    })
  }
}
</script>

<style lang="scss">

</style>