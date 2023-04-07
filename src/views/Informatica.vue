<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<template >
    <div class="h-full flex flex-col w-full center-center">
        <div style="background: url('src/assets/tunnel.jpg');" class="absolute top-0 bottom-0 left-0 right-0 opacity-50 -z-10"></div>
        <div class="flex flex-row w-full text-bold te justify-center mt-10 text-4xl font-black text-white">
            Informatica
        </div>
        <div class="flex flex-col w-full items-center">
            <div class=" mt-10 text-bold text-center text-2xl">
                usa il menu sopra per decidere l'argomento  
            </div>
        </div>
    </div>
</template>
