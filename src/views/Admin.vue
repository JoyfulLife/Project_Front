<template>
    <div>
        <b-container class="mt-5">

            <b-tabs content-class="mt-3" align="center">

                <b-tab title="AD confirm" active>
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

                        <template #head(check_box)>
                            <b-form-checkbox
                            
                            
                            >
                            </b-form-checkbox>
                        </template>

                        <template #cell(check_box)="{ item }">
                            <b-form-checkbox
                                v-model="item.selected"
                            >
                            </b-form-checkbox>
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
                            
                            class="margin denyButton-color"
                            @click="denyButton(row)"
                            >
                                거절
                            </b-button>
                        </template>

                    </b-table>
                </b-tab>

                <b-tab title="Second">
                </b-tab>

                <b-tab title="Disabled">
                    
                </b-tab>

            </b-tabs>
        </b-container>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const clientStore = createNamespacedHelpers("client");
const adminStore = createNamespacedHelpers("admin");

export default {
  name: "Admin",

  computed: {
    ...clientStore.mapState({
      client: state => state.client,
    }),

    ...adminStore.mapState({
      AdTable: state => state.AdTable,
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
        {
          key: "button",
          label: "button",
          thClass: "width: 10% !important"
        },

      ];
    },
  },

  methods: {
      ...adminStore.mapActions(["getAdTable","sendConfirmButton"]),

      confirmButton(row){
          console.log(row);
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
                console.log("AAAAAAAAAAAAAA");
            const args = {
                params: this.AdTable.list[row.index],
                };
                this.AdTable.list[row.index].adminCheck="Yes"
                this.sendConfirmButton(args);
            }

            })
            .catch(err => {
            this.boxTwo = err
            })
      },

      denyButton(){
          console.log("222222222222");
      },

      onSearch(){
        const args = {
          params: this.AdTable,
        };
        this.getAdTable(args);
      },


  },

  created() {
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
</style>
