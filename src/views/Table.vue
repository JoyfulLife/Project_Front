<template>
  <div>
      <b-container class="mt-5">
        <b-table
              :fields="fields"
              responsive="sm"
              thead-tr-class="rowClass"
              :items="tableList.list"
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
const tableListStore = createNamespacedHelpers("tableList");

export default {
  name: "Table",
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

      ...tableListStore.mapState({
        tableList: state => state.tableList,
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
          key: "name",
          label: "name",
          thClass: "w-no"
        },
        {
          key: "age",
          label: "age",
          thClass: "w-10"
        },
        {
          key: "contact_of_group_family_name",
          label: "55555",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "contact_of_group_given_name",
          label: "66666",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "mobile_no",
          label: "77777",
          thClass: "w-15 text-left",
          tdClass: "text-left"
        },
        {
          key: "e_mail",
          label: "88888",
          thClass: "w-20 text-left",
          tdClass: "text-left"
        },
      ];
    },
    
  },

  methods:{
      ...tableListStore.mapActions(["retrieveClient"])
  },

  created() {
      this.retrieveClient();
  }
};
</script>

<style lang="scss" scoped>

</style>
