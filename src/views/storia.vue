<script setup>
import { ref } from "vue";
const value = ref("");
  
</script>
<template>
    <div class="flex flex-col w-full items-center">
        <div class="flex flex-row font-bold w-full justify-center mt-10 text-3xl text-blue-900">Storia</div>
        <input class="border border-blue-900 mt-10 px-5 py-2" v-model="value" />
        
        <div class="text-2xl mt-10 text-purple-900" v-if="!value">nessun valore inserito</div>
        <div class="text-2xl mt-10 text-blue-900" v-else> {{  value }} </div>
    </div>
</template>