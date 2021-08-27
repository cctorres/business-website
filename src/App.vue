<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Header from "./components/header/Header.vue";
import Footer from "./components/bottom/Bottom.vue";
export default {
  components: { Sidebar, Header, Footer },
};
</script>

<template>
<Header />
  <Sidebar />
  <div>
    <router-view />
  </div>
  <Footer />
</template>

<style>
@import "./assets/styles/variables.css";
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: var(--webkit-font-smoothing);
  -moz-osx-font-smoothing: var(--moz-osx-font-smoothing);
  text-align: var(--text-align);
  color: var(--black-color);
}
body {
  margin: 0;
  padding: 0;
}

p{
  margin: 0;
  padding: 0;
}
</style>
