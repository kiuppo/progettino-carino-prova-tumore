<template>
    <div >
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
    </template>
    
    <script>
    import { createVuetify } from 'vuetify'
//   import img1 from '../../assets/tele1.jpg'
//   import img2 from '../../assets/tele2.jpg'
//   import img3 from '../../assets/tele3.jpg'
//   import img4 from '../../assets/tele4.jpg'
//   import img5 from '../../assets/tele5.jpg'
  export const vuetify = createVuetify({
    theme: { defaultTheme: 'light' },
  })
      export default {
        data () {
          return {
            items: [
              {
                src: img1,
              },
              {
                src: img2,
              },
              {
                src: img3,
              },
              {
                src: img4,
              },
              {
                src: img5,
              },
            ],
          }
        },
      }
    </script>