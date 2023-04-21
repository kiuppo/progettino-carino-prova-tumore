<script>
import quiz from "../../components/quiz/quiz.vue"
export default{
components: { quiz },
data () {
    return {
      domanda1: [
        {
          domanda: 'il linguaggio di java è indipendente dalla piattaforma?',
          risposte: [
            {
                risposta: "vero",
                corretta: true
            },
            {
                risposta: "falso",
                corretta: false
            },
          ]
        }
        ],
        domanda2:[
        {
          domanda: 'Java è un linguaggio ad oggetti puro?',
          risposte: [
            {
                risposta: "si",
                corretta: false
            },
            {
                risposta: "no, è orientato",
                corretta: true
            },
          ]
        }
    ],
    domanda3:[
        {
          domanda: 'in java esistono gli oggetti si o no?',
          risposte: [
            {
                risposta: "si",
                corretta: true
            },
            {
                risposta: "no",
                corretta: false
            },
            {
              risposta: "forse",
                corretta: false
            }
          ]
        }
    ]
      
    }
 }
}
</script>

<template>
    <div class="flex flex-row gap-8">
    <quiz :items="domanda1"></quiz>
    <quiz :items="domanda2"></quiz>
    <quiz :items="domanda3"></quiz>
    </div>
</template>