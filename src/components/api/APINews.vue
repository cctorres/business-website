<template>
  <ul v-if="result.length">
    <li v-for="r in result" :key="r.title">{{ r.title }}</li>
  </ul>
  <p v-else>No hay usuarios disponible</p>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let result = ref([]);
    onMounted(async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=Jujutsu%20kaisen&sortBy=popularity&language=es&apiKey=f4d4a439ccf8421ca72123a74d7f05c2"
      );
      const data = await response.json();
      result.value = data.articles;
    });
    return { result };
  },
  testLog() {},
};
</script>
