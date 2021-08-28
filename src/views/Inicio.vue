<template>
  <div class="inicio-container">
    <h1>Bienvenidos a la escuela técnica de magos de Tokyo</h1>
    <div class="carousel"><Carousel /></div>
    <div class="inicio-texto">
      <p>
        Comúnmente conocida como Colegio Jujutsu, es una de las dos
        instituciones que enseñan Jujutsu en Japón. Opera bajo la fachada de una
        escuela religiosa privada mientras que en la realidad, se dedica de
        pleno a educar a la próxima generación de chamanes de jujutsu
      </p>
    </div>
    <div class="mapa">
      <h1>Encuentranos</h1>
      <div class="separador"></div>
      <GoogleMap />
    </div>
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

<style scoped>
.inicio-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: 10%;
}

.inicio-texto,
.carousel,
.mapa {
  background-color: var(--primary-color);
  width: 90%;
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .inicio-container {
    flex-direction: column;
    width: 100%;
  }
}
</style>