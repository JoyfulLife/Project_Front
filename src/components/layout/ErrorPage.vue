<template>
  <div class="errPage-container">
    <b-button icon="el-icon-arrow-left" class="pan-back-btn" @click="back">
      Home
    </b-button>
    <b-row>
      <b-col cols="12">
        <h1 class="text-jumbo text-ginormous">
          Oops!
        </h1>
        <!-- gif来源<a href="https://zh.airbnb.com/" target="_blank">airbnb</a> 页面 -->
        <h2>데이터값이 하나도 없어요..</h2>
        <h6>뒤로가기, 혹은 Home으로 이동해주세요.</h6>
        <ul class="list-unstyled">
          
          <li class="link-type">
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li class="link-type">
              <a @click="back">뒤로가기</a>
          </li>
        </ul>
      </b-col>
      <b-col cols="12" class="mt-5">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </b-col>
    </b-row>
    <el-dialog :visible.sync="dialogVisible" title="随便看">
      <img :src="ewizardClap" class="pan-img">
    </el-dialog>
  </div>
</template>

<script>
import errGif from '@/assets/error_images/error.gif'

export default {
  name: 'ErrorPage',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
    back() {
      
        this.$router.go(-1)
    
    }
  }
}
</script>

<style lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none!important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
