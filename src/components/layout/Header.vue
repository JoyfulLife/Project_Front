<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background
      img-width="1024"
      img-height="170"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image 
      caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."-->
      <b-carousel-slide
        caption="Advertising center"
        text="우리는 광고를 찾아볼 수 있고, 광고를 신청할 수 있고, 손 쉽게 정보를 얻을 수 있습니다!"
        img-src="https://picsum.photos/1024/170/?image=52"
      >
      <!-- <b-jumbotron class="size"> -->
        <template #header>Advertising center</template>

        <template #lead>
          우리는 광고를 찾아볼 수 있고, 광고를 신청할 수 있고, 손 쉽게 정보를 얻을 수 있습니다!
        </template>

        <hr class="my-4">

        <p>
          We can browse ads, sign up for ads and get information easily!
        </p>

      <!-- </b-jumbotron> -->
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/170/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/170/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/170/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>

export default {
  name: "sHeader",
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
  computed: {

    },

  methods: {
      onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    },
};
</script>

<style lang="scss" scoped>
.size{
  width: 100%;
  height: 100%;
}

</style>
