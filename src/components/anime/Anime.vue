<template>
  <ul v-if="result.length">
    <li v-for="r in result" :key="r.slug">{{ r.title }}</li>
  </ul>
  <p v-else>Cargando...</p>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    let result = ref([]);
    onMounted(async () => {
      const response = await fetch("https://kitsu.io/api/edge/anime/42765");
      const data = await response.json();
      result.value = data.data;
    });
    return { result };
  },
  testLog() {},
};
</script>