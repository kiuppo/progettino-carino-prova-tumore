<script lang="ts" >
import Sidebar from './components/sidebar/Sidebar.vue';
import {sidebarWidth} from './components/sidebar/state.js';


import router from './routes.js';
 export default {
   components: { Sidebar },
   setup() {
    return { sidebarWidth }
   }
} 

</script>

<template>
  <div class="absolute h-screen w-screen flex flex-row">
    <Sidebar/>
    <div class="w-full flex flex-col">
      
      <div class=" w-full flex flex-col pt-6 pr-6 pb-6 pl-6">
        <RouterView/>
      </div>
    </div> 
  </div>
</template>

<style scoped> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #294a4f;
}

#drop{
  height:10%;
}
</style> 

<!-- utili: link per slider: https://vuejsexamples.com/a-performance-focused-vue-carousel-designed-for-ssr-ssg-environments/ 
lista con link e ricerche: https://vuejs.org/examples/#grid -->