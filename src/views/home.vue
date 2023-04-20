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
                   al loro interno sarà possibile trovare uno slideshow ed un'icona che vi farà vedere alcuni link utili,
                   ringraziateci più tardi 
                </p>
            </div>
       
       
    </div>
</template>