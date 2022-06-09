<template>
    <div>
        <b-container class="mt-5 text-align">
            
            <b-row class="mt-3">
                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            user_ID
                        </template>
                        <b-form-input
                            disabled
                        />
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            category
                        </template>
                        <b-form-input
                        
                        />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            brand_name
                        </template>
                        <b-form-input
                        
                        maxlength="30"
                        />
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            brand_name
                        </template>
                        <b-form-input
                        
                        />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                        category
                        </template>
                        <b-form-input
                        
                        maxlength="30"
                        />
                    </b-form-group>
                </b-col>

                <b-col cols="12" md="6">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                        brand_name
                        </template>
                        <b-form-input
                        
                        />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="12">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                        Remarks
                        </template>
                            <b-form-textarea
                            id="textarea"
                            
                            placeholder="Enter something..."
                            rows="3"
                            max-rows="6"
                            />
                    </b-form-group>
                </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col cols="12" md="12">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            images
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
        
                            <div class="mt-3">
                            <b-img class="upload-container" :src="previewImageData"></b-img>
                            </div>

                        </b-list-group-item>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-button @click="bbb">이미지 삭제</b-button>

            <!-- <b-row class="mt-5">
                <b-col cols="12" md="12">
                    <b-form-group label-for="reservation-id">
                        <template #label>
                            images
                        </template>
                        <b-list-group-item>                        
                            
                            <b-form-item prop="image_uri" style="margin-bottom: 30px;">
                                <Upload v-model="adRequest.images" />
                            </b-form-item>

                        </b-list-group-item>
                    </b-form-group>
                </b-col>
            </b-row> -->










        </b-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
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
      show: true,
      previewImageData: null

    }
  },

  computed: {
      ...ad_requestPageStore.mapState({
        adRequest: state => state.adRequest,
      }),
  },
  methods: {
      aaa(){
          console.log("AAAAAA");
          console.log(this.adRequest.image.name);
      },
      bbb(){
          console.log("BBBBBBBBB");
          console.log(this.adRequest.image.name);
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
    }


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

</style>
