<template>
  <b-container>
    <div>
      <b-row>
        <b-col cols="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                    이직 준비해야게~~~~~~~~~~~~~~~~~~~~~~~
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col style="align-content: end">
        <b-button href="#" variant="primary" style="align-content: end">Go somewhere</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>

export default {
  name: "sHeader",
  computed: {

    },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
