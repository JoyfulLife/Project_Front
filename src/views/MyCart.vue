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

            <template #head(show_details)>
              <b-form-checkbox
                  
                  
              >
              </b-form-checkbox>
            </template>

            <template #cell(show_details)="{ item }">
              <b-form-checkbox
                  v-model="item.selected"
              >
              </b-form-checkbox>
            </template>
        </b-table>
      </b-container>
  </div>
    
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const cartStore = createNamespacedHelpers("cart");
const advertisingListStore = createNamespacedHelpers("advertisingList");

export default {
  name: "MyCart",
  data() {
      return {
        
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ]
      }
  },

  computed: {

      ...cartStore.mapState({
        cartList: state => state.cartList,
      }),
      ...advertisingListStore.mapState({
        advertisingListDetail: state => state.advertisingListDetail,
      }),

      fields: function() {
      return [
        {
          key: "show_details",
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
      this.retrieveCart();
  }
};
</script>

<style lang="scss" scoped>

</style>
