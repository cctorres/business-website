<template>
  <div v-if="result">
    <div v-for="r in result" :key="r.id">
      <div class="anime-container">
        <h1>{{ r.attributes.canonicalTitle }}</h1>
        <img
          src="https://m.media-amazon.com/images/I/81tSqWi40uL._AC_SL1500_.jpg"
        />
        <div class="anime-info">
          <div class="square-info">
            <h2>Ranking</h2>
            <h3>{{ r.attributes.popularityRank }}</h3>
          </div>
          <div class="square-info">
            <h2>Edad</h2>
            <h3>{{ r.attributes.ageRating }}</h3>
          </div>
          <div class="square-info">
            <h2>Capitulos</h2>
            <h3>{{ r.attributes.episodeCount }}</h3>
          </div>
          <div class="square-info">
            <h2>Aprobación</h2>
            <h3>{{ r.attributes.averageRating }}%</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="spinner">Cargando...</div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let result = ref(null);
    onMounted(async () => {
      const response = await fetch("https://kitsu.io/api/edge/anime/42765");
      const data = await response.json();
      result.value = data;
    });
    return { result };
  },
  testLog() {},
};
</script>

<style scoped>
.anime-container {
  background-color: var(--primary-color);
  margin: 0.5rem 0;
  padding: 1rem 0;
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

.anime-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 0 0;
}

.square-info {
  border: 1px solid var(--secondary-color);
  margin: 0 0.5rem;
}

img{
  width: 100%;
}

h2 {
  background-color: var(--secondary-color);
  padding: 0.2rem;
}

.spinner {
  border: 0.5rem solid var(--secondary-color);
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border-color: var(--secondary-color) var(--primary-color);
  animation: spin 1s ease infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .anime-info {
    overflow-x: auto;
  }
}
</style>
