<template>
<div class="content">
  <h3>{{title}}</h3>
  <carousel :perPage="1" :perPageCustom="[[480, 3]]" >
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
    <slide>
      <img src="http://via.placeholder.com/600x300" alt="">
    </slide>
  </carousel>
</div>
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    components: {
      'carousel': Carousel,
      'slide': Slide
    },
    data () {
      return {
        title: 'Home page'
      }
    }
  }
</script>
<style lang="scss">
  .VueCarousel-slide img {
    padding: 0 10px;
  }
</style>
