<template>
  <div class="menu-item text-center border-b-2 border-white" @click="isOpen = !isOpen">
    <div class="flex items-center justify-between p-4 hover:bg-[#3d3b60]" :class="{ 'bg-[#6b6696]': isOpen }">
      <a href="#" class="border-b border-red-600">
        {{ title }}
      </a>
      <v-icon v-if="!isOpen" icon="mdi-chevron-down" color="white"/>
      <v-icon v-if="isOpen" icon="mdi-chevron-up" color="white"/>
    </div>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="flex flex-col gap-1">
          <router-link :to="item.link" class="link border-b rounded-lg px-8 py-2 hover:bg-blue-600" :class="{ active: isActive }">
            {{ item.title  }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
 
  export default {
    name: 'dropdown',
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
      }
    },
  }
  </script>
  
  <style>
  /* nav .menu-item svg {
    width: 20px;
    margin-left: 20px;
  }
  
  nav .menu-item .sub-menu {
    text-align: center;
    position: absolute;
    background-color: #6b6696;
    top: calc(100% + 18px);
    left: 0%;
    right: 0%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-out;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
  </style>
  
  