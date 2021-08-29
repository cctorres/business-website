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
    <SidebarLink to="/" icon="fas fa-home">Inicio</SidebarLink>
    <SidebarLink to="/nosotros" icon="fas fa-info-circle"
      >Sobre nosotros</SidebarLink
    >
    <SidebarLink to="/miembros" icon="fas fa-users">Miembros</SidebarLink>
    <SidebarLink to="/actualidad" icon="fas fa-newspaper"
      >Actualidad</SidebarLink
    >

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
  padding: 1%;
  transition: 0.3s ease;
  align-items: center;
}

.collapse-icon {
  position: absolute;
  bottom: 20%;
  padding: 0.75em;
  color: var(--white-color);
  transition: 0.2s linear;
  background-color: var(--secondary-color);
  border-radius: 5px;
  cursor: pointer;
}

.collapse-icon:hover {
  background-color: var(--dark-secondary-color);
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

h3 {
  height: 20vh;
}
</style>
