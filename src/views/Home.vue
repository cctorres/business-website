<template>
  <div class="home-container">
    <Carousel />
    <div class="home-text">
      <h1>Bienvenidos a la escuela técnica de magos de Tokyo</h1>
      <hr />
      <p>
        La escuela secundaria de Jujutsu de la prefectura de Tokio, está
        conformada por un gran campus compuesto de varios edificios con
        arquitectura tradicional japonesa. Tiene un patio abierto, muchas aulas,
        dormitorios y áreas de práctica para Jujutsu
      </p>
    </div>
    <GoogleMap />
  </div>
</template>

<script>
import Carousel from "../components/carousel/Carousel.vue";
import GoogleMap from "../components/map/MapBox.vue";
export default {
  components: {
    GoogleMap,
    Carousel,
  },
};
</script>

<style>
.home-container {
  width: 100%-3.75rem;
  margin-left: 3.75rem;
}

.home-text {
  padding: 0 1rem;
}
@media (max-width: 600px) {
  .home-container {
    flex-direction: column;
    width: 100%;
  }
}
</style>