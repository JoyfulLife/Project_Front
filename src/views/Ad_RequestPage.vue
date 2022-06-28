<template>
    <div>
        <b-container class="mt-5 text-align">
            
            <b-row class="mt-3">
                <b-col cols="12" md="6" class="br-line">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                            user_ID
                        </template>
                        <b-form-input
                            disabled
                            v-model="adRequest.user_ID"
                        />
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                            category
                        </template>
                        <b-form-select
                          class="form-select"
                          v-model="adRequest.category"
                          :options="options"
                        />
                        <!-- <b-form-select v-model="adRequest.category" :options="options"></b-form-select> -->
                    </b-form-group>
                </b-col>

              <!-- <b-col cols="6">
                <b-input-group class="mb-5 mt-3">
                  <b-input-group-prepend is-text>
                    <b-icon icon="check-circle-fill"></b-icon>
                    </b-input-group-prepend>
                      <b-form-select v-model="adRequest.category" :options="options"></b-form-select>
                </b-input-group>
              </b-col> -->
            
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12" md="6" class="br-line">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                            brand_name
                        </template>
                        <b-form-input
                          v-model="adRequest.brand_name"
                          maxlength="30"
                        />
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                            url
                        </template>
                        <b-form-input
                          v-model="adRequest.url"
                        />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="12">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                        Remarks
                        </template>
                            <b-form-textarea
                            id="textarea"
                            v-model="adRequest.remarks"
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                          <span class="text-danger">*</span>
                            images ( jpg, png, gif 파일 )
                        </template>
                        <b-list-group-item>                        
                            
                            <b-form-file
                                v-model="adRequest.image"
                                :state="Boolean(form.file)"
                                placeholder="Choose a file..."
                                drop-placeholder="Drop file here..."
                                required
                                accept=".jpg, .png, .gif"
                                @change="previewImage"
                                plain
                            ></b-form-file>
        
                            <div class="mt-3 align-center">
                            <b-img class="upload-container" :src="previewImageData"></b-img>
                            </div>

                            <b-button class="mt-3 deleteColor" @click="this.deleteImage">이미지 삭제</b-button>

                        </b-list-group-item>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="12" class="align-center">
                    <b-button class="color" @click="this.validationCheck"> 광고 신청하기! </b-button>
                </b-col>
            </b-row>


            
            
        </b-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");
// import Upload from '@/components/layout/SingleImage3'

const ad_requestPageStore = createNamespacedHelpers("ad_requestPage");


export default {
  name: "AD_RequestPage",
//   components: {Upload},
  data: function() {
    return {
        form: {
        petName: "",
        file: "",
        desc: ""
        
      },  
      options: [
        { value: 'Sports', text: 'Sports' },
        { value: 'Shopping', text: 'Shopping' },
        { value: 'Book', text: 'Book' },
      ],

      show: true,
      previewImageData: null

    }
  },

  computed: {
      ...ad_requestPageStore.mapState({
        adRequest: state => state.adRequest,
      }),
      ...clientStore.mapState({
      client: state => state.client,
      }),
  },
  methods: {
    ...ad_requestPageStore.mapActions(["sendAdRequest","initializeAdRequest"]),

    deleteImage(){
        this.adRequest.image = null,
        this.previewImageData = ""
        },

    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset
      this.form.petName = "";
      this.form.file = "";
      this.form.desc = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    previewImage() {
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.previewImageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      } else {
          this.previewImageData = null;
      }
    },

    clickAdRequest(){
      const args = {
          // params: this.adRequest
          params: {
            user_id: this.adRequest.user_ID,
            category: this.adRequest.category,
            brand_name: this.adRequest.brand_name,
            url: this.adRequest.url,
            remarks: this.adRequest.remarks,
            image: this.adRequest.image.name
          }
          
        };

      this.sendAdRequest(args).then(this.message);

    },
    message(){
      this.$bvModal.msgBoxOk(this.adRequest.message, {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(value => {
          this.successAction = value

          this.$router.push('/');

        })
        .catch(err => {
          this.boxTwo = err
        })
    },
    moveRouter(){
      this.$router.push('/');
    },

    validationCheck(){
      
      if(this.client.list.user_ID === "" ||
        this.adRequest.category === "" ||
        this.adRequest.brand_name === "" ||
        this.adRequest.url === "" ||
        this.adRequest.Remarks === "" ||
        this.adRequest.image === null){

        this.$bvModal.msgBoxOk(' 필수 값을 모두 입력해주세요~ ', {
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'warning',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })

      }else {
        
        this.clickAdRequest();
        }
      

      
    },


  },

  created() {
    
    this.initializeAdRequest();
    this.adRequest.user_ID = this.client.list.user_ID
  }

};
</script>

<style lang="scss" scoped>

.text-align {
  text-align: left;
}

// @import "~@/styles/mixin.scss";
.upload-container {
//   width: 70%;
  height: 169.43px;
  width: 298.59px;
  position: relative;
//   @include clearfix;
  .image-uploader {
    width: 35%;
    float: left;
  }
  .image-preview {
    width: 200px;
    height: 200px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .image-preview-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image-preview-action {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      cursor: default;
      text-align: center;
      color: #fff;
      opacity: 0;
      font-size: 20px;
      background-color: rgba(0, 0, 0, .5);
      transition: opacity .3s;
      cursor: pointer;
      text-align: center;
      line-height: 200px;
      .el-icon-delete {
        font-size: 36px;
      }
    }
    &:hover {
      .image-preview-action {
        opacity: 1;
      }
    }
  }
  .image-app-preview {
    width: 320px;
    height: 180px;
    position: relative;
    border: 1px dashed #d9d9d9;
    float: left;
    margin-left: 50px;
    .app-fake-conver {
      height: 44px;
      position: absolute;
      width: 100%; // background: rgba(0, 0, 0, .1);
      text-align: center;
      line-height: 64px;
      color: #fff;
    }
  }
}

.align-center {
    text-align: center;
}

.br-line {
  border-right:1px solid #b9b2e9;
}

.text-danger {
  color: #dc3545 !important;
}

.color {
background: rgb(74,68,195);
background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}

.deleteColor {
  background: rgb(228,36,36);
  background: linear-gradient(90deg, rgba(228,36,36,1) 4%, rgba(238,134,29,1) 90%);
}
</style>
