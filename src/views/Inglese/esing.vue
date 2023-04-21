<script>
import quiz from "../../components/quiz/quiz.vue"
export default{
components: { quiz },
data () {
    return {
      domanda1: [
        {
          domanda: 'Quale è la forma corretta per i present perfect',
          risposte: [
            {
                risposta: "to have + participio presente del verbo principale",
                corretta: false
            },
            {
                risposta: "to have + participio passato del verbo principale",
                corretta: true
            },
            {
                risposta: "to had + particio  passato del verbo principale",
                corretta: false
            },
            {
                risposta: "has to + participio passato del verbo principale",
                corretta: false
            },
          ]
        }
        ],
        domanda2:[
        {
          domanda: 'il future perfect continuos come si forma',
          risposte: [
          {
                risposta: "will + have + past participle",
                corretta: false
            },
          {
                risposta: "will + have + il particio passato del verbo principale",
                corretta: false
            },
            {
                risposta: "will + have been + la forma in ing",
                corretta: true
            },
            {
                risposta: "will + have + preswnt perfect",
                corretta: false
            },
          ]
        }
    ],
          domanda3: [
        {
          domanda: 'Quale è la forma corretta per wihs and if only',
          risposte: [
            {
                risposta: "wish/if only + past simple",
                corretta: true
            },
            {
                risposta: "wish /if only + past participle",
                corretta: false
            },
            {
                risposta: "wish/if only + past perfect",
                corretta: false
            },
            {
                risposta: "wish/if only + present simple",
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
     
    <quiz :items="domanda1"></quiz>
   
  
    <quiz :items="domanda2"></quiz>
     
    <quiz :items="domanda3"></quiz>
    </div>
</template>