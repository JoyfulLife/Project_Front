<template>
  <div>
      <b-container class="mt-5">
        <b-button v-b-toggle.collapse-3 class="m-1" variant="outline-dark">
          Search Condtion
        </b-button>
        <b-collapse v-if="tabs === 'mycart' " visible id="collapse-3" class="text mt-3">

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  category
                </template>
                <b-form-input
                  v-model="cartList.category"
                  
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  brand_name
                </template>
                <b-form-input
                  v-model="cartList.brand_name"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  url
                </template>
                <b-form-input
                  v-model="cartList.url"
                  
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="align">

              <b-button @click="onSearch()" class="color">
                Search
              </b-button>
              <b-button @click="init()" class="margin color">
                initialize
              </b-button>

            </b-col>
          </b-row>

        </b-collapse>

        <b-collapse v-if="tabs === 'myAdRequest' " visible id="collapse-3" class="text mt-3">

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  category
                </template>
                <b-form-input
                  v-model="myAdRequest.category"
                  
                />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  brand_name
                </template>
                <b-form-input
                  v-model="myAdRequest.brand_name"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  url
                </template>
                <b-form-input
                  v-model="myAdRequest.url"
                  
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="align">

              <b-button v-if="tabs === 'myAdRequest'" @click="onSearchMyAdRequest()" class="color">
                Search
              </b-button>
              <b-button v-if="tabs === 'myAdRequest'" @click="initMyAdRequest()" class="margin color">
                initialize
              </b-button>

            </b-col>
          </b-row>

        </b-collapse>



        <b-tabs
          class="mt-5"
          content-class="mt-3"
          align="center"
          active-nav-item-class="font-weight-bold text-uppercase text-dark"
          active-tab-class="font-weight-bold text-dark"
          >

          <b-tab title="Mycart" active @click="tabs = 'mycart'">
            <b-table
              head-variant="primary"
              class="mt-5"
              :fields="fields"
              responsive="sm"
              thead-tr-class="rowClass"
              :items="cartList.list"
              @row-clicked="(row, index) => onRowClick(row, index)"
              show-empty
              bordered
              hover
              striped
              >
              <template #empty>
                <h6> 데이터가 없습니다. </h6>
              </template>

              <template #cell(row_number)="data_01">
                {{ ((cartList.page - 1) * cartList.limit) + data_01.index + 1 }}
              </template>

              <template #head(check_box)>
                <b-form-checkbox
                  @change="allSelect"
                  v-model="cartList.allCheckBox"
                >
                </b-form-checkbox>
              </template>

              <template #cell(check_box)="{ item }">
                <b-form-checkbox
                    v-model="item.selected"
                >
                </b-form-checkbox>
              </template>
            </b-table>

            <b-row>

              <b-col cols="4" class="total">
                Total : {{this.cartList.allCount}}
              </b-col>

              <b-col cols="4">
                <b-pagination
                head-variant="dark"
                    v-model="cartList.page"
                    :per-page="cartList.limit"
                    first-class="first"
                    last-class="last"
                    next-class="next"
                    prev-class="prev"
                    :total-rows="cartList.allCount"
                    align="center"
                    @change="onPageChange"
                    
                  />
              </b-col>
              
              <b-col cols="4">
                <b-form-select
                    id="page"
                    v-model="cartList.limit"
                    :options="paginationOptions"
                    class="mb-3"
                    size="sm"
                    @change="onPageChange(1)"
                  ></b-form-select>
              </b-col>

            </b-row>

            <b-row class="mt-4">
              <b-col cols="12" class="align">
                <b-button @click="onDelete()" class="color">
                  Delete
                </b-button>
              </b-col>
            </b-row>
          </b-tab>

          <b-tab title="내가 신청한 광고!" @click="tabs = 'myAdRequest'">
            <b-table
              class="mt-5"
              :fields="fieldsMyAd"
              responsive="sm"
              thead-tr-class="rowClass"
              :items="myAdRequest.list"
              @row-clicked="(row, index) => MyAdRequestOnRowClick(row, index)"
              show-empty
              bordered
              hover
              striped
              >
              <template #empty>
                <h6> 데이터가 없습니다. </h6>
              </template>

              <template #cell(row_number)="data_02">
                {{ ((myAdRequest.page - 1) * myAdRequest.limit) + data_02.index + 1 }}
              </template>

              <template #head(check_box)>
                <b-form-checkbox
                  @change="MyAdAllSelect"
                  v-model="myAdRequest.allCheckBox"
                >
                </b-form-checkbox>
              </template>

              <template #cell(check_box)="{ item }">
                <b-form-checkbox
                    v-model="item.selected"
                >
                </b-form-checkbox>
              </template>
            </b-table>

            <b-row>

              <b-col cols="4" class="total">
                Total : {{this.myAdRequest.allCount}}
              </b-col>

              <b-col cols="4">
                <b-pagination
                    v-model="myAdRequest.page"
                    :per-page="myAdRequest.limit"
                    first-class="first"
                    last-class="last"
                    next-class="next"
                    prev-class="prev"
                    :total-rows="myAdRequest.allCount"
                    align="center"
                    @change="onPageChangeMyAdRequest"
                    
                  />
              </b-col>
              
              <b-col cols="4">
                <b-form-select
                    id="page"
                    v-model="myAdRequest.limit"
                    :options="paginationOptions"
                    class="mb-3"
                    size="sm"
                    @change="onPageChangeMyAdRequest(1)"
                  ></b-form-select>
              </b-col>

            </b-row>

            <b-row class="mt-4">
              <b-col cols="12" class="align">
                <b-button @click="myAdonDelete()" class="color">
                  Deletefwe
                </b-button>
              </b-col>
            </b-row>
          </b-tab>
            
        </b-tabs>

        
        
      </b-container>
  </div>
    
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const cartStore = createNamespacedHelpers("cart");
const advertisingListStore = createNamespacedHelpers("advertisingList");
const clientStore = createNamespacedHelpers("client");

