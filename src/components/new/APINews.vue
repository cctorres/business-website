<template>
  <ul v-if="result.length">
    <li v-for="r in result" :key="r.title">{{ r.title }}</li>
  </ul>
  <p v-else>Cargando...</p>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let result = ref([]);
    onMounted(async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=Jujutsu%20kaisen&sortBy=popularity&language=es&apiKey=" +
          process.env.VUE_APP_NEWSAPI_KEY
      );
      const data = await response.json();
      result.value = data.articles;
    });
    return { result };
  },
  testLog() {},
};
</script>
