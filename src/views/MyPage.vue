<template>
    <div>
        <b-container class="mt-5">

          <b-row class="text">
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  name
                </template>
                <b-form-input
                  v-model="this.client.list.name"
                  
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  user_ID
                </template>
                <b-form-input
                  v-model="this.client.list.user_ID"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="text mt-3">
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  password
                </template>
                <b-form-input
                  v-model="this.client.list.passWord"
                  
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  Phone number
                </template>
                <b-form-input
                  v-model="this.client.list.phone_no"
                  
                />
              </b-form-group>
            </b-col>
          </b-row>

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
.text {
  text-align: left;
}
</style>
