<script>
import Dropdown from './dropdown.vue';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      services: [
        {
          title: 'Web',
          link: '/storia'
        },
        {
          title: 'Design',
          link:'/Tpsit'
        },
        {
          title: 'Videos',
          link: '/Informatica'
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="flex items-center justify-center gap-8 h-24 w-full bg-indigo-700">
    <div class="menu-item">
      <a href="/storia">Home</a>
    </div>
    <div class="menu-item">
      <a href="/Tpsit">About</a>
    </div>
    <Dropdown title="Services" :items="services" />
    <div class="menu-item">
      <a href="/Informatica">Contact</a>
    </div>
  </nav>
</template>

<style>

nav .menu-item {
  color: white;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  font-size:120%;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #3d3b60;
  border-bottom-color: #FF5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>