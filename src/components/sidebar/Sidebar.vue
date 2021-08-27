<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h3>
      <span v-if="collapsed">
        <div>
          <img
            src="../../assets/images/logo/logo.svg"
            alt="logo"
            class="logo"
          />
        </div>
      </span>
      <span v-else>
        <div>Colegio Técnico de Magia Metropolitana de Tokio</div></span
      >
    </h3>
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-columns">About</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  color: var(--white-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
