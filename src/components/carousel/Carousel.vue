<template>
  <div class="carousel-cell">
    <splide :options="options">
      <splide-slide>
        <img
          src="../../assets/images/carousel/home1.jpg"
          alt="home1"
          class="carousel-image"
        />
      </splide-slide>
      <splide-slide>
        <img
          src="../../assets/images/carousel/home2.jpg"
          alt="home2"
          class="carousel-image"
        />
      </splide-slide>
      <splide-slide>
        <img
          src="../../assets/images/carousel/home3.jpg"
          alt="home3"
          class="carousel-image"
        />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  data() {
    return {
      options: {
        rewind: true,
        autoplay: true,
      },
    };
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
.carousel-image {
  width: 100%;
  height: 65vh;
  object-fit: cover;
}
</style>