export default {
  name: "MyCart",
  data() {
      return {

        tabs : "mycart",


        paginationOptions: [
          { value: 10, text: '10/Page' },
          { value: 20, text: '20/Page' },
          { value: 50, text: '50/Page' },
          { value: 100, text: '100/Page' },
      ],
      }
  },

  computed: {

      ...cartStore.mapState({
        cartList: state => state.cartList,
        deleteCartList: state => state.deleteCartList,
        myAdRequest: state => state.myAdRequest,
        deleteMyAdList: state => state.deleteMyAdList,
      }),
      ...advertisingListStore.mapState({
        advertisingListDetail: state => state.advertisingListDetail,
      }),
      ...clientStore.mapState({
      client: state => state.client,
      }),

      fields: function() {
      return [
        {
          key: "check_box",
          label: "",
          thClass: "w-checkbox"
        },
        {
          key: "row_number",
          label: "No.",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "ad_no",
          label: "ad_no",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "category",
          label: "category",
          thClass: "w-no"
        },
        {
          key: "brand_name",
          label: "brand_name",
          thClass: "w-10"
        },
        {
          key: "url",
          label: "url",
          thClass: "width: 10% !important"
          
        },

      ];
    },

    fieldsMyAd: function() {
      return [
        {
          key: "check_box",
          label: "",
          thClass: "w-checkbox"
        },
        {
          key: "row_number",
          label: "No.",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "ad_no",
          label: "ad_no",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "category",
          label: "category",
          thClass: "w-no"
        },
        {
          key: "brand_name",
          label: "brand_name",
          thClass: "w-10"
        },
        {
          key: "url",
          label: "url",
          thClass: "width: 10% !important"
        },
        {
          key: "approval",
          label: "승인 상태",
          thClass: "width: 10% !important"
        },
      ];
    },
    
  },

  methods:{
      ...cartStore.mapActions(["retrieveCart","initializeCartListSearch","sendDeleteCartList", "retrieveMyAd","sendDeleteMyAdList", "initializeMyAdRequestListSearch"]),


      onRowClick(row, index){

        this.advertisingListDetail.list = this.cartList.list[index]
        
        this.$router.push('/main-page/detail');
      },

      MyAdRequestOnRowClick(row, index){

        this.advertisingListDetail.list = this.myAdRequest.list[index]
        
        this.$router.push('/main-page/detail');
      },

      onPageChange(page) {
        this.cartList.allCheckBox = false;
        this.onSearch(page);
    },

    onPageChangeMyAdRequest(page){
        this.myAdRequest.allCheckBox = false;
        this.onSearchMyAdRequest(page);
    },

    onSearch(page) {
      // if (!page) {
      //   page = 1;
      //   this.cartList.limit = 10;
      // }

      this.cartList.page = page;
      console.log("this.cartList.page : " + this.cartList.page);

      this.cartList.limit_st = (this.cartList.page-1) * this.cartList.limit

      console.log("this.cartList.limit_st : " + this.cartList.limit_st);
      
      this.searchCartList();
    },

    onSearchMyAdRequest(page){
      this.myAdRequest.page = page;
      
      this.myAdRequest.limit_st = (this.myAdRequest.page-1) * this.myAdRequest.limit

      this.searchMyAdRequestList();
    },

    init() {
      this.initializeCartListSearch();
    },

    initMyAdRequest(){
      this.initializeMyAdRequestListSearch();
    },

    allSelect(checked) {
      this.cartList.list.forEach(item => {
        item.selected = (checked === true);
      })
    },

    MyAdAllSelect(checked){
      this.myAdRequest.list.forEach(item => {
        item.selected = (checked === true);
      })
    },

    onDelete() {

      this.deleteCartList.list = this.cartList.list.filter(item => {
        return (item.selected === true);
      })

      if(this.deleteCartList.list.length === 0){
          
          this.$bvModal.msgBoxOk(" 삭제할 data를 클릭해주세요 ", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        })
      }else {
        const args = {
        // params: this.deleteCartList.list.map(item => item.ad_no),
        params: this.deleteCartList.list
        };
        
        this.sendDeleteCartList(args).then(this.checkError);
        
      }
      

    },

    myAdonDelete(){
      this.deleteMyAdList.list = this.myAdRequest.list.filter(item => {
        return (item.selected === true);
      })

      if(this.deleteMyAdList.list.length === 0){
          
          this.$bvModal.msgBoxOk(" 삭제할 data를 클릭해주세요 ", {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        })
      }else {
        const args = {
        // params: this.deleteCartList.list.map(item => item.ad_no),
        params: this.deleteMyAdList.list
        };
        
        this.sendDeleteMyAdList(args).then(this.MyAdCheckError);
        
      }
    },

    searchCartList() {
      
      const args = {
      params: this.cartList,
    };
    this.retrieveCart(args);

    },

    checkError() {
      
      if(this.cartList.failMessage != null){
          this.$bvModal.msgBoxOk(this.cartList.failMessage, {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(this.searchCartList);
      }else{
          this.$bvModal.msgBoxOk(this.cartList.successMessage, {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(this.searchCartList);
      }
    },

    MyAdCheckError(){
      if(this.myAdRequest.message != null){
          this.$bvModal.msgBoxOk(this.myAdRequest.message, {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'warning',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
        .then(this.searchMyAdRequestList);
      }
    },

    searchMyAdRequestList(){
      const args = {
        params: this.myAdRequest,
      };
      this.retrieveMyAd(args);
    },
    
  },

  created() {
    this.myAdRequest.user_id = this.client.list.user_ID
    this.cartList.user_id = this.client.list.user_ID
    this.searchCartList();
    this.searchMyAdRequestList();
  }
};
</script>

<style lang="scss" scoped>
.text {
  text-align: left;
}
.total {
  text-align: left;
}
.align {
  text-align: center;
}
.margin {
  margin-left: 2%;
}
.color {
background: rgb(74,68,195);
background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}

</style>
