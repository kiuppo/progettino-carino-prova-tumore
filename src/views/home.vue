<script lang="ts">
import navver from "../components/lista link/navbar.vue";
export default {
   components: { navver },
   data () {
    return {
      services: [
        {
          title: 'Web',
          link: '/storia'
        },
        {
          title: 'Design',
          link:'/Tpsit'
        },
        {
          title: 'Videos',
          link: '/Informatica'
        }
      ]
    }
  }
}
</script>
<template>
    <div class="flex flex-col w-full items-center">
        
           <div class="w-full">
            <navver></navver>
           </div>
          
        <div class=" mt-10 text-2xl max-w-2xl font-bold">Benvenuto nel miglior sito scolastico di sempre! </div>
            <div class=" mt-10  text-center max-w-2xl">
                <p width="50%">    
                    usa il menù alla tua sinistra per muoverti tra gli argomenti
                   al loro interno sarà possibile trovare uno slideshow,
                   ringraziateci più tardi, ricordati anche di usare i contatti utili nel caso qualsiasi cosa non dovesse funzionare o anche solo per 
                   darci un Feedback.
                   Lo staf De La Mejor Clastanza, ti augura uno studio sereno e spera che il tempo di studio sia di 1 ora e non la pausa.
                </p>
            </div>
       
       
    </div>
</template>