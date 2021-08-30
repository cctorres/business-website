<template>
  <div class="tvshow-container">
    <h1>Anime</h1>
    <div class="anime"><TVShow /></div>
  </div>
</template>

<script>
import TVShow from "../components/anime/Anime.vue";
export default {
  components: {
    TVShow,
  },
};
</script>

<style scoped>
.tvshow-container {
  display: flex;
  width: 90%;
  margin-left: 10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.anime {
  width: 90%;
}
</style>
