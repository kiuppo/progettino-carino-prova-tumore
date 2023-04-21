<script setup()>
import Dropdown from './dropdown.vue';
import { useRoute } from 'vue-router'
export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  props: {
    menus: {
      type: Array,
      required: false
    },
    setup() {
    return {};
  },
  },
  data () {
    return {
      contatti: [
        {
          title: 'Camilla C.',
          link: 'https://www.instagram.com/ca_milla0908/'
        },
        {
          title: 'Alessandro V.',
          link:'https://www.instagram.com/thegreen2110/'
        },
        {
          title: 'Alessandro C.',
          link: 'https://www.instagram.com/alessandro_comastri_/'
        },
        {
          title: 'Stefan B.',
          link: 'https://www.instagram.com/_stefan_k____/'
        }
      ],
      Ringraziamenti: [
        {
          title: 'Vuetify',
          link: 'https://vuetifyjs.com/en/introduction/why-vuetify/'
        },
        {
          title: 'vueExamples',
          link:'https://vuejsexamples.com/'
        },
        {
          title: 'w3school',
          link: 'https://www.w3schools.com/'
        }
      ]
    }
  }
}

</script>

<template>
  <nav class="bg-indigo-700">
    <div class="h-24 flex items-center justify-center gap-8 w-full" >
    <div >
      <font-awesome-icon :icon="['fab', 'instagram']" style="color: #f2f2f2;" />
    </div>
    <div class="menu-item">
      <router-link to="/gabibbo">
        istruzioni
        </router-link>
    </div>
    <Dropdown title="contatti" :items="contatti" />
    <div>
      <Dropdown title="ringraziamenti" :items="Ringraziamenti" />
    </div>
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