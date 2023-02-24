<script setup>
import { ref } from "vue";
const value = ref("");
</script>
<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-row w-full text-bold te justify-center mt-10 text-2xl ">Informatica</div>
        <div class="flex flex-col w-full items-center">
        <div class=" mt-10  text-center max-w-2xl">
            indovina sta parolina inchilà

        </div>
        <div class=" mt-10  text-center max-w-2xl">
            01000001 01100100 01101111 01110010 01101111 00100000 01101100 00100111
01101001 01101110 01100110 01101111 01110010 01101101 01100001 01110100
01101001 01100011 01100001 00100001

        </div>
        <div class=" mt-10  text-center max-w-2xl">
            ma non l'hai ancora beccata? ma sei scavso come paco figaa, fatti un ciano 

        </div>
        <input class="border border-blue-900 mt-10 px-7 py-2" />

        
        <button type="button"   v-bind="value" class="border bg-blue-900 border-blue-900 mt-10 px-7 py-2 text-white rounded-md"  > ciao </button>
    </div>
    </div>
    
    <div class="text-2xl mt-10 text-purple-900" v-if="!value">nessun valore inserito</div>
        <div class="text-2xl mt-10 text-blue-900" v-else> {{  value }} </div>
</template>