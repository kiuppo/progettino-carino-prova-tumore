<script setup()>
import { useRouter } from "vue-router";
import SidebarLink from "./sidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
const router = useRouter();
</script>

<template>
  <div class="sidebar " :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>S</div>
      </span>
      <span v-else>Sidebar</span>
    </h1>
<div class="flex flex-col h-140 overflow-auto" v-if="!collapsed">
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/informatica" icon="fas fa-columns"
      >Informatica</SidebarLink
    >
    <SidebarLink to="/storia" icon="fas fa-chart-bar">Storia</SidebarLink>
    <SidebarLink to="/tpsit" icon="fas fa-users">Tpsit</SidebarLink>
    <SidebarLink to="/sistemi" icon="fas fa-image">Sistemi</SidebarLink>  
    <SidebarLink to="/c++" icon="fas fa-image">c++</SidebarLink>

  </div>
  <div v-else class="h-64"></div>
      <v-icon  icon="mdi-arrow-right" color="white" :class="{ 'rotate-180': collapsed }" @click="() => toggleSidebar()"></v-icon>
  </div>
  
</template>
 
<style>
:root {
   --sidebar-bg-color: #312e81; 
  --sidebar-item-hover: #3d3b60;
  --sidebar-item-active: #085c67;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  height: 100vh;
  float: left;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
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
