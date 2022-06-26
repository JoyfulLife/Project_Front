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
                  v-model="client.name"
                  disabled
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  user_ID
                </template>
                <b-form-input
                  v-model="client.user_ID"
                  disabled
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
                  v-model="client.passWord"
                  
                  class="input-number-password"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  Phone number
                </template>
                <b-form-input
                  v-model="client.phone_no"
                  disabled
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="text mt-3">
            <b-col cols="12" md="6" class="text-align">
              <b-button class="mt-5 color" @click="Update()">비밀번호 변경하기</b-button>
            </b-col>
            <b-col cols="12" md="6">
              <b-button class="mt-5 deleteColor" @click="Delete()">회원 탈퇴</b-button>
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
    ...clientStore.mapActions(["clientUpdate","clientDelete"]),

    Update(){

      this.$bvModal.msgBoxConfirm(' 비밀번호를 변경하시겠습니까?  ', {
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

            if(this.successAction === true){
              if(this.client.passWord.length <5){
                this.$bvModal.msgBoxOk(" 변경하는 비밀번호는 최소 5자리 이상입니다. ", {
                  size: 'sm',
                  buttonSize: 'sm',
                  okVariant: 'primary',
                  okTitle: 'YES',
                  cancelTitle: 'NO',
                  footerClass: 'p-2',
                  hideHeaderClose: false,
                  centered: true
              })
                }else {
                  const args = {
                    params: this.client
                  };
                  this.client.update = "update";
                  this.clientUpdate(args).then(this.LoginStatus)
                }
                  }

          })
          .catch(err => {
            this.boxTwo = err
          })

      
    },

    LoginStatus() {

      if(this.client.list.loginStatus === "Yes"){
          this.$bvModal.msgBoxOk(" 비밀번호를 변경하였습니다. ", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'primary',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        
      }else{
          this.$bvModal.msgBoxOk(" 비밀번호 변경을 실패하였습니다. ", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      }
  },

    Delete(){
      
      this.$bvModal.msgBoxConfirm(' 탈퇴 하시겠습니까? ', {
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

            if(this.successAction === true){
            const args = {
              params: this.client
            };
            this.client.delete = "delete";
            this.clientDelete(args).then(this.afterDelete)
            }

          })
          .catch(err => {
            this.boxTwo = err
          })
    },

    afterDelete(){
      if(this.client.list.delete === "YES"){
        
        this.$bvModal.msgBoxOk("정상적으로 삭제 되었습니다.", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        }).then(this.move)
      }else{
        this.$bvModal.msgBoxOk("error 발생. 다시 시도해주세요.", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      }
      
    },

    move(){
      this.$router.push('/login');
      this.$router.go();
    },
    
  },
  computed:{
      ...clientStore.mapState({
      client: state => state.client,
    }),
  },

  created(){
    this.client.name = this.client.list.name
    this.client.user_ID = this.client.list.user_ID
    this.client.passWord = this.client.list.passWord
    this.client.phone_no = this.client.list.phone_no
  }
};
</script>

<style lang="scss" scoped>
.text {
  text-align: left;
}

.color {
background: rgb(74,68,195);
background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}

.deleteColor {
  background: rgb(228,36,36);
  background: linear-gradient(90deg, rgba(228,36,36,1) 4%, rgba(238,134,29,1) 90%);
}

.text-align{
  text-align: right;
}
</style>
