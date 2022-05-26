<template>
  <div>
      <b-container class="mt-5">
        <b-table
              :fields="fields"
              responsive="sm"
              thead-tr-class="rowClass"
              :items="cartList.list"
              @row-clicked="(row, index) => onRowClick(row, index)"
              show-empty
              bordered
              hover
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
            Total : 
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
      ...cartStore.mapActions(["retrieveCart"]),


      onRowClick(row, index){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(row);
        console.log(index);

        this.advertisingListDetail.list = this.cartList.list[index]
        
        this.$router.push('/main-page/detail');
      }
  },

  created() {

    const args = {
      params: this.client,
    };
    this.retrieveCart(args);
    
  }
};
</script>

<style lang="scss" scoped>
.total {
  text-align: left;
}
</style>
