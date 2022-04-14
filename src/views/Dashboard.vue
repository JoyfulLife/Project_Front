<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col class="py-3">
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="organization">
                <template #label>

                </template>
                <b-form-input
                  id="organization"
                  v-model="client.userID"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label-for="organization">
                <template #label>

                </template>
                <b-form-input
                  id="organization"

                />
              </b-form-group>
            </b-col>
          </b-row>


        </b-col>
      </b-row>
      <b-button @click="backEnd">Button</b-button>
    </b-container>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");

export default {
  name: "Dashboard",
  data: function() {
    return {

    }

  },
methods:{
  ...clientStore.mapActions(["retrieveClient"]),
  backEnd(){

    this.retrieveClient();

  },
},

  computed:{
    ...clientStore.mapState({
      client: state => state.client,
    })
  },
  created() {
  },

}
</script>

<style lang="scss">

</style>