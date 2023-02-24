<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const lista = ref([
    {name: 'Home', path:'/'}, 
    {name: 'Tpsit', path:'/tpsit'}, 
    {name: 'Sistemi', path:'/sistemi'}, 
    {name: 'Informatica', path:'/informatica'}
]);

const router = useRouter()
</script>

<template>
    <div class="w-48 h-full bg-white-500 flex flex-col items-center py-5 gap-3 shadow-lg shadow-pink-400">
        <div class="w-full text-2xl text-center font-semibold text-blue">Menù</div>
        <div class="w-full bg-white mt-5 h-px"></div>
        <div @click="() => router.push(item.path)" 
            v-for="item in lista" 
            class="text-purple cursor-pointer w-full h-12 flex flex-col justify-center items-center hover:text-lg hover:bg-purple-700 transition-all duration-500">
            {{ item.name }}
        </div>
    </div>
</template>
