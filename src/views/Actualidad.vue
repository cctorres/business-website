<template>
  <div class="actualidad-container">
    <APINews />
  </div>
</template>

<script>
import APINews from "../components/new/APINews.vue";
export default {
  components: {
    APINews,
  },
};
</script>

<style scoped>
.actualidad-container {
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .actualidad-container {
    flex-direction: column;
    width: 100%;
  }
}
</style>
