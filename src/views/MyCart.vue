<template>
  <div>
      <b-container class="mt-5">
        <b-button v-b-toggle.collapse-3 class="m-1" variant="outline-dark">
          Search Condtion
        </b-button>
        <b-collapse visible id="collapse-3" class="text mt-3">

          <b-row>
            <b-col cols="12" md="6">
              <b-form-group label-for="reservation-id">
                <template #label>
                  category
                </template>
                <b-form-input
                  v-model="cartList.category"
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
                  maxlength="30"
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

        <b-table
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
              <h6>데이터가 없습니다.</h6>
            </template>

            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>

            <template #head(check_box)>
              <b-form-checkbox>

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
            Total : {{this.cartList.list.length}}
          </b-col>

          <b-col cols="4">
            <b-pagination
                v-model="cartList.page"
                :per-page="cartList.limit"
                first-class="first"
                last-class="last"
                next-class="next"
                prev-class="prev"
                :total-rows="33"
                align="center"
                @change="onPageChange(cartList.page)"
                
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
    
  },

  methods:{
      ...cartStore.mapActions(["retrieveCart","initializeCartListSearch"]),


      onRowClick(row, index){

        this.advertisingListDetail.list = this.cartList.list[index]
        
        this.$router.push('/main-page/detail');
      },

      onPageChange(page) {
      this.onSearch(page);
    },

    onSearch(page) {
      if (!page) {
        page = 1;
        this.cartList.limit = 10;
      }

      this.cartList.page = page;
      console.log("this.cartList.page : " + this.cartList.page);

      this.cartList.limit_st = (this.cartList.page-1) * this.cartList.limit

      console.log("this.cartList.limit_st : " + this.cartList.limit_st);
      const args = {
      params: this.cartList,
      };
      this.retrieveCart(args);
    },

    init() {
      // this.initializeCartListSearch();
    }
    
  },

  created() {

    const args = {
      params: this.cartList,
    };
    this.retrieveCart(args);
    
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
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(39,1,135,1) 22%, rgba(1,76,115,1) 32%, rgba(1,104,144,1) 42%, rgba(1,123,164,1) 51%, rgba(1,141,183,1) 58%, rgba(1,156,198,1) 67%, rgba(1,173,215,1) 77%, rgba(231,58,1,1) 86%, rgba(0,212,255,1) 100%);
}
</style>
