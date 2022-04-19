<template>
  <div>
    <b-container class="mt-5">
      
      <b-iconstack font-scale="5" rotate="90">
            <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
      </b-iconstack>

      <b-tabs content-class="mt-3" align="center" class="mt-5" style="max-width: 40rem;">
        <b-tab title="로그인" active>
        <p>
          <b-card class="text-center">
            <b-input-group class="mb-3 mt-3">
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                  </b-input-group-prepend>
                    <b-form-input 
                      type="text"
                      placeholder="User ID"
                      v-model="client.userID"
                    ></b-form-input>
                </b-input-group>

                <b-input-group class="mb-3 mt-3">
                <b-input-group-prepend is-text>
                <b-icon icon="key-fill"></b-icon>
              </b-input-group-prepend>
                
                <b-form-input type="email" placeholder="PassWord"></b-form-input>
            </b-input-group>

            <b-button @click="backEnd">Login</b-button>
          </b-card>
        </p>
        </b-tab>

        <b-tab title="비밀번호 찾기"><p>I'm the second tab</p></b-tab>
        <b-tab title="회원가입"><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
      <!-- <b-card title="Card Title" no-body class="mt-5" style="max-width: 40rem;">
        <b-card-header header-tag="nav">
          <b-nav card-header tabs align="center">
            <b-nav-item active>로그인</b-nav-item>
            <b-nav-item>비밀번호 찾기</b-nav-item>
            <b-nav-item>회원가입</b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-center">
          <b-col class="py-3"> -->
            <!-- <b-row>
              <b-col> -->
              <!-- <b-input-group class="mb-3 mt-3">
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                  </b-input-group-prepend>
                    <b-form-input 
                      type="text"
                      placeholder="User ID"
                      v-model="client.userID"
                    ></b-form-input>
                </b-input-group>
              </b-col>
              <b-col>
                <b-input-group class="mb-3 mt-3">
                <b-input-group-prepend is-text>
                <b-icon icon="key-fill"></b-icon>
              </b-input-group-prepend>
                
                <b-form-input type="email" placeholder="PassWord"></b-form-input>
            </b-input-group> -->
              <!-- </b-col>
            </b-row> -->

          <!-- </b-col>
                <b-button @click="backEnd">Login</b-button>
        </b-card-body> -->
      <!-- </b-card> -->
      
    </b-container>
  </div>
  
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");
const commonStore = createNamespacedHelpers("common");

export default {
  name: "Login",
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
    }),
    ...commonStore.mapState({
      common: state => state.login,
    })
  },
  created() {
    //로그인 페이지에 들어오면 sidebar , home 본문 보이지 않도록 하기 위함.
    this.common.loginPage = 'Y'
  },

}
</script>

<style lang="scss">

</style>