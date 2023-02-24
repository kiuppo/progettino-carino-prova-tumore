<script setup>
  import MainMenu from "./components/MainMenu.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-row">
    <MainMenu/>
      <div class="flex-1 flex flex-col h-full overflow-auto">
        <router-view />
      </div>
  </div>
</template>
