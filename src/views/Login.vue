<template>
  <div>
    <b-container class="mt-5">
      
      <b-iconstack font-scale="5" rotate="90">
            <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
      </b-iconstack>

      <b-tabs content-class="mt-3" align="center" class="mt-5">
        <b-tab title="로그인" >
          <b-card class="text-center" border-variant="white">

            <b-row class="justify-content-md-center">
              <b-col cols="6">            
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-input 
                        type="text"
                        placeholder="User ID"
                        v-model="client.userID"
                      >
                      </b-form-input>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                   <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input 
                    
                    placeholder="PassWord"
                    ></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-button @click="backEnd">Login</b-button>
          </b-card>
        </b-tab>

        <b-tab title="비밀번호 찾기"><p>I'm the second tab</p></b-tab>
        <b-tab title="회원가입" active>
          <b-card class="text-center" border-variant="white">

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-input
                        id="input-live"
                        type="text"
                        v-model="signUp.userID"
                        :state="userIDState"
                        placeholder="User ID"
                        
                      >
                      </b-form-input>
                      <b-form-invalid-feedback id="input-live-feedback">
                        Enter at least 3 letters
                      </b-form-invalid-feedback>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="input-live"
                    v-model="signUp.passWord"
                    :state="passWordState"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="PassWord"
                    trim
                  ></b-form-input>

                  <!-- This will only be shown if the preceding input has an invalid state -->
                  <b-form-invalid-feedback id="input-live-feedback">
                    Enter at least 3 letters
                  </b-form-invalid-feedback>

                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-5 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="key-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="input-live"
                    v-model="signUp.reconfirmPassWord"
                    :state="ReconfirmPassWordState"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="Reconfirm Password"
                    trim
                  ></b-form-input>
                  
                  <!-- This will only be shown if the preceding input has an invalid state -->
                  <b-form-invalid-feedback v-if="this.signUp.passWord != this.signUp.reconfirmPassWord">
                    비밀번호가 일치하지 않습니다.
                  </b-form-invalid-feedback>

                </b-input-group>
              </b-col>
            </b-row>
                        
            <b-button @click="postBackEnd">가입하기</b-button>
            <!-- <b-button v-b-modal.modal-center>가입하기</b-button>

            <b-modal id="modal-center" centered title="BootstrapVue" @click="postBackEnd">
              <p class="my-4">Vertically centered modal!</p>
            </b-modal> -->
            <!-- <b-button @click="postBackEnd">msgBoxOk with options</b-button>
     Return value: {{ String(boxTwo) }} -->

          </b-card>
        </b-tab>
      </b-tabs>
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
      name: '',
      successAction: ''
    }

  },
methods:{
  ...clientStore.mapActions(["retrieveClient","saveClient"]),
  backEnd(){

    this.retrieveClient();

  },
  postBackEnd(){
    console.log("test");
    
      this.successAction = ''
        this.$bvModal.msgBoxConfirm('회원가입 하시겠습니까?.', {
          // title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.successAction = value

            // ok 버튼을 눌러야 가입을 할 수 있음.
            if(this.successAction === true){
            const args = {
              params: this.signUp,
              };
              this.saveClient(args)
            }

          })
          .catch(err => {
            this.boxTwo = err
          })
  },

},

  computed:{
    ...clientStore.mapState({
      client: state => state.client,
      signUp: state => state.signUp,
    }),
    ...commonStore.mapState({
      common: state => state.login,
    }),

    userIDState() {
        return this.signUp.userID.length > 2 ? true : false
      },
    passWordState() {
        return this.signUp.passWord.length > 2 ? true : false
      },

    ReconfirmPassWordState() {
        return (this.signUp.passWord === this.signUp.reconfirmPassWord && this.signUp.reconfirmPassWord != "")? true : false
      }
  },
  created() {
    //로그인 페이지에 들어오면 sidebar , home 본문 보이지 않도록 하기 위함.
    this.common.loginPage = 'Y'
  },

}
</script>

<style lang="scss">

</style>