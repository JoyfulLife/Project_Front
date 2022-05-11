<template>
    <div>
        <b-container>
            <b-form-input class="mt-3"  placeholder="Enter your name" v-model="this.client.name"></b-form-input>
            <b-form-input class="mt-3"  placeholder="Enter your name" v-model="this.client.passWord"></b-form-input>
            <b-form-input class="mt-3"  placeholder="Enter your name" v-model="this.client.user_ID"></b-form-input>
        </b-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");

export default {
  name: "MyPage",
  methods:{

  },
  computed:{
      ...clientStore.mapState({
      client: state => state.client,
    }),
  }
};
</script>

<style lang="scss" scoped>

</style>
