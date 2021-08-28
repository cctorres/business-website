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
  color: var(--white-color);
}
body {
  background-color: #dddddd;
  margin: 0;
  padding: 0;
}

.separador {
  width: 95%;
  background-color: var(--secondary-color);
  height: 0.1rem;
  margin: 0.5rem;
}

p,
h2,
h3 {
  margin: 0;
  padding: 0;
}

h1 {
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
