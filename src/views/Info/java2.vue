<script>
import { ref } from "vue";
import { createVuetify } from 'vuetify'
import img17 from '../../assets/imginfo/inf17.jpg'
import img18 from '../../assets/imginfo/inf18.jpg'
import img19 from '../../assets/imginfo/inf19.jpg'
import img20 from '../../assets/imginfo/inf20.jpg'
import img21 from '../../assets/imginfo/inf21.jpg'
import img22 from '../../assets/imginfo/inf22.jpg'
import img23 from '../../assets/imginfo/inf23.jpg'
import img24 from '../../assets/imginfo/inf24.jpg'
import img25 from '../../assets/imginfo/inf25.jpg'
import img26 from '../../assets/imginfo/inf26.jpg'
import img27 from '../../assets/imginfo/inf27.jpg'
import img28 from '../../assets/imginfo/inf28.jpg'
import img29 from '../../assets/imginfo/inf29.jpg'
import img30 from '../../assets/imginfo/inf30.jpg'
import img31 from '../../assets/imginfo/inf31.jpg'
import img32 from '../../assets/imginfo/inf32.jpg'
export const vuetify = createVuetify({
  theme: { defaultTheme: 'light' },
})
    export default {
      data () {
        return {
          items: [
          {
 
 src: img17,
},
{
 src: img18,
},
{
 src: img19,
},
{
 src: img20,
},
{
 src: img21,
},
{
 src: img22,
},
{
 src: img23,
},
{
 src: img24,
},
{
 src: img25,
},
{
 src: img26,
},
{
 src: img27,
},
{
 src: img28,
},
{
 src: img29,
},
{
 src: img30,
},
{
 src: img31,
},
{
 src: img32,
},
          ],
        }
      },
    }
</script>

<template >
    <div class="h-full flex flex-col w-full center-center" >
         <div style="background: url('src/assets/tunnel.jpg') no-repeat; background-size: cover;" class="absolute top-0 bottom-0 left-0 right-0 opacity-50 -z-10"></div> 
        <div class="flex flex-row w-full text-bold te justify-center mt-10 text-4xl font-black text-white">
            Informatica
        </div>
        <div class="flex flex-col items-center pr-40 pt-10 pl-40 pb-30">
          
    <v-carousel hide-delimiter-background
    show-arrows="hover"
    show-delimiters="hover">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
        
    </div>
</template>