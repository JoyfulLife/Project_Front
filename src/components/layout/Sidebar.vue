<template>
  <div>
    <b-card
    no-body
    style="max-width: 20rem;"
    img-src="https://placekitten.com/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h2>Category</h2>
    </template>

    <b-card-body>
      <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>
        <b-row class="panel-group">
          <b-col class="card-panel-col">
            <div class="card-panel" @click="categoryClick()">
              <div class="card-panel-icon-wrapper icon-people">
                <b-icon icon="graph-up" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  Sport
                </div>
                <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
              </div>
            </div>
          </b-col>
        </b-row>
      </b-list-group-item>

      <b-list-group-item>
        <b-row class="panel-group">
          <b-col class="card-panel-col">
            <div class="card-panel" @click="categoryClick()">
              <div class="card-panel-icon-wrapper icon-message">
                <b-icon icon="view-stacked" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  News
                </div>
                <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
              </div>
            </div>
          </b-col>
        </b-row>
      </b-list-group-item>

      <b-list-group-item>
        <b-row class="panel-group">
          <b-col class="card-panel-col">
            <div class="card-panel" @click="categoryClick()">
              <div class="card-panel-icon-wrapper icon-money">
                <b-icon icon="speaker" class-name="card-panel-icon" />
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  Web toon
                </div>
                <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" /> -->
              </div>
            </div>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body>

    <b-card-footer>This is a footer</b-card-footer>

    <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
  </b-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const commonStore = createNamespacedHelpers("common");
const advertisingListStore = createNamespacedHelpers("advertisingList");

export default {
  name: "Sidebar",

  methods: {
    ...advertisingListStore.mapActions(["getAdvertisingList"]),

    categoryClick() {
      
      console.log("Sport 클릭 확인");
      this.advertisingList.category = "Sport"
      const args = {
            params: this.advertisingList,
            };
            this.getAdvertisingList(args)
    }
  },

  computed: {
    ...commonStore.mapState({
      common: state => state.login,
    }),
    ...advertisingListStore.mapState({
        advertisingList: state => state.advertisingList,
      }),
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 30px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgb(0, 0, 0);
        font-size: 25px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
