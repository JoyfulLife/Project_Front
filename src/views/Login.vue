<template>
  <div>
    <b-container class="mt-5">
      
      <b-iconstack font-scale="5" rotate="90">
            <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
            <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
      </b-iconstack>

      <b-tabs content-class="mt-3" align="center" class="mt-5">
        <b-tab title="로그인" active>
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
                        v-model="client.user_ID"
                      >
                      </b-form-input>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-5 mt-3">
                  <b-input-group-prepend is-text>
                   <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input 
                    type="text"
                    placeholder="PassWord"
                    v-model="client.passWord"
                    ></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-button @click="LoginButton">Login</b-button>
          </b-card>
        </b-tab>

        <b-tab title="비밀번호 찾기"><p>I'm the second tab</p></b-tab>



        <b-tab title="회원가입">
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
                        v-model="signUp.user_ID"
                        :state="userIDState"
                        placeholder="User ID"
                        
                      >
                      </b-form-input>
                      <b-form-invalid-feedback id="input-live-feedback">
                        최소 5글자 이상 적어주세요
                      </b-form-invalid-feedback>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="key-fill"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                    id="input-live"
                    v-model="signUp.passWord"
                    :state="passWordState"
                    aria-describedby="input-live-help input-live-feedback"
                    placeholder="PassWord"
                    trim
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-live-feedback">
                    최소 5글자 이상 적어주세요
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
            
            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="tag-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-input
                        id="input-live"
                        type="text"
                        v-model="signUp.name"
                        :state="nameState"
                        placeholder="이름"
                        
                      >
                      </b-form-input>
                      <b-form-invalid-feedback id="input-live-feedback">
                        * 필수 *
                      </b-form-invalid-feedback>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-3 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="telephone-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-input
                        id="input-live"
                        type="text"
                        v-model="signUp.phoneNumber"
                        :state="phoneNumberState"
                        placeholder="전화번호"
                        
                      >
                      </b-form-input>
                      <b-form-invalid-feedback id="input-live-feedback">
                        * 필수 *
                      </b-form-invalid-feedback>
                </b-input-group>
              </b-col>
            </b-row>

            <b-row class="justify-content-md-center">
              <b-col cols="6">
                <b-input-group class="mb-5 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="check-circle-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-select v-model="signUp.gender" :options="options"></b-form-select>
                </b-input-group>
              </b-col>
            </b-row>

            <b-button variant="success" @click="SignUp">가입하기</b-button>

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
      successAction: '',
      successSignUp: '',
      gender: null,
      options: [
        { value: "", text: '성별을 선택해 주세요' },
        { value: 'man', text: '남자' },
        { value: 'female', text: '여자' },
        { value: 'noSelect', text: '선택하지 않음' },
      ]
    }

  },
methods:{
  ...clientStore.mapActions(["ValidClientCheck","saveClient"]),
  LoginButton(){
    const args = {
      params: this.client,
  };
  console.log("11111111111111111")
    this.ValidClientCheck(args).then(this.LoginStatus())

  },

  //로그인 상태에 따라 박스 텍스트 변경, 라우터 푸쉬 결정!

  // TODO ############################################################################################################
  // 조건문에서 결과같은 받아오기 전에 값을 비교해서 에러발생함.! => 값을 완전히 받아온다음에 함수 실행하도록 한다.!
  LoginStatus() {
    console.log(" 22222222222 "+this.client.list.loginStatus)
    if(this.client.list.loginStatus === "Yes"){
        this.$bvModal.msgBoxOk(" 로그인 성공 ! ", {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
      .then(this.$router.push('myPage'));
    }else{
        this.$bvModal.msgBoxOk(" 로그인 실패! 다시 입력해주세요 ", {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    }
  },

  SignUp(){
    console.log("test");
    
      this.successAction = ''
      //failMessage 값을 초기화
      this.signUp.failMessage = ""
      this.$bvModal.msgBoxConfirm('회원가입 하시겠습니까?.', {
        // title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
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
            this.saveClient(args).then(this.depuplicteCheck)
          }

        })
        .catch(err => {
          this.boxTwo = err
        })
  },
  
  //  DB 에 중복된 user_ID 있을 경우 에러 메시지, 정상 회원가입 되면 가입 축하 메시지
  depuplicteCheck(){

    if(this.signUp.failMessage != ""){
      this.$bvModal.msgBoxOk(this.signUp.failMessage, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    }else {
      this.$bvModal.msgBoxOk(this.signUp.successMessage, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'primary',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
          this.successSignUp = value
          if(this.successSignUp === true){
            this.$router.push('myPage')      
          }
        })
        .catch(err => {
          this.boxTwo = err
        })
      }


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
        return this.signUp.user_ID.length > 4 ? true : false
      },
    passWordState() {
        return this.signUp.passWord.length > 4 ? true : false
      },

    ReconfirmPassWordState() {
        return (this.signUp.passWord === this.signUp.reconfirmPassWord && this.signUp.reconfirmPassWord != "")? true : false
      },
    nameState() {
        return this.signUp.name.length > 0 ? true : false
      },
    phoneNumberState() {
        return this.signUp.phoneNumber.length > 10 ? true : false
      },
    

  },

  created() {
    //로그인 페이지에 들어오면 sidebar , home 본문 보이지 않도록 하기 위함.
    this.common.loginPage = 'Y'
  },

}
</script>

<style lang="scss">

</style>