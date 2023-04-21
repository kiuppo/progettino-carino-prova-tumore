<script>
import quiz from "../../components/quiz/quiz.vue"
export default{
components: { quiz },
data () {
    return {
      domanda1: [
        {
          domanda: 'Quali furono gli stati an entrare in guerra?',
          risposte: [
            {
                risposta: "Francia, Austria",
                corretta: false
            },
            {
                risposta: "Impero Asburgico, Spagna,",
                corretta: true
            },
            {
                risposta: "Spagnoli, Francesi",
                corretta: false
            },
            {
                risposta: "Nessuna delle precedenti",
                corretta: false
            },
          ]
        }
        ],
        domanda2:[
        {
          domanda: 'Quando è scoppiata la guerra dei trent^anni?',
          risposte: [
          {
                risposta: "7 settembre 1777",
                corretta: false
            },
          {
                risposta: "12 aprile 1600",
                corretta: false
            },
            {
                risposta: "23 maggio 1618",
                corretta: true
            },
            {
                risposta: "1 gennaio 1300",
                corretta: false
            },
          ]
        }
    ]
      
    }
 }
}
</script>

<template>
    <div class="flex flex-row  gap-8">
      <div>
    <quiz :items="domanda1"></quiz>
    </div>
    <div>
    <quiz :items="domanda2"></quiz>
  </div>
    </div>
</template>