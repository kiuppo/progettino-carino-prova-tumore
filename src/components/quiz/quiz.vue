<script>
export default {
    name: 'quiz',
    props: ['items'],
    data() {
        return {
            areAnswersShown: false,
            clicksource: -1,
        }
    }
}
</script>

<template>
    <div class="flex flex-col gap-4 border-2 rounded-xl p-4 w-min">
       <div v-for="(item, i) in items" :key="i" class="flex flex-col gap-2">       
            {{ item.domanda }}
            <div v-for="(r, j) in item.risposte" :key="j" class="flex flex-col gap-2"> 
                <div class="w-64 flex items-center justify-between">
                    <div>
                        {{ r.risposta }} 
                    </div>
                    <v-icon @click="()=>{
                        areAnswersShown = true
                        clicksource=j
                    }" v-if="!areAnswersShown" icon="mdi-circle-outline" color="black"/>
                    <v-icon v-if="r.corretta && areAnswersShown " icon="mdi-check-circle" color="green"/>
                    <v-icon v-if="!r.corretta && areAnswersShown && clicksource===j" icon="mdi-close-circle" color="red"/>
                </div>
            </div>
        </div>
    </div>
</template>
