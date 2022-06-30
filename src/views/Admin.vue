<template>
    <div>
        <b-container class="mt-5">

            <b-tabs content-class="mt-3" align="center">
                <b-button v-b-toggle.collapse-3 class="m-1" variant="dark">
                  Search Condtion
                </b-button>
                <b-collapse visible id="collapse-3" class="mt-3">

                  <b-row class="text">
                    <b-col cols="12" md="6">
                      <b-form-group label-for="reservation-id">
                        <template #label>
                          product_no
                        </template>
                        <b-form-input
                          v-model="AdTable.ad_no"
                          
                        />
                      </b-form-group>
                    </b-col>

                    <b-col cols="12" md="6">
                      <b-form-group label-for="reservation-id">
                        <template #label>
                          category
                        </template>
                        <b-form-input
                          v-model="AdTable.category"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-row class="text mt-3">
                    <b-col cols="12" md="6">
                      <b-form-group label-for="reservation-id">
                        <template #label>
                          brand_name
                        </template>
                        <b-form-input
                          v-model="AdTable.brand_name"
                          
                        />
                      </b-form-group>
                    </b-col>

                    <b-col cols="12" md="6">
                      <b-form-group label-for="reservation-id">
                        <template #label>
                          url
                        </template>
                        <b-form-input
                          v-model="AdTable.url"
                          
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


                <b-tab title="Advertising Confirm or Deny" active>
                    <b-table
                        head-variant="primary"
                        class="mt-5"
                        :fields="fields"
                        responsive="sm"
                        thead-tr-class="rowClass"
                        :items="AdTable.list"
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
                            {{ ((AdTable.page - 1) * AdTable.limit) + data_01.index + 1 }}
                        </template>

                        <template #cell(button)="row">
                            
                            <b-button
                            size="xs"
                            
                            class="confirmButton-color"
                            @click="confirmButton(row)"
                            >
                                승인
                            </b-button>

                            <b-button
                            size="xs"
                            id="modal-multi-3"
                            class="margin denyButton-color"
                            @click="denyButton(row)"
                            >
                            
                                거절
                            </b-button>

                        </template>

                    </b-table>
                    <b-row>

                      <b-col cols="4" class="total">
                        Total : {{this.AdTable.allCount}}
                      </b-col>

                      <b-col cols="4">
                        <b-pagination
                            v-model="AdTable.page"
                            :per-page="AdTable.limit"
                            first-class="first"
                            last-class="last"
                            next-class="next"
                            prev-class="prev"
                            :total-rows="AdTable.allCount"
                            align="center"
                            @change="onPageChangeAdList"
                            
                          />
                      </b-col>

                      <b-col cols="4" class="left">
                        <b-form-select
                            id="page"
                            v-model="AdTable.limit"
                            :options="paginationOptions"
                            class="mb-3"
                            size="sm"
                            @change="onPageChangeAdList(1)"
                          ></b-form-select>
                      </b-col>
                    </b-row>
                    
                </b-tab>

                <!-- <b-tab title="Second">
                </b-tab>

                <b-tab title="Disabled">
                    
                </b-tab> -->

            </b-tabs>
        </b-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");
const adminStore = createNamespacedHelpers("admin");
const advertisingListStore = createNamespacedHelpers("advertisingList");

export default {
  name: "Admin",
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
    ...clientStore.mapState({
      client: state => state.client,
    }),

    ...adminStore.mapState({
      AdTable: state => state.AdTable,
      confirmList: state => state.confirmList,
    }),
    ...advertisingListStore.mapState({
        advertisingListDetail: state => state.advertisingListDetail,
      }),

    fields: function() {
      return [
        // {
        //   key: "check_box",
        //   label: "",
        //   thClass: "w-checkbox"
        // },
        {
          key: "row_number",
          label: "No.",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "ad_no",
          label: "product_no",
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
          key: "button",
          label: "button",
          thClass: "width: 10% !important"
        },

      ];
    },
  },

  methods: {
      ...adminStore.mapActions(["getAdTable","sendConfirmButton","sendDenyButton","initializeAdTableListSearch"]),

      confirmButton(row){
          console.log(row);

          this.confirmList.list = this.AdTable.list.filter(item => {
            return (item.selected === true);
          })
          console.log(this.confirmList.list);

          this.$bvModal.msgBoxConfirm(' 승인 하시겠습니까 ? ', {
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
                params: this.AdTable.list[row.index],
              };
              this.AdTable.list[row.index].adminCheck="Yes"
              this.AdTable.list[row.index].updateData="updata"
              this.sendConfirmButton(args).then(this.onSearch);
            }

            })
            .catch(err => {
            this.boxTwo = err
            })
      },

      denyButton(row){
          this.$bvModal.msgBoxConfirm(' 승인 거절하시겠습니까 ', {
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
              console.log(row)
              const args = {
                params: this.AdTable.list[row.index],
              };
              this.AdTable.list[row.index].adminCheck="Yes"
              this.AdTable.list[row.index].deleteData="delete"
              this.sendDenyButton(args).then(this.onSearch);
            }

            })
            .catch(err => {
            this.boxTwo = err
            })
      },

      onSearch(){
        const args = {
          params: this.AdTable,
        };
        this.getAdTable(args);
      },


      allSelectMyCart(checked){
        this.AdTable.list.forEach(item => {
          item.selected = (checked === true);
        })
      },

      onPageChangeAdList(page){
        this.AdTable.allCheckBox = false;
        this.onSearchAdList(page);
      },

      onSearchAdList(page){
      this.AdTable.page = page;
      
      this.AdTable.limit_st = (this.AdTable.page-1) * this.AdTable.limit

      this.onSearch();
    },

      onRowClick(row, index){

        this.advertisingListDetail.list = this.AdTable.list[index]
        
        this.$router.push('/main-page/detail');
      },

      init() {
      this.initializeAdTableListSearch();
      },

  },

  created() {
    this.AdTable.page = 1; 
    this.AdTable.limit = 10;
    this.onSearch();
  },
};
</script>

<style lang="scss" scoped>

.margin {
  margin-left: 2%;
}

.confirmButton-color{
  background: rgb(74,68,195);
  background: linear-gradient(90deg, rgba(74,68,195,1) 0%, rgba(29,150,175,1) 100%);
}
.denyButton-color{
  background: rgb(228,36,36);
  background: linear-gradient(90deg, rgba(228,36,36,1) 4%, rgba(238,134,29,1) 90%);
}

.total {
  text-align: left;
}

.left{
  text-align: end;
}

.text {
  text-align: left;
}
</style>
